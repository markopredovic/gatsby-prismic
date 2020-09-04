/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { makeStyles } from '@material-ui/styles'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Divider, Button, Box, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid',
  },
}))

const SecondPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Page two" />
      <Box color="text.secondary" px={2}>
        <Typography variant="h3" component="h2" gutterBottom>
          Components
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to the components page.
        </Typography>
        <Divider />
        <Box py={3}>
          <Typography variant="h3" gutterBottom>
            Buttons
          </Typography>
          <Button
            css={css`
              background-color: #a00;
              color: #fff;
              box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
                0 1px 3px rgba(0, 0, 0, 0.08);
              padding: 7px 14px;
              &:hover {
                background-color: #5469d4;
              }
            `}
          >
            Customized
          </Button>
        </Box>
        <Divider />
        <Box py={3}>
          <h3>Grid</h3>
          <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} sm={6} md={4}>
              Grid item 1
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              Grid item 2
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              Grid item 3
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  )
}

export default SecondPage
