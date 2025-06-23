import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import BLogList from '../components/BLogList'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <NavBar />
        <Header />
        <BLogList />
        <NewsLetter />
        <Footer />
    </>
  )
}

export default Home