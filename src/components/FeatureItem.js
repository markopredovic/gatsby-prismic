import React from 'react'
import { Box, Typography } from '@material-ui/core'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const FeatureBox = styled(Box)`
  h4 {
    margin-bottom: 1.5rem;
  }
  p {
    padding: 0 2rem;
    text-align: center;
  }
`

const FeatureItem = ({ feature_description, feature_image, feature_title }) => {
  return (
    <FeatureBox display="flex" flexDirection="column" alignItems="center">
      <Box width="100px" mb={2}>
        <Img fluid={feature_image.fluid} alt="feature image" />
      </Box>
      <Typography variant="h4">{feature_title.text}</Typography>
      <Typography variant="body1">{feature_description}</Typography>
    </FeatureBox>
  )
}

export default FeatureItem
