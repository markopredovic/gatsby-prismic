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
import styled from '@emotion/styled'
import { Box, Container, makeStyles, Button } from '@material-ui/core'
import Menu from './Menu'

const useStyles = makeStyles({
  listItem: { textAlign: 'center' },
  mainList: { marginBottom: '1rem' },
  desktopList: {
    display: 'flex',
    marginRight: '1rem',
  },
})

const DesktopMenu = styled(Box)``

const Header = () => {
  const classes = useStyles()
  const [opened, setOpened] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 120, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const toggleMenu = () => setOpened(!opened)

  return (
    <AppBar color="default" position="sticky">
      <Container>
        <Toolbar
          css={css`
            justify-content: space-between;
          `}
        >
          <Box>
            <Img fixed={data.logoImage.childImageSharp.fixed} alt="logo" />
          </Box>
          <DesktopMenu display={{ xs: 'none', md: 'flex' }} alignItems="center">
            <Menu
              component="nav"
              aria-label="desktop"
              className={classes.desktopList}
            />
            <Button variant="contained" color="primary">
              Signup
            </Button>
          </DesktopMenu>
          <Box display={{ xs: 'inherit', md: 'none' }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
            >
              <MenuIcon
                css={css`
                  font-size: 3.4rem;
                `}
              />
            </IconButton>
          </Box>
        </Toolbar>
        <Box display={{ xs: 'block', md: 'none' }}>
          <Collapse in={opened}>
            <Menu
              component="nav"
              aria-label="main"
              className={classes.mainList}
            />
            <Box mb={2} display="flex" justifyContent="center">
              <Button variant="contained" color="primary">
                Signup
              </Button>
            </Box>
          </Collapse>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Header
