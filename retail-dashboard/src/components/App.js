import React, { Component } from 'react'
import config from '../config'

const url = `https://sheets.googleapis.com/v4/spreadsheets/${
  config.spreadsheetId
}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`

class App extends Component {
  state = {
    items: []
  }

  async componentDidMount() {
    let response = await fetch(url)
    let data = await response.json()
    let batchRowValues = await data.valueRanges[0].values

    const rows = []

    for (let i = 1; i < batchRowValues.length; i++) {
      let rowObject = {}
      for (let j = 0; j < batchRowValues[i].length; j++) {
        rowObject[batchRowValues[0][j]] = batchRowValues[i][j]
      }
      rows.push(rowObject)
    }
    this.setState({ items: rows })
    console.log(this.state)
  }

  render() {
    return <div />
  }
}

export default App
