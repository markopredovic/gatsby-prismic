import React from 'react'
import Img from 'gatsby-image'
import { Box, Typography, Button } from '@material-ui/core'
import styled from '@emotion/styled'
import BigTitle from './UI/BigTitle'
import { grey } from '@material-ui/core/colors'
import { useTheme } from '@material-ui/core/styles'

const TitleBox = styled(Box)`
  h6 {
    margin-bottom: 1.5rem;
    text-align: center;
  }
  h3 {
    text-align: center;
  }
`

const PostBox = styled(Box)`
  ${({ theme }) => ({
    boxShadow: `0 0 5px 0px ${grey[300]}`,
    borderRadius: '5rem',

    h6: {
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

const News = ({ news: { title, subtitle, items } }) => {
  const theme = useTheme()

  return (
    <Box>
      <TitleBox mb={6}>
        <Typography variant="subtitle1">{subtitle}</Typography>
        <BigTitle>{title}</BigTitle>
      </TitleBox>
      <Box>
        {items.map((post, i) => (
          <PostBox
            theme={theme}
            key={i}
            {...post}
            mb={5}
            px={5}
            py={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box mb={5} width="1">
              <Img fluid={post.post_image.fluid} alt="post image" />
            </Box>
            <Typography variant="subtitle2">{post.post_title.text}</Typography>
            <Typography variant="body1">{post.post_excerpt}</Typography>
            <Button variant="text" color="primary">
              Read More
            </Button>
          </PostBox>
        ))}
      </Box>
    </Box>
  )
}

export default News
