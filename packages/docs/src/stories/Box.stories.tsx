import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@gabriel-design-system/react'

export default {
  title: 'Form/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Lorem Lorem Lorem</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
