import React from 'react'
import { Table, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getWeights, deleteWeight } from '../actions'
import { Icon } from 'semantic-ui-react'

class Weighings extends React.Component {
  state = {
    finishLoading: false
  }

  componentDidMount() {
    this.props.getWeights()
      .then(finishLoading => this.setState({finishLoading}))
  }

  handleDeleteItem = id => this.props.deleteWeight(id)

  render() {
    const { finishLoading } = this.state
    const { weights } = this.props

    if(!finishLoading){
      return <Grid centered>...loading</Grid>
    }

    return (
      <Table inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" >Peso</Table.HeaderCell>
            <Table.HeaderCell>Data</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {!!weights && weights.map(item => (
          <Table.Row key={item.id}>
            <Table.Cell textAlign="center">{item.weight}</Table.Cell>
            <Table.Cell collapsing>{item.date}</Table.Cell>
            <Table.Cell 
              selectable 
              collapsing 
              textAlign="center" 
              onClick={() => this.handleDeleteItem(item.id)}>
                <Icon name='delete' />
            </Table.Cell>
          </Table.Row>
        ))
      }
      </Table.Body>
      </Table>
    )

  }

}

const mapDispatchToProps = dispatch => ({
  getWeights: () => dispatch(getWeights()),
  deleteWeight: id => dispatch(deleteWeight(id))
})

const mapStateToProps = ({weights}) => ({
  weights
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Weighings)
