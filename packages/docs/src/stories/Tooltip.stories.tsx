import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@gabriel-design-system/react'

export default {
  title: 'Display /Tooltip',
  component: Tooltip,
  args: {
    content: 'lorem',
  },
} as Meta

export const Primary: StoryObj<TooltipProps> = {}
