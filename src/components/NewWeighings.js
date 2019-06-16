import React, { Fragment, Component } from 'react';
import { Grid, Form, Button } from 'semantic-ui-react'
import { connect } from "react-redux"
import { newWeight } from '../actions/weights.actions'

class NewWeighings extends Component {
  state = {
    open: false,
    weight: "",
    date: null
  }

  componentDidMount() {

    const date = (new Date())
      .toISOString()
      .split("T")[0]
    this.setState({date});

  }

  onSubmit = () => {
    const { weight, date } = this.state
    const { newWeight } = this.props

    newWeight({weight, date})
  }

  handleOpen = () => {
    this.setState({open: !this.state.open})
  }

  handleChangeInpunt = (name, value) => {
    this.setState({ [name]: value })
  }

  render(){
    const { open, weight, date } = this.state

    return (
      <Fragment>
        <Grid centered>
          {!open 
          ?
          <Button onClick={() => this.handleOpen(!open)}>Adcionar nova pesagem</Button>
          :
          <Form 
            method="POST" 
            onSubmit={this.onSubmit}
          >
            <Form.Group>
                <Form.Input 
                  type="number" 
                  name="weight"
                  value={weight}
                  onChange={({target}) => this.handleChangeInpunt('weight', target.value)} 
                  placeholder="Insira o peso - ex 3,980"
                  required
                />
                <Form.Input 
                  type="date" 
                  name="date"
                  value={date}
                  onChange={({target}) => this.handleChangeInpunt('date', target.value)} 
                  required
                />
            </Form.Group>
            <Button 
              type="submit" 
              name="submit">Enviar
            </Button>
            <Button 
              type="button" 
              onClick={() => this.handleOpen(!open)} >Cancel
            </Button>
          </Form>
          }
        </Grid>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  newWeight: (values) => dispatch(newWeight(values))
})

export default connect(null, mapDispatchToProps)(NewWeighings)
