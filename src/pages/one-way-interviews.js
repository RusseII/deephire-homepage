import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/Home/index.jsx"
import PreRecorded from "../components/PreRecorded/index.jsx"

import ClientOnly from '../components/clientOnly'
const IndexPage = () => (
    <> <SEO title="Pre-Recorded Interviews" description="Pre-Recoded Interviews - Enhance your hiring process with video introductions."/>
    <ClientOnly>
    <Layout><PreRecorded/></Layout>
    </ClientOnly>
    </>
)

export default IndexPage
