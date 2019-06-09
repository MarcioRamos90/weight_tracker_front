import React, { Fragment, useState } from 'react';

function NewWeighings() {
  const [open, handleOpen] = useState(false)
  return (
    <Fragment>
      <h4>Adicione uma nova pesagem</h4>
      {!open 
      ?
      <button onClick={() => handleOpen(!open)}>Adcionar</button>
      :
      <form action="submit" method="POST">
        <input type="text" name="weigth" placeholder="Insira o peso - ex 3,980"/>
        <input type="date" name="date" />
        <input type="submit" name="submit" value="Enviar"/>
        <input type="button" value="Cancel" onClick={() => handleOpen(!open)} />
      </form>
      }
    </Fragment>
  )
  
}

export default NewWeighings
