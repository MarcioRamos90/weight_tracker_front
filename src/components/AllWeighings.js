import React from 'react'
import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getWeights } from '../actions'

class Weighings extends React.Component {
  componentDidMount() {
    const { weights, getWeights } = this.props
    getWeights()
    console.log(weights);
  }

  render() {
    return (
      <Table  inverted >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Data</Table.HeaderCell>
            <Table.HeaderCell>Peso</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
          <Table.Row>
            <Table.Cell>30/02/2019</Table.Cell>
            <Table.Cell>81,9</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>30/03/2019</Table.Cell>
            <Table.Cell>81,5</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>30/04/2019</Table.Cell>
            <Table.Cell>80,9</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )

  }

}

const mapDispatchToProps = dispatch => ({
  getWeights: () => dispatch(getWeights())
})

const mapStateToProps = ({weights}) => ({
  weights
})

export default connect(mapStateToProps, mapDispatchToProps)(Weighings)
