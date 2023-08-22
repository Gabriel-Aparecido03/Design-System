import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@gabriel-design-system/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem Lorem Lorem Heading',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Heading h1',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'The heading for default is ´h2´,but we can change using `as`',
      },
    },
  },
}
