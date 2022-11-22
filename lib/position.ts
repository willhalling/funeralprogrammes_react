/**
 * Position Utils
 */

export function setPosition(obj: any, newPosition: any) {
  obj.setPositionByOrigin(newPosition.coordinates, newPosition.originX, newPosition.originY)
  obj.setCoords()
}

export function getPosition(
  width: any,
  height: any,
  position: any,
  offsetPadding: any,
  left = 'left',
  top = 'top',
) {
  const customPosition = (position: any) => {
    if (position === 'center') {
      return width / 2
    }
    return position
  }
  const customXPosition = (position: any) => {
    if (position === 'center') {
      return 'center'
    }
    return 'left'
  }
  const customTextAlignPosition = (position: any) => {
    if (position === 'center') {
      return 'center'
    }
    return 'left'
  }
  let newPosition = {}
  switch (position) {
    case 'topLeft':
      newPosition = {
        coordinates: {
          [left]: offsetPadding,
          [top]: offsetPadding,
        },
        originX: 'left',
        originY: 'top',
        textAlign: 'left',
      }
      break
    case 'topMiddle':
      newPosition = {
        coordinates: {
          [left]: width / 2,
          [top]: offsetPadding,
        },
        originX: 'center',
        originY: 'top',
        textAlign: 'center',
      }
      break
    case 'topRight':
      newPosition = {
        coordinates: {
          [left]: width - offsetPadding,
          [top]: offsetPadding,
        },
        originX: 'right',
        originY: 'top',
        textAlign: 'right',
      }
      break
    case 'middleLeft':
      newPosition = {
        coordinates: {
          [left]: offsetPadding,
          [top]: height / 2 - offsetPadding,
        },
        originX: 'left',
        originY: 'center',
        textAlign: 'left',
      }
      break
    case 'middle':
      newPosition = {
        coordinates: {
          [left]: width / 2,
          [top]: height / 2,
        },
        originX: 'center',
        originY: 'center',
        textAlign: 'center',
      }
      break
    case 'middleRight':
      newPosition = {
        coordinates: {
          [left]: width - offsetPadding,
          [top]: height / 2 - offsetPadding,
        },
        originX: 'right',
        originY: 'center',
        textAlign: 'right',
      }
      break
    case 'bottomMiddle':
      newPosition = {
        coordinates: {
          [left]: width / 2,
          [top]: height - offsetPadding,
        },
        originX: 'center',
        originY: 'bottom',
        textAlign: 'center',
      }
      break
    case 'bottomRight':
      newPosition = {
        coordinates: {
          [left]: width - offsetPadding,
          [top]: height - offsetPadding,
        },
        originX: 'right',
        originY: 'bottom',
        textAlign: 'right',
      }
      break
    case 'bottomLeft':
      newPosition = {
        coordinates: {
          [left]: offsetPadding,
          [top]: height - offsetPadding,
        },
        originX: 'left',
        originY: 'bottom',
        textAlign: 'left',
      }
      break
    default:
      // default to set position using x/y coordinates
      newPosition = {
        coordinates: {
          [left]: customPosition(position.left),
          [top]: customPosition(position.top),
        },
        originX: customXPosition(position.left),
        originY: 'top',
        textAlign: customTextAlignPosition(position.left),
      }
  }
  return newPosition
}
