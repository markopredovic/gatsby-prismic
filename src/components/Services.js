import React from 'react'
import Img from 'gatsby-image'
import { Box, Typography } from '@material-ui/core'
import styled from '@emotion/styled'
import { useTheme } from '@material-ui/core/styles'

import BigTitle from './UI/BigTitle'
import ServiceItem from './ServiceItem'

const ContentBox = styled(Box)`
  h3 {
    margin-bottom: 1.5rem;
  }
  h4 {
    margin-bottom: 2rem;
    text-align: center;
  }
  > p {
    margin-bottom: 3.5rem;
    text-align: center;
  }

  @media (min-width: 960px) {
    h4 {
      text-align: left;
    }
    > p {
      text-align: left;
    }
  }
`

const Services = ({ services }) => {
  const theme = useTheme()

  const servicesList = services.items.map((service, i) => (
    <Box key={i} mb={2}>
      <ServiceItem {...service} index={i} />
    </Box>
  ))

  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        theme={theme}
        mb={0}
        width={{ xs: '1', sm: '45%' }}
        order={{ xs: 1, sm: 2 }}
      >
        <Img fluid={services.mainImage} alt="services" />
      </Box>
      <ContentBox
        width={{ xs: '1', sm: '50%' }}
        display="flex"
        flexDirection="column"
        alignItems={{ xs: 'center', md: 'flex-start' }}
        order={{ xs: 2, sm: 1 }}
      >
        <Typography variant="subtitle1" component="h3">
          {services.mainSubtitle}
        </Typography>
        <BigTitle>{services.mainTitle}</BigTitle>
        <Typography variant="body1">{services.mainDescription}</Typography>
        {servicesList}
      </ContentBox>
    </Box>
  )
}

export default Services
