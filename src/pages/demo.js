import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/Home/index.jsx"

import Page from "../components/Demo/index.jsx"
import ClientOnly from '../components/clientOnly'
const IndexPage = () => (
    <> <SEO title="Request Demo" description='Learn how you can adopt virtual recruting & video interviews'/>
    <ClientOnly>
    <Layout><Page/></Layout>
    </ClientOnly>
    </>
)

export default IndexPage
