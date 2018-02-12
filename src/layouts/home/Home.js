import React, { Component } from 'react'
import ApplicationForm from '../../components/Application-Form.js'

class Home extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">

            <ApplicationForm/>

          </div>
        </div>
      </main>
    )
  }
}

export default Home
