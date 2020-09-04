/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState } from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import {
  Box,
  Container,
  makeStyles,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'

const useStyles = makeStyles({
  listItem: {
    textAlign: 'center',
  },
})

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}

const Header = () => {
  const classes = useStyles()
  const [opened, setOpened] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 100, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const toggleMenu = () => setOpened(!opened)

  return (
    <AppBar color="default" position="sticky">
      <Container id="home">
        <Toolbar
          css={css`
            justify-content: space-between;
          `}
        >
          <Box>
            <Img fixed={data.logoImage.childImageSharp.fixed} alt="logo" />
          </Box>
          <Box>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <Collapse in={opened}>
          <List component="nav" aria-label="main" className={classes.mainList}>
            <ListItemLink href="#home">
              <ListItemText primary="Home" className={classes.listItem} />
            </ListItemLink>
            <ListItemLink href="#services">
              <ListItemText primary="Services" className={classes.listItem} />
            </ListItemLink>
            <ListItemLink href="#pricing">
              <ListItemText primary="Pricing" className={classes.listItem} />
            </ListItemLink>
          </List>
        </Collapse>
      </Container>
    </AppBar>
  )
}

export default Header
