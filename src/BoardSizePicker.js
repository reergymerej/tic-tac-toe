import React, { Component, PropTypes } from 'react'

class BoardSizePicker extends Component {
  constructor() {
    super()
    this.state = {
      rows: undefined,
      columns: undefined,
      valid: false,
    }
  }

  setColumns = event => {
    const columns = parseFloat(event.target.value)
    const rows = this.state.rows
    this.setState({
      columns,
      valid: !isNaN(columns) && !isNaN(rows),
    })
  }

  setRows = event => {
    const rows = parseFloat(event.target.value)
    const columns = this.state.columns
    this.setState({
      rows,
      valid: !isNaN(columns) && !isNaN(rows),
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSelectSize(this.state.columns, this.state.rows)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="columns" onChange={this.setColumns} />
          <input placeholder="rows" onChange={this.setRows} />
          <button type="submit" disabled={!this.state.valid}>ok</button>
        </form>
      </div>
    )
  }
}

BoardSizePicker.propTypes = {
  onSelectSize: PropTypes.func.isRequired,
}

export default BoardSizePicker
