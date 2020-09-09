import React from 'react'
import { Box, Typography } from '@material-ui/core'
import BigTitle from './UI/BigTitle'
import PricingBox from './PricingBox'
import styled from '@emotion/styled'

const Pricing = ({ pricing }) => {
  const pricingBoxes = pricing.items.map((box, i) => (
    <PricingBox key={i} {...box} />
  ))

  const TitleBox = styled(Box)`
    h4 {
      margin-bottom: 2rem;
      text-align: center;
    }
    p {
      text-align: center;
    }
  `

  const WrapperBox = styled(Box)``

  return (
    <Box>
      <TitleBox mb={8}>
        <BigTitle>{pricing.title}</BigTitle>
        <Typography variant="body1">{pricing.description}</Typography>
      </TitleBox>
      <WrapperBox
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
      >
        {pricingBoxes}
      </WrapperBox>
    </Box>
  )
}

export default Pricing
