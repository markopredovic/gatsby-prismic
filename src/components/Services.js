import React from 'react'
import Img from 'gatsby-image'
import { Box, Typography } from '@material-ui/core'
import styled from '@emotion/styled'
import { useTheme } from '@material-ui/core/styles'

import BigTitle from './UI/BigTitle'
import ServiceItem from './ServiceItem'

const ImageBox = styled(Box)`
  ${({ theme }) => ({})}
`

const ContentBox = styled(Box)`
  h6 {
    margin-bottom: 1.5rem;
  }
  h3 {
    margin-bottom: 1.5rem;
    text-align: center;
  }
  > p {
    margin-bottom: 2rem;
    text-align: center;
  }
`

const Services = ({ services }) => {
  const theme = useTheme()

  const servicesList = services.items.map((service, i) => (
    <Box key={i} mb={2}>
      <ServiceItem {...service} />
    </Box>
  ))

  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      justifyContent="space-between"
      alignItems="center"
    >
      <ImageBox
        theme={theme}
        mb={0}
        width={{ xs: '1', sm: '45%' }}
        order={{ xs: 1, sm: 2 }}
      >
        <Img fluid={services.mainImage} alt="services" />
      </ImageBox>
      <ContentBox
        width={{ xs: '1', sm: '50%' }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        order={{ xs: 2, sm: 1 }}
      >
        <Typography variant="subtitle1">{services.mainSubtitle}</Typography>
        <BigTitle>{services.mainTitle}</BigTitle>
        <Typography variant="body1">{services.mainDescription}</Typography>
        {servicesList}
      </ContentBox>
    </Box>
  )
}

export default Services
