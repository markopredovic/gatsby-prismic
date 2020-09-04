import React from 'react'
import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import Layout from '../../components/layout'

const AccordionTestPage = () => {
  return (
    <Layout>
      <Box px={2}>
        <h3>Accordion</h3>
        <Box py={5}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h4">Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Layout>
  )
}

export default AccordionTestPage
