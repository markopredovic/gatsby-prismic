import React from 'react'
import { Box, Typography } from '@material-ui/core'
import styled from '@emotion/styled'
import { useTheme } from '@material-ui/core/styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import BigTitle from './UI/BigTitle'

const settings = {
  dots: true,
  className: 'center',
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const TitleBox = styled(Box)`
  h3 {
    text-align: center;
  }
  h6 {
    margin-bottom: 2rem;
    text-align: center;
  }
`

const ImageBox = styled(Box)`
  img {
    margin: 0 auto;
  }
`

const StyledSlider = styled(Slider)`
  ${({ theme }) => ({
    '.slick-dots': {
      bottom: '-40px',
    },
    '.slick-dots li button:before': {
      fontSize: '1.6rem',
    },
    '.slick-dots li.slick-active button:before': {
      color: theme.palette.primary.main,
      opacity: 1,
    },
  })}
`

const Clients = ({ clients: { title, subtitle, items } }) => {
  const theme = useTheme()

  return (
    <Box>
      <TitleBox mb={6}>
        <Typography variant="subtitle1">{subtitle}</Typography>
        <BigTitle>{title}</BigTitle>
      </TitleBox>
      <StyledSlider {...settings} theme={theme}>
        {items.map((slide, i) => (
          <ImageBox key={i}>
            <img src={slide.client_image.fluid.src} alt="img" />
          </ImageBox>
        ))}
      </StyledSlider>
    </Box>
  )
}

export default Clients
