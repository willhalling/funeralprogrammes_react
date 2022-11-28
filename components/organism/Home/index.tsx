import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { HomePageImage } from '../../../utils/imageMapping'
import { makeStyles } from '../../../utils/useStyles'
import { MUIButton } from '../../atom'

const useStyles = makeStyles()((theme: any) => ({
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'Center',
    alignItems: 'center',
  },
  text: {
    fontSize: '1.9rem !important',
    fontWeight: '600 !important',
    textAlign: 'center',
    letterSpacing: '1px',
    lineHeight: 1.5,
    marginBottom: 30,
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      fontSize: '3.2rem !important',
    },
  },
  free: {
    fontWeight: '700 !important',
    color: 'rgba(251, 191, 36,1)',
    textDecoration: 'underline',
    textUnderlineOffset: 5,
  },
  homeImage: {
    width: '100% !important',
    height: 'auto !important',
    [theme.breakpoints.up('sm')]: {
      width: '100% !important',
      maxWidth: '900px !important',
      height: 'auto !important',
    },
  },
  button: {
    marginTop: 40,
    marginBottom: 40,
  },
}))

export const Home: React.FC = () => {
  const { classes } = useStyles()
  const router = useRouter()
  return (
    <Box className={classes.mainWrapper}>
      <Typography variant="h1" className={classes.text}>
        <Link href="/template">
          Create a <span className={classes.free}>Free</span>
        </Link>
        <br />
        Funeral Programme
        <br />
        in 2-5 minutes
      </Typography>
      <Image
        src={HomePageImage}
        width={800}
        height={400}
        alt="home page image"
        className={classes.homeImage}
      />
      <MUIButton
        onClick={() => {
          router.push('/templates')
        }}
        className={classes.button}
      >
        Choose Template
      </MUIButton>
    </Box>
  )
}
