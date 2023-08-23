import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@gabriel-design-system/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
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

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Lorem lorem lorem',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix : 'lorem lorem',
    placeholder : 'lorem lorem'
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
