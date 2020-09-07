import React, { useState } from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import {
  Box,
  Typography,
  Button,
  TextField,
  useMediaQuery,
} from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { useTheme } from '@material-ui/core/styles'
import BigTitle from './UI/BigTitle'

const ContentBox = styled(Box)`
  h6 {
    margin-bottom: 1.5rem;
  }
  h3 {
    margin-bottom: 2rem;
    text-align: center;
  }
  p {
    text-align: center;
  }
`

const ModalWrapper = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const FormWrapperBox = styled(Box)`
  ${({ theme }) => ({
    width: '80%',
    maxWidth: '550px',
    padding: '2rem',
    backgroundColor: '#fff',
    color: '#000',
    outlineColor: theme.palette.primary.light,
    h6: { marginBottom: '1.5rem' },
    '.MuiFormControl-root': { marginBottom: '1.5rem', width: '100%' },
  })}
`

const Contact = ({ contact: { title, subtitle, description, image } }) => {
  const [opened, setOpened] = useState(false)
  const isMobile = useMediaQuery('(max-width: 599px)')
  const theme = useTheme()

  const handleOpen = () => {
    setOpened(true)
  }

  const handleClose = () => {
    setOpened(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <Box>
      <Box mb={4}>
        <Img fluid={image} alt="contact image" />
      </Box>
      <ContentBox
        mb={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="subtitle1">{subtitle}</Typography>
        <BigTitle>{title}</BigTitle>
        <Typography variant="body1">{description}</Typography>
      </ContentBox>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button variant="contained" color="secondary" onClick={handleOpen}>
          Send an Email
        </Button>
        <ModalWrapper
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={opened}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={opened}>
            <FormWrapperBox theme={theme}>
              <Typography variant="subtitle1">Contact us:</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  id="fieldName"
                  label="name"
                  variant="outlined"
                  size={isMobile ? 'small' : 'normal'}
                />
                <TextField
                  id="fieldEmai"
                  label="email"
                  size={isMobile ? 'small' : 'normal'}
                  variant="outlined"
                />
                <TextField
                  id="standard-multiline-flexible"
                  label="Message"
                  multiline
                  variant="outlined"
                  size={isMobile ? 'small' : 'normal'}
                  rows={4}
                />
                <Box display="flex" justifyContent="flex-end">
                  <Button variant="contained" color="primary" type="submit">
                    Send
                  </Button>
                </Box>
              </form>
            </FormWrapperBox>
          </Fade>
        </ModalWrapper>
      </Box>
    </Box>
  )
}

export default Contact
