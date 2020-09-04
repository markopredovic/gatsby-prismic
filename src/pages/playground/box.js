import React from 'react'
import { Box, Container } from '@material-ui/core'
import Layout from '../../components/layout'
import BigTitle from '../../components/UI/BigTitle'

const BoxTestPage = () => {
  return (
    <Layout>
      <Container>
        <Box display={{ xs: 'block', md: 'none' }} m={2} p={2} border={1}>
          box
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box border={1} mr={1} bgcolor="grey.300">
            box 1
          </Box>
          <Box
            order={-1}
            border={1}
            mr={1}
            color="yellow"
            bgcolor="primary.main"
          >
            box 2
          </Box>
          <Box border={1} bgcolor="secondary.main">
            box 3
          </Box>
          <BigTitle variant="h3">Hello</BigTitle>
        </Box>
      </Container>
    </Layout>
  )
}

export default BoxTestPage
