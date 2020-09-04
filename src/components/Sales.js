import React from 'react'
import Img from 'gatsby-image'
import { Box, Typography, Button } from '@material-ui/core'
import styled from '@emotion/styled'
import BigTitle from './UI/BigTitle'

const ContentBox = styled(Box)`
  h6 {
    margin-bottom: 1.5rem;
  }
  h3 {
    margin-bottom: 1.5rem;
  }
  p {
    margin-bottom: 2.5rem;
    text-align: center;
  }
`

const Sales = ({ sales }) => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      flexWrap="wrap"
      alignItems="center"
    >
      <Box mb={2} width={{ xs: '1', sm: '45%' }}>
        <Img fluid={sales.fluidImage} alt="sales" />
      </Box>
      <ContentBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        width={{ xs: '1', sm: '50%' }}
      >
        <Typography variant="subtitle1">{sales.subtitle}</Typography>
        <BigTitle>{sales.title}</BigTitle>
        <Typography variant="body1">{sales.description}</Typography>
        <Button variant="contained" color="secondary" href="#pricing">
          View Pricing
        </Button>
      </ContentBox>
    </Box>
  )
}

export default Sales