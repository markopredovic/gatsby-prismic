import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { Box, Typography, Button } from '@material-ui/core'
import BigTitle from './UI/BigTitle'

const ContentBox = styled(Box)`
  h6 {
    margin-bottom: 1.5rem;
  }
  h3 {
    margin-bottom: 2rem;
    text-align: center;
  }
  p {
    text-align: center;
  }
`

const Contact = ({ contact: { title, subtitle, description, image } }) => {
  return (
    <Box>
      <Box mb={4}>
        <Img fluid={image} alt="contact image" />
      </Box>
      <ContentBox
        mb={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="subtitle1">{subtitle}</Typography>
        <BigTitle>{title}</BigTitle>
        <Typography variant="body1">{description}</Typography>
      </ContentBox>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button variant="contained" color="secondary">
          Send an Email
        </Button>
      </Box>
    </Box>
  )
}

export default Contact
