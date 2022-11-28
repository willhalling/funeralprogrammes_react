import React, { useEffect, useLayoutEffect, useState } from 'react'

export const Canvas = (props: any) => {
  const [canvas, setCanvas] = useState<any>()

  useEffect(() => {
    setCanvas(props.canvas)
  }, [props])

  return (
    <div>
      <canvas style={{ margin: '0 auto', border: '2px solid' }} id={'c' + props.idx} />
    </div>
  )
}
