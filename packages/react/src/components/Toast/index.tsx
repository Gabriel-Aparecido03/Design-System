import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { ToastContainer, ToastHeader, ToastBody } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  content?: string
  title?: string
  onClose: () => void
  open: boolean
}

export function Toast({ onClose, open, content, title, ...props }: ToastProps) {
  return (
    open && (
      <ToastContainer>
        <ToastHeader>
          <p>{title}</p>
          <X onClick={onClose} />
        </ToastHeader>
        <ToastBody>
          <span>{content}</span>
        </ToastBody>
      </ToastContainer>
    )
  )
}
