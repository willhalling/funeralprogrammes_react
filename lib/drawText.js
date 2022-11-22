import * as fabric from 'fabric'

import { getPosition } from './position'
const MAX_CONTENT_WIDTH = 1500

const drawTextBackground = (
  canvas,
  id,
  blendMode = null,
  newTextObject = null,
  objectPosition = null,
  index = 0,
  theme,
  pages,
) => {
  if (!theme.pages[index].objects[id]) {
    return
  }
  // console.log('this.pages[index]', this.pages[index])
  // console.log('index', index)
  // console.log('id', id)
  if (!pages[index].fields[id]) {
    return
  }
  const textSrc = pages[index].fields[id].value
  // console.log('textSrc', textSrc)
  // let textAlign = 'center'
  const hasBackgroundColour = theme.pages[index].objects[id].backgroundColour

  // If handwriting font we need to add additional bounding box padding
  const boundingBoxPadding = theme.pages[index].objects[id].font === 'Viva-Beautiful' ? 20 : 0

  const angle = theme.pages[index].objects[id].angle ? theme.pages[index].objects[id].angle : 0

  let pos = {
    padding: {
      left: 10,
      top: 5,
      bottom: 5,
      right: 10,
    },
    margin: {
      left: 0,
      top: 5,
      bottom: 5,
      right: 0,
    },
    angle: angle,
  }

  // Fixes alignment if no background colour
  // If there is no background colour we remove padding as not needed
  if (hasBackgroundColour === 'transparent') {
    pos = {
      padding: {
        left: 0,
        top: 0,
        bottom: 5,
        right: 0,
      },
      margin: {
        left: 0,
        top: 5,
        bottom: 5,
        right: 0,
      },
      angle: angle,
    }
  }

  // Create the text measuring node - not added to the canvas !
  const textMeasure = new fabric.Textbox(textSrc, {
    fontFamily: theme.pages[index].objects[id].font,
    fontSize: theme.pages[index].objects[id].size,
    textBaseline: 'bottom',
    width: MAX_CONTENT_WIDTH,
    // textAlign: this.theme.pages[index].objects[id].textAlign,
    left: 0,
    top: 0,
    fill: theme.pages[index].objects[id].colour,
    charSpacing: 50,
    stroke: '',
    ...newTextObject,
  })

  let shapes = []

  const drawTextLines = (groupWidth, alignment) => {
    // loop round the lines in the text creating a margin/pad scenario for each line
    let theText = null
    let text = null
    let textHeight = null
    let rectPadding = null
    let rectMargin = null
    let top = 0
    shapes = []
    // objectPosition = null

    for (let i = 0; i < textMeasure._textLines.length; i = i + 1) {
      theText = textMeasure._textLines[i].join('')
      textHeight = Math.floor(textMeasure.lineHeight * textMeasure.fontSize) //textMeasure.getHeightOfLine(i)

      // Make the text node for line i
      text = new fabric.Text(theText, {
        id: 'textChild',
        fontFamily: theme.pages[index].objects[id].font,
        fontSize: theme.pages[index].objects[id].size,
        // textAlign: this.theme.pages[index].objects[id].textAlign,
        left: 0,
        top: top,
        fill: theme.pages[index].objects[id].colour,
        stroke: '',
        charSpacing: 50,
      })

      // create the outer 'margin' rect, note the position is negatively offset for padding & margin
      // and the width is sized from the dimensions of the text node plus 2 x (padding + margin).
      rectMargin = new fabric.Rect({
        left: -1 * (pos.padding.left + pos.margin.left),
        top: top - (pos.padding.top + pos.margin.top),
        width:
          text.width +
          (pos.padding.left + pos.padding.right + (pos.margin.left + pos.margin.right)),
        height:
          textHeight +
          (pos.padding.top + pos.padding.bottom + (pos.margin.top + pos.margin.bottom)),
        fill: 'transparent',
        // fill: '#FC0000'
      })
      shapes.push(rectMargin)

      // Start right or center alignment
      // This is set after left alignment is init
      // So needs a current object to calculate group/currentObject width
      let rectPaddingLeft
      const offsetPadding =
        pos.padding.left + pos.padding.right - (pos.margin.left + pos.margin.right) / 2

      if (groupWidth && alignment === 'right') {
        rectPaddingLeft = groupWidth - rectMargin.width - offsetPadding
        rectMargin.left = rectPaddingLeft
        text.left = rectPaddingLeft + pos.padding.right
      } else if (groupWidth && alignment === 'center') {
        rectPaddingLeft = (groupWidth - rectMargin.width) / 2
        rectMargin.left = rectPaddingLeft
        text.left = rectPaddingLeft + pos.padding.right
      } else {
        rectPaddingLeft = -1 * pos.padding.left
      }

      // create the inner 'padding' rect, note the position is offset for padding only
      // and the width is sized from the dimensions of the text node plus 2 x padding.
      rectPadding = new fabric.Rect({
        id: 'textRectangle',
        width: text.width + (pos.padding.left + pos.padding.right),
        height: textHeight + (pos.padding.top + pos.padding.bottom),
        left: rectPaddingLeft,
        top: top - pos.padding.top,
        fill: theme.pages[index].objects[id].backgroundColour,
        opacity: theme.pages[index].objects[id].opacity || 1,
      })
      shapes.push(rectPadding)
      shapes.push(text)

      // move the insert point down by the height of the line
      // const gap = 0; // text.lineHeight - textHeight;
      top =
        top -
        1 +
        textHeight +
        pos.padding.top +
        pos.margin.top +
        pos.padding.bottom +
        pos.margin.bottom
    }
  }

  drawTextLines()

  // At this point we have a list of shapes to output in the shapes[] array.
  // Create group and add the shapes to group.
  // note that group is positioned so that the topleft of the first text line is where
  // it would fall if it were a standard text node.
  let group = new fabric.Group(shapes, {
    id: id,
    left: 0 - (pos.padding.left - pos.margin.left),
    top: 100 - (pos.padding.top - pos.margin.top),
    angle: pos.angle,
  })

  // Default position set by theme constant,
  // Otherwise objectPosition has priority (if set as an argument)
  const newPosition = getPosition(
    this.canvasData.width,
    this.canvasData.height,
    theme.pages[index].objects[id].position,
    150,
  )

  // newPosition = objectPosition || newPosition
  const textAlign = newPosition.textAlign

  // Default to coordinates set by user, or use theme coordinates
  const coordinates = objectPosition || newPosition.coordinates

  // If text Align is set, we need to draw text lines again with correct alignment
  if (textAlign) {
    drawTextLines(group.width, textAlign)
    group = new fabric.Group(shapes, { id: id, angle: pos.angle })
  }
  group.set({
    globalCompositeOperation: blendMode,
    originX: newPosition.originX,
    originY: newPosition.originY,
    lockMovementX: true,
    lockMovementY: true,
    selectable: false,
    ...coordinates,
  })
  group.set({
    // We need to increase the selection / bounding box padding by 8px
    // This is to accommodate unpredictable fonts such as Viva-Beautiful
    _getNonTransformedDimensions() {
      // Object dimensions
      return new fabric.Point(this.width, this.height).scalarAdd(this.padding + boundingBoxPadding)
    },
  })

  group.setCoords()
  canvas.add(group)
}

export { drawTextBackground }
