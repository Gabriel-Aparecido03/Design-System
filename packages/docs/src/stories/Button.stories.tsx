import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@gabriel-design-system/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Data display/Button',
  component: Button,
  args: {
    children: 'Lorem',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      type: 'boolean',
    },
  },
} as Meta

export const Primary: StoryObj<ButtonProps> = {}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
}
export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}
export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Lorem <ArrowRight />{' '}
      </>
    ),
  },
}
