// import { Grid } from '@mui/material'
import Grid from '@mui/material/Grid/Grid'
import { fabric } from 'fabric'
import React, { useEffect, useCallback } from 'react'
import { useState } from 'react'
import { BOOKLET } from '../../../constants/booklet'
import { TEMPLATE_1 } from '../../../constants/templates/template_1'
import { data, headerLogoBase64 } from '../../../lib/canvas'
import { InputField } from '../../atom'
import { TemplateSlugInterface } from '../../interfaces/template'
import { UploadButton } from '../../molecules'
import { CustomTabs } from '../../molecules/Tabs'

export const CreateTemplate = (props: TemplateSlugInterface) => {
  const [canvasList, setCanvasList] = useState<any>([])

  const [value, setValue] = React.useState(0)

  const [state, setState] = React.useState<any>(null)

  // init the state name, value
  useEffect(() => {
    handleBookletChange(value)
  }, [])

  // set booklet on tab change
  const handleBookletChange = (idx: number) => {
    setState({ booklet: BOOKLET.pages[idx] })
  }
  // handle tab and update booklet
  const handleChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    handleBookletChange(newValue)
  }, [])

  // handle tab and update booklet
  const handleInputChange = useCallback(
    (event: any, newValue: number) => {
      const oldState = { ...state }
      oldState['booklet']['fields'][newValue]['value'] = event.target.value
      setState(oldState)
    },
    [state, value],
  )

  // handle file upload section

  const handleFileUpload = (e: any) => {
    const reader = new FileReader()
    const oldState = { ...state }
    reader.onload = function (e: any) {
      oldState['booklet']['imageBase64'] = e.target.result
      setState(oldState)
    }
    reader.readAsDataURL(e.target.files[0])
  }

  // set the canvas and background image , render canvas.

  useEffect(() => {
    setCanvasBackgroundImageUrl()
  }, [value, state])

  // initialize the canvas with the content
  function setCanvasBackgroundImageUrl() {
    const templates: any = TEMPLATE_1
    const booklet = BOOKLET.pages[value]
    templates[0].pages.forEach((page: any, idx: any) => {
      let canvas: any = new fabric.Canvas('c' + idx, {
        hoverCursor: 'pointer',
        selection: true,
        selectionBorderColor: 'green',
        height: 1000,
        width: 800,
      })

      if (page.backgroundImage && page.backgroundImage.length > 0) {
        console.log("78")
        fabric.Image.fromURL(page.backgroundImage, function (img) {
          scaleAndPositionImage(img, canvas, booklet)
        })
      } else {
        canvas.backgroundColor = 'white'
        canvas.fill = 'white'
        scaleAndPositionImage('', canvas, booklet)
      }
    })
  }

  // scale and position the background image
  function scaleAndPositionImage(img: any, canvas: any, booklet: any) {
    var canvasAspect = canvas.width / canvas.height
    var imgAspect = img.width / img.height
    var left, top, scaleFactor

    // scale
    if (canvasAspect >= imgAspect) {
      var scaleFactor: any = canvas.width / img.width
      left = 0
      top = -(img.height * scaleFactor - canvas.height) / 2
    } else {
      var scaleFactor: any = canvas.height / img.height
      top = 0
      left = -(img.width * scaleFactor - canvas.width) / 2
    }

    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
      top: top,
      left: left,
      originX: 'left',
      originY: 'top',
      scaleX: scaleFactor,
      scaleY: scaleFactor,
    })

    // render all the elements
    renderCanvas(canvas, booklet)
  }

  // render all the elements of canvas
  function renderCanvas(canvas: any, booklet: any) {
    let circle: any = null
    let photoText: any = null
    let uploadedImage: any = null
    let headerLogo: any = null
    let textThree: any = null
    let textOne: any = null
    let textTwo: any = null

    // create text
    if (value === 0) {
      textOne = new fabric.Text(booklet.fields.textOne.value, {
        left: canvas.width / 1.5,
        top: canvas.height / 5,
        fontSize: 35,
        textAlign: 'center',
        backgroundColor: 'white',
        // width: 400,
        // padding: 100,
        fontFamily: 'Playfair Display',
        fill: 'black',
      })
    } else {
      textOne = new fabric.Text(booklet.fields.textOne.value, {
        left: canvas.width - 150,
        top: canvas.height / 5,
        fontSize: 45,
        textAlign: 'center',
        backgroundColor: 'white',
        // width: 400,
        // padding: 100,
        fontFamily: 'Playfair Display',
        fill: 'black',
      })
    }

    if (value !== 0) {
      const image = new Image()
      image.src = headerLogoBase64
      headerLogo = new fabric.Image(image, {
        left: canvas.width / 1.2,
        top: canvas.height / 4,
        scaleX: 0.9,
        scaleY: 0.9,
      })
    }

    if (value === 0) {
      textTwo = new fabric.Text(booklet.fields.textTwo.value, {
        left: canvas.width / 1.4,
        top: canvas.height / 3,
        fontSize: 60,
        fontFamily: 'Playfair Display',
        fill: 'black',
      })
    } else {
      textTwo = new fabric.Textbox(booklet.fields.textTwo.value, {
        left: canvas.width / 1.9,
        top: canvas.height / 3,
        fontSize: 22,
        charSpacing: 40,
        width: canvas.width / 1.3,
        fontFamily: 'Playfair Display',
        fill: 'black',
      })
    }

    if (booklet.imageBase64 === null) {
      circle = new fabric.Circle({
        radius: 160,
        opacity: 0.5,
        fill: 'black',
        left: canvas.width / 1.4,
        top: canvas.height / 2,
      })

      photoText = new fabric.Text('    Photo \nGoes Here', {
        left: canvas.width / 1.3,
        top: canvas.height / 1.7,
        fontSize: 50,
        padding: 30,
        fontFamily: 'Cormorant Garamond',
        fill: 'white',
      })
    } else {
      const image = new Image()
      image.src = booklet.imageBase64
      uploadedImage = new fabric.Image(image, {
        left: canvas.width / 1.5,
        top: canvas.height / 2.2,
        scaleX: 0.8,
        scaleY: 0.8,
      })
    }

    if (value === 0) {
      textThree = new fabric.Text(booklet.fields.textThree.value, {
        left: canvas.width / 2,
        top: canvas.height,
        fontSize: 30,
        backgroundColor: 'white',
        // width: 300,
        // padding: 30,
        fontFamily: 'Playfair Display',
        fill: 'black',
      })
    }

    // add image and text to a group
    let groups = [textOne, textTwo, textThree, circle, photoText, uploadedImage, headerLogo].filter(
      (f) => f !== null,
    )
    var group = new fabric.Group(groups, {
      left: 50,
      top: 50,
    })

    // add the group to canvas
    canvas.add(group)
    setCanvasList((prev: any) => [...prev, canvas])
  }

  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 10 }} columns={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={1}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1 }}>
            {state?.booklet &&
              Object.entries(state.booklet.fields).map(([key, data]: any) => {
                return (
                  <Grid item xs={1} key={key}>
                    <InputField
                      label={data.name}
                      onChange={(e) => handleInputChange(e, key)}
                      value={data.value}
                    />
                  </Grid>
                )
              })}
            {value === 0 && (
              <Grid item xs={1}>
                <UploadButton onChange={handleFileUpload} />
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <CustomTabs
            value={value}
            handleChange={handleChange}
            booklet={state}
            canvasList={canvasList}
          />
        </Grid>
      </Grid>
    </div>
  )
}
