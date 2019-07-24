import React, { Component } from "react";
import QrReader from 'react-qr-reader'
import {Link,withRouter} from "react-router-dom"
import AppContext from '../context/AppContext'
 
class Home extends Component {
  static contextType = AppContext
  state = {
    result: 'No result',
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data.split("/").splice(0,1).join("")
      }) 
      this.context.setTable(data.split("/").splice(1,1).join(""))
      setTimeout(() => {
         this.props.history.push(`/menu/${this.state.result}`)
      }, 2000);
    }

  }

  handleError = err => {
    console.error(err)
  }

  render() {
    return (
      <div className="home">
    <Link to="/adminpanel"><button>Sing in</button></Link> 
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}
 

export default withRouter(Home) 