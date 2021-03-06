/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// Permite que gatsby al momento de realizar el bundle
// tomrara todas las vistas y las encerrara en el layout

const React = require("react")
const Layout = require("./src/components/layout").default
const { GlobalStyles } = require("./src/styles")
const { CardProvider } = require("./src/context")

exports.wrapRootElement = ({ element }) => (
  <>
    <CardProvider>
      <GlobalStyles />
      <Layout>{element}</Layout>
    </CardProvider>
  </>
)
