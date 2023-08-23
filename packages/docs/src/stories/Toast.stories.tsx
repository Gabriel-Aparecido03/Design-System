import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@gabriel-design-system/react'

export default {
  title: 'Display/Toast',
  component: Toast,
  args: {
    title: 'lorem',
    content: 'lorem',
    open: true,
    onClose: () => {
      console.log('')
    },
  },
} as Meta

export const Primary: StoryObj<ToastProps> = {}
