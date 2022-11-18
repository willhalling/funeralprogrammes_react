import { Container } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

import { Footer, Header } from '../../molecules'

const useStyles = makeStyles((theme: any) => ({
  main: {
    maxWidth: '80rem',
    padding: '1.5rem',
  },
  container: {
    minHeight: '90vh',
    background: 'rgba(31,41,55,1)',
    color: 'white',
  },
}))

interface IAppLayout {
  children: React.ReactNode
}
export const AppLayout: React.FC<IAppLayout> = ({ children }: IAppLayout) => {
  const classes = useStyles()
  return (
    <div>
      <Header />
      <main className={classes.container}>
        <Container className={classes.main}>{children}</Container>
      </main>
      <Footer />
    </div>
  )
}
