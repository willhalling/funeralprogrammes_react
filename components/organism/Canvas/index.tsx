import { useRef, useState } from 'react'
import shallow from 'zustand/shallow'

import { TEMPLATES } from '../../../constants/templates'
import { API } from '../../../utils/api'
import { useBookletStore } from './store'
const BOOKLET_SIZES = {
  a5: {
    width: 1748,
    height: 2480,
  },
}

const fetchProgram = async (props: any) => {
  // console.log('props', props)
  return await API.getProgramme({
    uid: 'photograph-floral',
  })
}
export const Canvas = () => {
  const ref = useRef<any>()

  const [state, setState] = useState<any>({
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
  const id = 'photograph-floral'
  const { booklet }: any = useBookletStore((state) => state, shallow)
  // fetch programs
  //init method

  const renderTheme = (themeQuery: string) => {
    const theme = Object.assign(
      {},
      state.templates.find((item: any) => item.slug === themeQuery),
    )
    // this.updateThemeFromQuery();
    const image = {
      width: state.theme?.width || BOOKLET_SIZES.a5.width,
      height: state.theme?.height || BOOKLET_SIZES.a5.height,
      originalWidth: state.theme?.width || BOOKLET_SIZES.a5.width,
      originalHeight: state.theme?.height || BOOKLET_SIZES.a5.height,
    }
    // this.canvasReady = true
    setState((prev: any) => ({ ...prev, theme, image }))
  }
  const setupPhoto = (imageBase64: any) => {
    // console.log('setupPhoto');
    // set image when coming back from preview page
    // need setTimeout otherwise image not ready
    setTimeout(async () => {
      if (imageBase64) {
        await this.$refs.canvasContainer.drawPhoto()
      }
    }, 0)
  }

  const updatePage = (pageIndex: number) => {
    // if front cover we need to draw the photo again when changing page tabs
    if (pageIndex === 0) {
      const imageBase64 = booklet.pages[0].imageBase64
      setupPhoto(imageBase64)
    }
    booklet.pages.forEach((page: any) => {
      page.active = false
    })
    booklet.pages[pageIndex].active = true
  }

  return (
    <div>
      <div ref={ref}></div>
    </div>
  )
}
