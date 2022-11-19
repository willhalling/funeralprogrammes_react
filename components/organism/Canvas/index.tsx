import React, { useRef, useState } from 'react'

import { TEMPLATES } from '../../../constants/templates'
const BOOKLET_SIZES = {
  a5: {
    width: 1748,
    height: 2480,
  },
}

export const Canvas = () => {
  const ref = useRef<any>()

  const [state, setState] = useState({
    canvasReady: false,
    loading: true,
    uploading: false,
    bookletSizes: BOOKLET_SIZES,
    image: null,
    textButtonAdded: false,
    theme: {
      pages: [],
    },
    clearObjects: false,
    template: {
      current: 'photograph-floral',
    },
    templates: TEMPLATES,
  })

  return (
    <div>
      <div ref={ref}></div>
    </div>
  )
}
