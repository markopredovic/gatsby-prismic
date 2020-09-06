import React from 'react'
import { graphql } from 'gatsby'
import { Container, Box } from '@material-ui/core'

import Layout from '../components/layout'
import Banner from '../components/Banner'
import Features from '../components/Features'
import Services from '../components/Services'
import Sales from '../components/Sales'
import Pricing from '../components/Pricing'
import Clients from '../components/Clients'

const IndexPage = ({ data }) => {
  console.log('data', data)

  const bannerData = {
    image: {
      fluid: data.banner.edges[0].node.data.body[0].items[0].banner_image.fluid,
      alt: data.banner.edges[0].node.data.body[0].items[0].banner_image.alt,
    },
    title: data.banner.edges[0].node.data.body[0].items[0].banner_title,
    subtitle: data.banner.edges[0].node.data.body[0].items[0].banner_subtitle,
    text: data.banner.edges[0].node.data.body[0].items[0].banner_text,
  }

  const featuresData = data.homeFeatures.edges[0].node.data.body[1].items

  const servicesData = {
    mainImage:
      data.homeServices.edges[0].node.data.body[2].primary.services_image.fluid,
    mainTitle:
      data.homeServices.edges[0].node.data.body[2].primary.services_title.text,
    mainSubtitle:
      data.homeServices.edges[0].node.data.body[2].primary.services_subtitle
        .text,
    mainDescription:
      data.homeServices.edges[0].node.data.body[2].primary.services_description,
    items: data.homeServices.edges[0].node.data.body[2].items,
  }

  const salesData = {
    fluidImage:
      data.homeSales.edges[0].node.data.body[3].primary.sales_image.fluid,
    title: data.homeSales.edges[0].node.data.body[3].primary.sales_title.text,
    subtitle:
      data.homeSales.edges[0].node.data.body[3].primary.sales_subtitle.text,
    description:
      data.homeSales.edges[0].node.data.body[3].primary.sales_description,
  }

  const pricingData = {
    title: data.homePricing.edges[0].node.data.body[4].primary.title.text,
    description:
      data.homePricing.edges[0].node.data.body[4].primary.description,
    items: data.homePricing.edges[0].node.data.body[4].items,
  }

  const clientsData = {
    title: data.homeClients.edges[0].node.data.body[5].primary.title.text,
    subtitle: data.homeClients.edges[0].node.data.body[5].primary.subtitle.text,
    items: data.homeClients.edges[0].node.data.body[5].items,
  }

  return (
    <Layout>
      <Container>
        <Box mb={8} id="banner">
          <Banner {...bannerData} />
        </Box>
        <Box py={6} id="features">
          <Features features={featuresData} />
        </Box>
        <Box py={6} id="services">
          <Services services={servicesData} />
        </Box>
        <Box py={6} id="sales">
          <Sales sales={salesData} />
        </Box>
        <Box py={6} id="pricing">
          <Pricing pricing={pricingData} />
        </Box>
        <Box py={6} id="clients">
          <Clients clients={clientsData} />
        </Box>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const PageQuery = graphql`
  query LandingPageQuery {
    banner: allPrismicLandingPage {
      edges {
        node {
          data {
            body {
              ... on PrismicLandingPageBodyBanner {
                items {
                  banner_subtitle {
                    html
                    text
                    raw
                  }
                  banner_title {
                    html
                    text
                    raw
                  }
                  banner_text
                  banner_image {
                    fluid {
                      ...GatsbyPrismicImageFluid
                    }
                    alt
                  }
                }
              }
            }
          }
        }
      }
    }
    homeFeatures: allPrismicLandingPage {
      edges {
        node {
          data {
            body {
              ... on PrismicLandingPageBodyHomeServices {
                id
                items {
                  feature_description
                  feature_image {
                    fluid {
                      ...GatsbyPrismicImageFluid
                    }
                  }
                  feature_title {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
    homeServices: allPrismicLandingPage {
      edges {
        node {
          data {
            body {
              ... on PrismicLandingPageBodyServices {
                id
                primary {
                  services_description
                  services_image {
                    fluid {
                      ...GatsbyPrismicImageFluid
                    }
                  }
                  services_title {
                    text
                  }
                  services_subtitle {
                    text
                  }
                }
                items {
                  service_description
                  service_title {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
    homeSales: allPrismicLandingPage {
      edges {
        node {
          data {
            body {
              ... on PrismicLandingPageBodySalesGrowth {
                id
                primary {
                  sales_description
                  sales_image {
                    fluid {
                      ...GatsbyPrismicImageFluid
                    }
                  }
                  sales_subtitle {
                    text
                  }
                  sales_title {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
    homePricing: allPrismicLandingPage {
      edges {
        node {
          data {
            body {
              ... on PrismicLandingPageBodyPricing {
                id
                primary {
                  description
                  title {
                    text
                  }
                }
                items {
                  description
                  price
                  price_option_type
                  core_business_system
                  customized_features
                  dual_infrastructure
                  team_management
                }
              }
            }
          }
        }
      }
    }
    homeClients: allPrismicLandingPage {
      edges {
        node {
          data {
            body {
              ... on PrismicLandingPageBodyClients {
                id
                primary {
                  subtitle {
                    text
                  }
                  title {
                    text
                  }
                }
                items {
                  client_image {
                    fluid {
                      ...GatsbyPrismicImageFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
