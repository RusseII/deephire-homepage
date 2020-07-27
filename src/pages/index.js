import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Page from "../components/Home/index.jsx"
import ClientOnly from '../components/clientOnly'


const IndexPage = () => (
   <> <SEO title="Video Interviews"/>
    <ClientOnly>    <Page/>    </ClientOnly>
</>
)

export default IndexPage
