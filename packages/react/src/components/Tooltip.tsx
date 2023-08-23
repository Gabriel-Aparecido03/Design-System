import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const Tooltip = styled('div', {
  padding: '$3 $4',
  borderRadius: '$md',
  backgroundColor: '$gray900',
  width: 310,
})

export interface TooltipProps extends ComponentProps<typeof Tooltip> {
  as?: ElementType
}
