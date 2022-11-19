import React from 'react'

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import Routers from '../../routers/Routers';

const Layout = () => {
  return (
    <section
    className="h-screen bg-cover md:bg-top bg-center">
      <Navbar />
      <div>
        <Routers />
      </div>
      <Footer />
      </section>
  )
}

export default Layout
