import { CircularProgress } from '@mui/material'
import Button, { ButtonProps } from '@mui/material/Button'
import { styled, Theme } from '@mui/material/styles'
import * as React from 'react'

import { makeStyles } from '../../../utils/useStyles'

const ColorButton = styled(Button)<ButtonProps>(({ theme }: { theme: any }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.secondary.main,
  fontSize: '1rem',
  fontWeight: '600',
  '&:hover': {
    backgroundColor: theme.palette.secondary[700],
  },
  '&:disabled': {
    cursor: 'not-allowed',
    pointerEvents: 'none !important',
  },
}))

const useStyles = makeStyles()((theme: Theme) => ({
  progress: {
    marginRight: 8,
  },
}))
interface IMUIButton {
  size?: number
  isLoading?: boolean
  className?: string
  onClick?: (args: any) => void
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
  const { classes } = useStyles()
  return (
    <ColorButton disabled={disabled} variant="contained" className={className} onClick={onClick}>
      {isLoading && <CircularProgress size={size} className={classes.progress} />}
      {children}
    </ColorButton>
  )
}
