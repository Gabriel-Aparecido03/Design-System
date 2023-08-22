import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@gabriel-design-system/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Lorem ipsum</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Lorem lorem lorem',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
