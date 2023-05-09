import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, SxProps } from '@mui/material';

interface IProps {
    onClose: () => void
    open: boolean
    children: | React.ReactNode
    | React.ReactNode[]
    PaperProps?: SxProps
}

function Modal({
  onClose,
  open,
  children,
  PaperProps,
}: IProps) {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'background.default',
          borderRadius: 8,
          maxWidth: 400,
          width: '100%',
          ...PaperProps,
        },
      }}
    >
      <CloseIcon
        onTouchStart={onClose}
        onClick={onClose}
        fontSize="large"
        sx={{
          zIndex: 900,
          position: 'absolute',
          right: 12,
          top: 12,
          cursor: 'pointer',
          color: 'secondary.light',
        }}
      />

      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
