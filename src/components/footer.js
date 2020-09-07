import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Box, Container, Typography } from '@material-ui/core'
import { graphql, StaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import RoomIcon from '@material-ui/icons/Room'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import { useTheme } from '@material-ui/core/styles'

import FooterTitle from './UI/FooterTitle'

const WrapperBox = styled(Box)`
  padding-top: 80px;
  padding-bottom: 24px;
`

const FooterBox = styled(Box)`
  color: #fff;
  .gatsby-image-wrapper {
    margin-bottom: 2rem;
    width: 50%;
  }
  h4 {
    margin-bottom: 3rem;
  }
`

const ContactBox = styled(Box)`
  ${({ theme }) => `

  margin-bottom: 1.5rem;
  .MuiSvgIcon-root {
    margin-right: 1.5rem;
    fill: ${theme.palette.primary.light};
  }
`}
`

const SocialBox = styled(Box)`
  margin-right: 3rem;

  .MuiSvgIcon-root {
    fill: #fff;
    font-size: 4rem;
  }
`

const CopyrightBox = styled(Box)``

const Footer = () => {
  const theme = useTheme()

  return (
    <StaticQuery
      query={graphql`
        {
          allPrismicLandingPage {
            edges {
              node {
                data {
                  about_description
                  footer_description
                  about_title {
                    text
                  }
                  contact_title {
                    text
                  }
                  contacts {
                    contact_text
                    contact_type
                  }
                  footer_logo {
                    fluid {
                      ...GatsbyPrismicImageFluid
                    }
                  }
                  social_media {
                    social_type
                    social_url
                  }
                  social_title {
                    text
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const footerData = {
          footer_logo:
            data.allPrismicLandingPage.edges[0].node.data.footer_logo.fluid,
          footer_description:
            data.allPrismicLandingPage.edges[0].node.data.footer_description,
          about_title:
            data.allPrismicLandingPage.edges[0].node.data.about_title.text,
          about_description:
            data.allPrismicLandingPage.edges[0].node.data.about_description,
          contact_title:
            data.allPrismicLandingPage.edges[0].node.data.contact_title.text,
          contacts: data.allPrismicLandingPage.edges[0].node.data.contacts,
          social_title:
            data.allPrismicLandingPage.edges[0].node.data.social_title.text,
          social_media:
            data.allPrismicLandingPage.edges[0].node.data.social_media,
        }

        return (
          <Box bgcolor="#303669">
            <Container>
              <WrapperBox
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                flexWrap={{ cs: 'nowrap', sm: 'wrap' }}
                px={5}
              >
                <FooterBox mb={6}>
                  <Img fluid={footerData.footer_logo} alt="footer logo" />
                  <Typography variant="body1">
                    {footerData.footer_description}
                  </Typography>
                </FooterBox>
                <FooterBox mb={6}>
                  <FooterTitle>{footerData.about_title}</FooterTitle>
                  <Typography variant="body1">
                    {footerData.footer_description}
                  </Typography>
                </FooterBox>
                <FooterBox mb={6}>
                  <FooterTitle>{footerData.contact_title}</FooterTitle>
                  {footerData.contacts.map((item, i) => {
                    let icon = null

                    if (item.contact_type === 'address') {
                      icon = <RoomIcon />
                    } else if (item.contact_type === 'phone') {
                      icon = <PhoneIcon />
                    } else {
                      icon = <EmailIcon />
                    }
                    return (
                      <ContactBox display="flex" theme={theme}>
                        {icon}
                        <Typography variant="body1">
                          {item.contact_text}
                        </Typography>
                      </ContactBox>
                    )
                  })}
                </FooterBox>
                <FooterBox>
                  <FooterTitle>{footerData.social_title}</FooterTitle>
                  <Box display="flex">
                    {footerData.social_media.map((item, i) => {
                      let icon = null

                      if (item.social_type === 'twitter') {
                        icon = <TwitterIcon />
                      } else if (item.social_type === 'instagram') {
                        icon = <InstagramIcon />
                      } else if (item.social_type === 'facebook') {
                        icon = <FacebookIcon />
                      } else {
                        icon = <LinkedInIcon />
                      }
                      return (
                        <SocialBox>
                          <Link to={item.social_url}>{icon}</Link>
                        </SocialBox>
                      )
                    })}
                  </Box>
                </FooterBox>
              </WrapperBox>
              <CopyrightBox py={(0, 6)}>
                <Typography variant="body2">
                  &copy; {new Date(Date.now()).getFullYear()} Landing Page
                  &trade;. All Rights Reserved.
                </Typography>
              </CopyrightBox>
            </Container>
          </Box>
        )
      }}
    ></StaticQuery>
  )
}

export default Footer
