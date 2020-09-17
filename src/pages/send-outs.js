import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/Home/index.jsx"

import Page from "../components/SendOuts/index.jsx"
import ClientOnly from '../components/clientOnly'
const IndexPage = () => (
    <> <SEO title="Send Outs" description='Control the Interview Process for your Clients'/>
    <ClientOnly>
    <Layout><Page/></Layout>
    </ClientOnly>
    </>
)

export default IndexPage
