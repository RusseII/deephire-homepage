import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/Home/index.jsx"

import ClientOnly from '../components/clientOnly'
const IndexPage = () => (
    <> <SEO title="Pre-Recorded Interviews"/>
    <ClientOnly>
    <Layout></Layout>
    </ClientOnly>
    </>
)

export default IndexPage
