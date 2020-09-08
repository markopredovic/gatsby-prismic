import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@material-ui/core/styles'
import { Box, Typography, Button } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import BigNumber from './UI/BigNumber'
import { grey } from '@material-ui/core/colors'

const EmptyCircle = styled.span`
  ${({ theme }) => ({
    display: 'inline-block',
    width: '2.5rem',
    minWidth: '2.5rem',
    height: '2.5rem',
    backgroundColor: grey[300],
    borderRadius: '100%',
  })}
`

const PriceBoxTag = styled.div`
  ${({ theme }) => ({
    padding: '0 2rem',
    height: '4rem',
    lineHeight: '4rem',
    fontSize: '2rem',
    fontWeight: '600',
    color: '#fff',
    textTransform: 'uppercase',
    backgroundColor: theme.palette.primary.light,
    borderRadius: '3rem',
  })}
`

const WrapperBox = styled(Box)`
  ${({ theme, type }) => ({
    maxWidth: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#f6f6f6',
    borderRadius: '10rem',
    border:
      type === 'growth' ? `7px dashed ${theme.palette.primary.light}` : 'none',
  })}
`

const PriceTypeBox = styled(Box)`
  span {
  }
  span + p {
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 700;
    text-transform: capitalize;
  }
  p {
    text-align: center;
  }
`

const PriceOptionsBox = styled(Box)``

const OptionBox = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  svg {
    margin-right: 1rem;
    font-size: 3rem;
  }
  span {
    margin-right: 1rem;
  }
`

const PricingBox = ({
  price_option_type,
  price,
  description,
  core_business_system,
  team_management,
  dual_infrastructure,
  customized_features,
}) => {
  const theme = useTheme()

  return (
    <WrapperBox
      type={price_option_type}
      theme={theme}
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={{ xs: 6 }}
      px={{ xs: 6, md: 2 }}
      mb={{ xs: 6, md: 0 }}
      mt={{ xs: 0, md: price_option_type !== 'growth' ? 6 : 0 }}
      width={{ xs: '1', md: '30%' }}
    >
      <PriceTypeBox
        mb={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {price_option_type === 'growth' && (
          <PriceBoxTag theme={theme}>Popular</PriceBoxTag>
        )}
        <BigNumber>${price}</BigNumber>
        <Typography variant="body2" color="primary">
          {price_option_type}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </PriceTypeBox>
      <PriceOptionsBox mb={4}>
        <OptionBox>
          {core_business_system ? (
            <CheckCircleIcon color="primary" />
          ) : (
            <EmptyCircle theme={theme} />
          )}
          <Typography>Core Business System</Typography>
        </OptionBox>

        <OptionBox>
          {team_management ? (
            <CheckCircleIcon color="primary" />
          ) : (
            <EmptyCircle />
          )}
          <Typography>Team Management</Typography>
        </OptionBox>

        <OptionBox>
          {dual_infrastructure ? (
            <CheckCircleIcon color="primary" />
          ) : (
            <EmptyCircle />
          )}
          <Typography>Dual Infrastructure</Typography>
        </OptionBox>
        <OptionBox>
          {customized_features ? (
            <CheckCircleIcon color="primary" />
          ) : (
            <EmptyCircle />
          )}
          <Typography>Customized Features</Typography>
        </OptionBox>
      </PriceOptionsBox>
      <Button variant="contained" color="primary">
        Enquire
      </Button>
    </WrapperBox>
  )
}

export default PricingBox
