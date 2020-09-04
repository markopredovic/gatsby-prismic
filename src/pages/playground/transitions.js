import React, { useState } from 'react'
import { Box, Typography, Button, Collapse } from '@material-ui/core'
import Layout from '../../components/layout'

const ThemeCustomizationsPage = () => {
  const [opened, setOpened] = useState(false)

  const toggleText = () => setOpened(!opened)

  return (
    <Layout>
      <Box px={2}>
        <Typography variant="h3" gutterBottom>
          Transitions:
        </Typography>
        <Box mb={2}>
          <Button variant="outlined" color="primary" onClick={toggleText}>
            toggle text
          </Button>
        </Box>
        <Box>
          <Collapse in={opened}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea
              quo voluptatibus odit est expedita. Quia laborum asperiores quas
              eaque!
            </Typography>
          </Collapse>
        </Box>
      </Box>
    </Layout>
  )
}

export default ThemeCustomizationsPage
