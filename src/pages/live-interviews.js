import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/Home/index.jsx"
import ClientOnly from '../components/clientOnly'
import Page from "../components/LiveInterviews/index.jsx"

const IndexPage = () => (
    <> <SEO title="Live Interviews" description="Simple Live Interviews Built Specifically for Recruiting"/>
    <ClientOnly>
    <Layout><Page/></Layout>
    </ClientOnly>
    </>
)

export default IndexPage
