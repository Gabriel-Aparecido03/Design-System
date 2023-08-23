import { styled } from '@stitches/react'

export const ToastContainer = styled('div', {
  width: 360,
  padding: ' 0.75rem 1.25rem',
  fontFamily: '$default',
  border: '1px solid $color$gray600',
  background: '$gray800',
})

export const ToastHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  svg: {
    height: 20,
    width: 20,
    color: '$gray200',
  },

  p: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$gray200',
  },
})

export const ToastBody = styled('div', {
  span: {
    fontSize: '$xl',
    fontWeight: 'normal',
    color: '$gray200',
  },
})
