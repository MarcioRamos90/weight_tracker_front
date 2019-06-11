import React from 'react'
import { Table, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getWeights } from '../actions'

class Weighings extends React.Component {
  state = {
    finishLoading: false
  }

  componentDidMount() {
    const { getWeights } = this.props

    getWeights().then(finishLoading => this.setState({finishLoading}))
  }

  render() {
    const { finishLoading } = this.state
    const { weights } = this.props

    if(!finishLoading){
      return <Grid centered>...loading</Grid>
    }

    return (
      <Table inverted >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Data</Table.HeaderCell>
            <Table.HeaderCell>Peso</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {!!weights && weights.map(item => (
          <Table.Row key={item.id}>
            <Table.Cell>{item.date}</Table.Cell>
            <Table.Cell>{item.weight}</Table.Cell>
          </Table.Row>
        ))
      }
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
