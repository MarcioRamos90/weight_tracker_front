import React from 'react'
import { Table } from 'semantic-ui-react'

const Weighings = () => (
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

export default Weighings
