import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/Home/index.jsx"

import Page from "../components/Pricing/index.jsx"
import ClientOnly from '../components/clientOnly'
const IndexPage = () => (

    <> <SEO title="Pricing" description="Flexible, simple pricing." />
    <ClientOnly>
    <Layout><Page/></Layout>
    </ClientOnly>
    </>
)

export default IndexPage
