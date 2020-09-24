import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/Home/index.jsx"

import Page from "../components/TeamHiring/index.jsx"
import ClientOnly from '../components/clientOnly'
const IndexPage = () => (
    <> <SEO title="Team Hiring" description='Collaborate with your team'/>
    <ClientOnly>
    <Layout><Page/></Layout>
    </ClientOnly>
    </>
)

export default IndexPage
