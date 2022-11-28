import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useState } from 'react'
import { BOOKLET } from '../../../constants/booklet'

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

interface CustomTabsInterface {
  value: number
  handleChange: any
  booklet: any
  canvasList: any
}

export const CustomTabs = (props: CustomTabsInterface) => {
  const { classes } = useStyles()
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'rgba(156, 163, 175, 1)' }}>
        <Tabs
          classes={{
            indicator: classes.indicator,
          }}
          indicatorColor="primary"
          textColor="primary"
          value={props.value}
          onChange={props.handleChange}
          aria-label="basic tabs example"
        >
          {BOOKLET.pages.map((page) => (
            <Tab
              key={page.title}
              className={classes.tab}
              classes={{
                selected: classes.selected,
              }}
              label={page.title}
              {...a11yProps(0)}
            />
          ))}
        </Tabs>
      </Box>
      {BOOKLET.pages.map((page, idx) => (
        <TabPanel value={props.value} index={idx} key={page.title}>
          <Canvas
            key={BOOKLET.pages[idx].title}
            {...props.booklet?.booklet}
            canvas={props.canvasList[idx]}
            idx={idx}
          />
        </TabPanel>
      ))}
    </Box>
  )
}
