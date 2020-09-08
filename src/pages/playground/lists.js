import React from 'react'
import {
  Typography,
  Box,
  ListItem,
  List,
  ListItemText,
} from '@material-ui/core'

import Layout from '../../components/layout'

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}

const ListsTestPage = () => {
  return (
    <Layout>
      <Typography variant="h2" component="h2" gutterBottom>
        Lists
      </Typography>
      <Box>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItemLink href="#services">
            <ListItemText primary="Services" />
          </ListItemLink>
        </List>
      </Box>
    </Layout>
  )
}

export default ListsTestPage
