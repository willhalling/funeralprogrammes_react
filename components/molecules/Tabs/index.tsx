import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import * as React from 'react'

import { makeStyles } from '../../../utils/useStyles'
import { Canvas } from '../../organism/Canvas'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles()(() => ({
  tab: {
    color: 'white',
    fontSize: '1rem',
    fontWeight: 700,
    border: '1px solid rgba(31,41,55,1)',
  },
  indicator: {
    background: 'none',
  },
  selected: {
    color: 'white !important',
    borderTop: '1px solid rgba(156, 163, 175, 1) !important',
    borderRight: '1px solid rgba(156, 163, 175, 1) !important',
    borderLeft: '1px solid rgba(156, 163, 175, 1) !important',
    borderTopRightRadius: '4px !important',
    borderTopLeftRadius: '4px !important',
  },
}))

export const CustomTabs = () => {
  const { classes } = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'rgba(156, 163, 175, 1)' }}>
        <Tabs
          classes={{
            indicator: classes.indicator,
          }}
          indicatorColor="primary"
          textColor="primary"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            className={classes.tab}
            classes={{
              selected: classes.selected,
            }}
            label="Item One"
            {...a11yProps(0)}
          />
          <Tab
            className={classes.tab}
            classes={{
              selected: classes.selected,
            }}
            label="Item Two"
            {...a11yProps(1)}
          />
          <Tab
            className={classes.tab}
            classes={{
              selected: classes.selected,
            }}
            label="Item Three"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Canvas />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  )
}
