import styled, { css } from 'styled-components'
import tw from 'twin.macro'

export const Button = styled.button.attrs({
  className: 'hover:bg-blue-700 text-white font-bold',
})`
  ${css`
    ${tw`bg-blue-500 text-center rounded py-2 px-4 shadow max-w-xs`}
  `}
`
