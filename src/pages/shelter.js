import React from 'react'
import Layout from "../components/layout"
import Menu from "../components/menu"

const Shelter = () => (
        <Layout>
            <Menu />
            <h1>Shelters</h1>
            <p>City Rescue Mission of Lansing</p>
            <p><span>Address: </span>2216 S Cedar St, Lansing, MI 48910</p>
            <p><span>Phone: </span>(517) 485-0145</p>
            <p><span>Website: </span><a href="https://bearescuer.org">City Rescue Mission of Lansing </a></p>
        </Layout>
    )

export default Shelter;