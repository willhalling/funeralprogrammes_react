import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from 'next/link'

import { DesktoAppLogo, MobileAppLogo } from '../../../utils/imageMapping'
import { makeStyles } from '../../../utils/useStyles'
import { MUIButton } from '../../atom'

const useStyles = makeStyles()((theme: any) => ({
  container: {
    padding: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '80rem',
  },
  navItem: {
    marginLeft: '2rem',
    fontSize: '1rem',
    color: theme.palette.primary[500],
    fontWeight: 600,
    '&:hover': {
      color: theme.palette.primary[400],
    },
  },
  rightMenu: {
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
export const Header: React.FC = () => {
  const { classes } = useStyles()

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className={classes.container}>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Link href="/">
            <DesktoAppLogo width="300" />
          </Link>
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Link href="/">
            <MobileAppLogo width="41" />
          </Link>
        </Box>
        <Box className={classes.rightMenu}>
          <MUIButton onClick={() => {}}>Create</MUIButton>

          <Link href="/templates">
            <div className={classes.navItem}>Templates</div>
          </Link>
        </Box>
      </Container>
    </AppBar>
  )
}
