import React from 'react'
import { Modal } from 'antd'
import type { ModalProps } from 'antd'

interface CustomModalProps extends ModalProps {}

const CustomModal: React.FC<CustomModalProps> = ({ children, ...props }) => {
    return (
      <Modal
        centered
        {...props}
        >
        {children}
      </Modal>
    )
}

export default CustomModal
