import { alpha, FormControl, InputBase, InputLabel, styled } from '@mui/material'
import React from 'react'

import { makeStyles } from '../../../utils/useStyles'

const BootstrapInput = styled(InputBase)(({ theme }: any) => ({
  'label + &': {
    marginTop: theme.spacing(4),
  },

  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.primary[700],
    border: '1px solid rgba(229,231,235,1)',
    color: 'white',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha('#1e88e5', 0.25)} 0 0 0 0.2rem`,
      borderColor: 'rgb(33,150,243)',
    },
  },
}))
const useStyles = makeStyles()((theme: any) => ({
  label: {
    color: 'white',
    fontSize: '1.3rem',
    fontWeight: 600,
  },
  focused: {
    color: 'white !important',
  },
}))

interface IInputField {
  className?: string
  onChange: (args: any) => void
  label?: string
  value?: string
  name?: string
  multiline?: boolean
  rows?: number
}
export const InputField = ({
  className = '',
  onChange,
  label,
  value,
  name,
  multiline = false,
  rows,
}: IInputField) => {
  const { classes } = useStyles()
  return (
    <FormControl variant="standard" fullWidth className={className}>
      {label && (
        <InputLabel
          shrink
          className={classes.label}
          classes={{
            focused: classes.focused,
          }}
        >
          {label}
        </InputLabel>
      )}
      <BootstrapInput
        onChange={onChange}
        value={value}
        name={name}
        multiline={multiline}
        rows={rows}
        defaultValue="react-bootstrap"
        id="bootstrap-input"
      />
    </FormControl>
  )
}
