import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@gabriel-design-system/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/Gabriel-Aparecido03.png',
    alt: 'Gabriel Aparecido',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

export const Primary: StoryObj<AvatarProps> = {}

export const WithCallback: StoryObj<AvatarProps> = {
  args: {
    src: 'undefined',
  },
}
