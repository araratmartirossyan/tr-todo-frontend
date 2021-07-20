import { ButtonHTMLAttributes, FC, MouseEvent } from 'react'
import { StyledButtonProps, StyledButton } from './styles'

export interface Props
  extends StyledButtonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  submit?: boolean
  disabled?: boolean
}

export const Button: FC<Props> = ({ children, ...rest }) => (
  <StyledButton {...rest} data-test-id="todo-button">
    {children}
  </StyledButton>
)
