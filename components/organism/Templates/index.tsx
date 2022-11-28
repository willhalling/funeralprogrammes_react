import { Divider, Grid, Typography } from '@mui/material'
import Link from 'next/link'

import { TEMPLATES } from '../../../constants/templates'
import { makeStyles } from '../../../utils/useStyles'
import { TemplateCard } from '../../molecules'
const useStyles = makeStyles()((theme: any) => ({
  divider: {
    width: '100%',
    height: 2.5,
    background: theme.palette.primary[600],
    marginBottom: 55,
  },
  heading: {
    fontSize: '1.875rem',
    lineHeight: '36px',
    color: 'white',
    fontWeight: 500,
    marginBottom: 20,
  },
  templateCustom: {
    color: theme.palette.secondary[400],
    fontSize: '1rem',
    fontWeight: 500,
    margin: '70px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contatct: {
    color: 'white',
    textDecoration: 'underline',
    paddingLeft: 8,
    textUnderlineOffset: 5,
  },
}))
export const Templates = () => {
  const { classes } = useStyles()
  return (
    <div>
      <Typography variant="h1" className={classes.heading}>
        Templates (A5 booklet)
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 3 }}>
        {TEMPLATES.map((el, index) => (
          <Grid item xs={1} key={index}>
            <Link href={'/template/' + el.slug}>
              <TemplateCard key={index} data={el} />
            </Link>
          </Grid>
        ))}
      </Grid>
      <div className={classes.templateCustom}>
        Need a custom design?
        <Link href={'/contact'}>
          <span className={classes.contatct}>Contact</span>
        </Link>
      </div>
    </div>
  )
}
