import React from 'react'
import { makeStyles, List, ListItem, ListItemText } from '@material-ui/core'

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}

const useStyles = makeStyles({
  listItem: { textAlign: 'center' },
  mainList: { marginBottom: '1rem' },
  desktopList: {
    display: 'flex',
    marginRight: '1rem',
  },
})

const Menu = props => {
  const classes = useStyles()

  return (
    <List {...props}>
      <ListItemLink href="#home">
        <ListItemText primary="Home" className={classes.listItem} />
      </ListItemLink>
      <ListItemLink href="#services">
        <ListItemText primary="Services" className={classes.listItem} />
      </ListItemLink>
      <ListItemLink href="#pricing">
        <ListItemText primary="Pricing" className={classes.listItem} />
      </ListItemLink>
      <ListItemLink href="#clients">
        <ListItemText primary="Clients" className={classes.listItem} />
      </ListItemLink>
      <ListItemLink href="#news">
        <ListItemText primary="News" className={classes.listItem} />
      </ListItemLink>
      <ListItemLink href="#contact">
        <ListItemText primary="Contact" className={classes.listItem} />
      </ListItemLink>
    </List>
  )
}

export default Menu
