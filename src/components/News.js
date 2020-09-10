import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { Box, Typography, Button } from '@material-ui/core'
import styled from '@emotion/styled'
import BigTitle from './UI/BigTitle'
import { grey } from '@material-ui/core/colors'
import { useTheme } from '@material-ui/core/styles'

const TitleBox = styled(Box)`
  h3 {
    margin-bottom: 1.5rem;
    text-align: center;
  }
  h4 {
    text-align: center;
  }
`

const PostBox = styled(Box)`
  ${({ theme }) => ({
    width: '80%',
    maxWidth: '400px',
    margin: `0 auto ${theme.spacing(5)}px`,
    boxShadow: `0 0 5px 0px ${grey[300]}`,
    borderRadius: '5rem',

    [theme.breakpoints.up('md')]: {
      width: '30%',
      marginBottom: '0',
    },

    span: {
      marginBottom: '2rem',
      textAlign: 'center',
      fontSize: '2.4rem',
      fontWeight: '600',
      color: theme.palette.primary.dark,
    },
    p: {
      marginBottom: '1.5rem',
      textAlign: 'center',
    },
    button: {
      textAlign: 'center',
      fontWeight: '600',
    },
  })}
`

const StyledButton = styled(Button)`
  ${({ theme }) => `
    color: ${theme.palette.primary.dark}
  `}
`

const StyledBackgroundImage = styled(BackgroundImage)`
  height: 250px;

  @media only screen and (min-width: 1200px) {
    height: 300px;
  }
`

const News = ({ news: { title, subtitle, items } }) => {
  const theme = useTheme()

  return (
    <Box>
      <TitleBox mb={6}>
        <Typography variant="subtitle1" component="h3">
          {subtitle}
        </Typography>
        <BigTitle>{title}</BigTitle>
      </TitleBox>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
      >
        {items.map((post, i) => (
          <PostBox
            theme={theme}
            key={i}
            {...post}
            px={{ xs: 5, md: 2 }}
            py={{ xs: 6, md: 4 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box mb={5} width="1">
              <StyledBackgroundImage
                fluid={post.post_image.fluid}
                alt="post image"
              />
            </Box>
            <Typography variant="subtitle2" component="span">
              {post.post_title.text}
            </Typography>
            <Typography variant="body1">{post.post_excerpt}</Typography>
            <StyledButton variant="text" theme={theme}>
              Read More
            </StyledButton>
          </PostBox>
        ))}
      </Box>
    </Box>
  )
}

export default News
