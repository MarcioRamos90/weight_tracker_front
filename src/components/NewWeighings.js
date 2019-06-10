import React, { Fragment, useState } from 'react';
import { Grid, Form, Button } from 'semantic-ui-react'

function NewWeighings() {
  const [open, handleOpen] = useState(false)
  return (
    <Fragment>
      <h4>Adicione uma nova pesagem</h4>
      <Grid centered>
        {!open 
        ?
        <Button onClick={() => handleOpen(!open)}>Adcionar</Button>
        :
        <Form action="submit" method="POST">
          <Form.Group>
              <Form.Input type="text" name="weigth" placeholder="Insira o peso - ex 3,980"/>
              <Form.Input type="date" name="date" />
          </Form.Group>
          <Button type="submit" name="submit">Enviar</Button>
          <Button type="button" onClick={() => handleOpen(!open)} >Cancel</Button>
        </Form>
        }
      </Grid>
    </Fragment>
  )
  
}

export default NewWeighings
