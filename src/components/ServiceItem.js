import React from 'react'
import {
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import styled from '@emotion/styled'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

const ServiceAccordion = styled(Accordion)`
  ${({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '.MuiIconButton-root': {
      color: '#fff',
    },
    '.MuiAccordionSummary-root': { padding: '0 3rem' },
    '.MuiAccordionDetails-root': {
      padding: '.8rem 3rem 1.6rem',
    },
    '&.MuiAccordion-rounded:last-child': {
      borderBottomLeftRadius: '5rem',
      borderBottomRightRadius: '5rem',
    },
    '&.MuiAccordion-rounded:first-of-type': {
      borderTopLeftRadius: '5rem',
      borderTopRightRadius: '5rem',
    },
    '.MuiTypography-h5': {
      fontWeight: '600',
    },
    '.MuiSvgIcon-root': {
      fontSize: '2.8rem',
      fontWeight: 700,
    },
  })}
`

const ServiceItem = ({ service_description, service_title }) => {
  const theme = useTheme()

  return (
    <Box>
      <ServiceAccordion theme={theme}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5">{service_title.text}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">{service_description}</Typography>
        </AccordionDetails>
      </ServiceAccordion>
    </Box>
  )
}

export default ServiceItem
