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

const WrapperBox = styled(Box)``

const ContentBox = styled(Box)`
  ${({ theme }) => `
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

  ${theme.breakpoints.up('md')} {
    h3 {
      text-align: left;
    }
    p {
      text-align: left;
    }
  }

`}
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
    <WrapperBox
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box
        mb={{ xs: 4, sm: 0 }}
        width={{ xs: '1', sm: '45%' }}
        order={{ xs: 1, sm: 2 }}
      >
        <Img fluid={image} alt="contact image" />
      </Box>
      <ContentBox
        theme={theme}
        mb={6}
        display="flex"
        flexDirection="column"
        alignItems={{ xs: 'center', md: 'flex-start' }}
        width={{ xs: '1', sm: '45%' }}
        order={{ xs: 2, sm: 1 }}
      >
        <Typography variant="subtitle1">{subtitle}</Typography>
        <BigTitle>{title}</BigTitle>
        <Typography variant="body1">{description}</Typography>
        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
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
      </ContentBox>
    </WrapperBox>
  )
}

export default Contact
