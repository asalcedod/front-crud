import React from 'react'
import { Route } from 'react-router'
import User from './components/User'
import './custom.css'
import Layout from './components/Layout'


const App = () => {
  return (
    <Layout>
      <Route path="/" component={User} />
    </Layout>
  )
}

export default App