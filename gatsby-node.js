const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const productTemplate = path.resolve(`src/templates/Product/Product.jsx`)

  const result = await graphql(`
    query GET_SKUS {
      allStripePrice {
        edges {
          node {
            product {
              id
              name
              metadata {
                description
                img
                wear
              }
            }
            unit_amount
            unit_amount_decimal
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }

  result.data.allStripePrice.edges.forEach(({ node }) => {
    createPage({
      path: `${node.product.id}`,
      component: productTemplate,
      context: node,
    })
  })
}
