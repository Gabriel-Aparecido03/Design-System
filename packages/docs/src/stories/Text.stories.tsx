import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@gabriel-design-system/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'lorem lorem lorem lorem',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'strong text',
    as: 'strong',
  },
}
