import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

import { TEMPLATES } from '../../../constants/templates'
import { TemplateCard } from '../../molecules'
const useStyles = makeStyles((theme) => ({}))
export const Templates = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 3 }}>
      {TEMPLATES.map((el, index) => (
        <Grid item xs={1} key={index}>
          <TemplateCard key={index} data={el} />
        </Grid>
      ))}
    </Grid>
  )
}
