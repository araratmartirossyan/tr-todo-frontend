import { FC } from 'react'
import { StyledMessage } from './styles'

export const Message: FC = ({ children }) => (
  <StyledMessage>{children}</StyledMessage>
)
