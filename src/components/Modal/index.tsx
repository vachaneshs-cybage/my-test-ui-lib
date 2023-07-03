import { Box, Modal as RawModal, ModalProps as RawModalProps, styled } from "@mui/material";
import React from "react";
export type ModalProps = RawModalProps;

const MUIModal = styled(RawModal)({
});
export const Modal = ({ ...props }: ModalProps) => {
  return (
    <MUIModal {...props}>
      <Box sx={{
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
        borderRadius: 1
      }}>
        {props.children}
      </Box>
    </MUIModal>
  );
};

