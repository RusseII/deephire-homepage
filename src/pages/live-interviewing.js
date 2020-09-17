import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/Home/index.jsx"

import Page from "../components/LiveInterviewing/index.jsx"
import ClientOnly from '../components/clientOnly'
const IndexPage = () => (
    <> <SEO title="Live Interviewing" description='Live Interviews built for Recruiters. Everything you need in one place.'/>
    <ClientOnly>
    <Layout><Page/></Layout>
    </ClientOnly>
    </>
)

export default IndexPage
