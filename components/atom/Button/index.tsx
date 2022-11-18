import { CircularProgress } from '@mui/material'
import Button, { ButtonProps } from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { styled, Theme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import * as React from 'react'
const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
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
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
})

const ColorButton = styled(Button)<ButtonProps>(({ theme }: { theme: any }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.secondary.main,
  fontSize: '1rem',
  '&:hover': {
    backgroundColor: theme.palette.secondary[700],
  },
  '&:disabled': {
    cursor: 'not-allowed',
    pointerEvents: 'none !important',
  },
}))

const useStyles = makeStyles((theme: Theme) => ({
  progress: {
    marginRight: 8,
  },
}))
interface IMUIButton {
  size?: number
  isLoading?: boolean
  className?: string
  onClick: (args: any) => void
  children: React.ReactNode
  disabled?: boolean
}
export const MUIButton: React.FC<IMUIButton> = ({
  size = 14,
  isLoading = false,
  className = '',
  onClick,
  children,
  disabled,
}: IMUIButton) => {
  const classes = useStyles()
  return (
    <ColorButton disabled={disabled} variant="contained" className={className} onClick={onClick}>
      {isLoading && <CircularProgress size={size} className={classes.progress} />}
      {children}
    </ColorButton>
  )
}
