import { Box, Container } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Link from 'next/link'
const useStyles = makeStyles((theme: any) => ({
  container: {
    background: theme.palette.primary.main,
    width: '100vw',
  },
  wrapper: {
    display: 'flex',
    padding: '1.5rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '80rem',
  },
  copyright: {
    color: theme.palette.primary[400],
    fontSize: '1rem',
  },
  footerItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '1rem',
    fontWeight: 600,
    gap: 10,
  },
}))
export const Footer = () => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Container maxWidth="xl" className={classes.wrapper}>
        <div className={classes.copyright}>
          <a href="#"> &copy; Copyright FuneralProgrammes.uk</a>
        </div>
        <div className={classes.footerItem}>
          <Link href={'/about'}>About </Link>
          <span>|</span>
          <Link href={'/contact'}>Contact</Link>
        </div>
      </Container>
    </Box>
  )
}
