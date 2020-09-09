/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Box, Typography, Button } from '@material-ui/core'
import styled from '@emotion/styled'

import BigTitle from './UI/BigTitle'

const ContentBox = styled(Box)`
  h3 {
    margin-bottom: 1rem;
    text-align: center;
  }
  h4 {
    margin-bottom: 2rem;
    text-align: center;
  }
  p {
    margin-bottom: 3rem;
    text-align: center;
  }

  @media (min-width: 960px) {
    h3 {
      text-align: left;
    }
    h4 {
      text-align: left;
    }
    p {
      text-align: left;
    }
  }
`

const Banner = ({ image, title, subtitle, text }) => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      justifyContent={{ sm: 'space-between' }}
      alignItems="center"
    >
      <Box width={{ xs: '1', sm: '45%' }} mb={2}>
        <Img fluid={image.fluid} alt={image.alt} />
      </Box>
      <ContentBox
        width={{ xs: '1', sm: '50%' }}
        display="flex"
        flexDirection="column"
        alignItems={{ xs: 'center', md: 'flex-start' }}
      >
        <Typography variant="subtitle1" component="h3">
          {subtitle.text}
        </Typography>
        <BigTitle>{title.text}</BigTitle>
        <Typography variant="body1">{text}</Typography>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="#services"
        >
          Learn More
        </Button>
      </ContentBox>
    </Box>
  )
}

export default Banner
