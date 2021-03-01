import React from 'react'
import Layout from "../components/layout"
import Menu from "../components/menu"

const Medical = () => (
        <Layout>
            <Menu />
            <h1>Medical</h1>
            <p>Sparrow Hospital</p>
            <p><span>Address: </span>1215 E Michigan Ave, Lansing, MI 48912</p>
            <p><span>Phone: </span>(517) 364-1000</p>
            <p><span>Website: </span><a href="https://www.sparrow.org/our-hospitals-and-services/sparrow-hospitals/sparrow-hospital">Sparrow Hospital </a></p>
        </Layout>
    )

export default Medical;
