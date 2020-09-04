import React from 'react'
import { Box } from '@material-ui/core'
import styled from '@emotion/styled'
import { useTheme } from '@material-ui/core/styles'

import FeatureItem from './FeatureItem'

const FeatureBox = styled(Box)`
  ${({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.up('md')]: {
      width: '25%',
    },
  })}
`

const Features = ({ features }) => {
  const theme = useTheme()

  const items = features.map((feature, i) => (
    <FeatureBox key={i} mb={8} px="1.5rem" theme={theme}>
      <FeatureItem {...feature} />
    </FeatureBox>
  ))

  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      flexWrap="wrap"
      alignItems="center"
    >
      {items}
    </Box>
  )
}

export default Features
