import { Divider, Grid } from '@mui/material'

import { TEMPLATES } from '../../../constants/templates'
import { TemplateCard } from '../../molecules'

export const Templates = () => {
  return (
    <div>
      <Divider />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 3 }}>
        {TEMPLATES.map((el, index) => (
          <Grid item xs={1} key={index}>
            <TemplateCard key={index} data={el} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
