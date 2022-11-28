import { Button } from '@mui/material'
import React from 'react'

import { makeStyles } from '../../../utils/useStyles'
const useStyle = makeStyles()((theme: any) => ({
  button: {
    fontSize: '1rem',
    fontWeight: '600',
  },
}))
export const UploadButton = (props: any) => {
  const { classes } = useStyle()
  return (
    <Button variant="contained" color="secondary" component="label" className={classes.button}>
      Upload
      <input hidden accept="image/*" multiple type="file" onChange={props.onChange} />
    </Button>
  )
}
