import {useEffect, useState} from 'react'
import {
  Dialog as RawDialog,
  DialogContent,
  DialogProps as RawDialogProps,
  DialogTitle,
  styled,
} from '@mui/material'
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined'
import {ReactNode} from 'react'
import {Button} from '../Button'
import {Box} from '../Box'
import React from 'react'

export type DialogProps = RawDialogProps & {
  title?: string
  content?: ReactNode
  icon?: string
  onConfirm?: Function
}

const MUIDialog = styled(RawDialog)({
  zIndex: '1312',
})
export const Dialog = ({
  title,
  content,
  icon,
  onConfirm = () => {},
  ...props
}: DialogProps) => {
  const [iconLogo, setIconLogo] = useState<any>('')
  const handleOk = () => {
    onConfirm()
  }

  useEffect(() => {
    switch (icon) {
      case 'error':
        setIconLogo(
          <ErrorOutlinedIcon sx={{fontSize: '4rem', color: '#ff0707'}} />
        )
        break
      default:
        setIconLogo('')
        break
    }
  }, [])

  return (
    <MUIDialog {...props}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {content && (
        <DialogContent dividers sx={{textAlign: 'center'}}>
          <Box>{iconLogo}</Box>
          <Box>{content}</Box>
          <Box>
            <Button
              label='Ok'
              sx={{minWidth: '17rem', mt: 2}}
              variant='contained'
              onClick={handleOk}
            >
              Ok
            </Button>
          </Box>
        </DialogContent>
      )}
    </MUIDialog>
  )
}
