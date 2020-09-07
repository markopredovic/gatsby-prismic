import React from 'react'
import styled from '@emotion/styled'
import { Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

const StyledFooterTitle = styled(Typography)`
  ${({ theme }) => `
  font-family: 'Roboto';
  font-size: 4rem;
  font-weight: 600;
  color: #fff;
`}
`

const FooterTitle = props => {
  const theme = useTheme()

  return (
    <StyledFooterTitle variant="h4" theme={theme}>
      {props.children}
    </StyledFooterTitle>
  )
}

export default FooterTitle
