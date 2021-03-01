import React from 'react'
import Layout from "../components/layout"
import Menu from "../components/menu"

const Food = () => (
        <Layout>
            <Menu />
            <h1>Food</h1>
            <p>Food Pantry</p>
            <p><span>Website: </span><a href="https://www.lansingmi.gov/530/Mobile-Food-Pantry">Mobile Food Pantry </a></p>
            <p><span>Phone: </span>(517) 364-1000</p>
        </Layout>
    )

export default Food;
