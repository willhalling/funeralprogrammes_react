import { Grid } from '@mui/material'

import { InputField } from '../../atom'
import { UploadButton } from '../../molecules'
import { CustomTabs } from '../../molecules/Tabs'

export const CreateTemplate = () => {
  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 10 }} columns={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={1}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1 }}>
            <Grid item xs={1}>
              <InputField label="Heading" onChange={() => {}} />
            </Grid>
            <Grid item xs={1}>
              <InputField label="Name" onChange={() => {}} />
            </Grid>
            <Grid item xs={1}>
              <UploadButton />
            </Grid>
            <Grid item xs={1}>
              <InputField label="Details" onChange={() => {}} multiline rows={10} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <CustomTabs />
        </Grid>
      </Grid>
    </div>
  )
}
