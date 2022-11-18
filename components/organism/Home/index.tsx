import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Link from 'next/link'
import React from 'react'
const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    display: 'flex',
    justifyContent: 'Center',
  },
}))
export const Home = () => {
  const classes = useStyles()
  return (
    <Box className={classes.mainWrapper}>
      {/* <Typography> */}
      <Link href="/create">
        hello
        {/* Create a <span>Free</span>
          <br />
          Funeral Programme
          <br />
          in 2-5 minutes */}
      </Link>
      {/* </Typography> */}
    </Box>
  )
}
