import _ from 'lodash'
import React from 'react'
import { Table } from 'semantic-ui-react'
import mysorter from './utils'

const tableData = [
  { name: 'John', age: 150, gender: 'Male' },
  { name: 'Amber', age: 400, gender: 'Female' },
  { name: 'Leslie', age: 25, gender: 'Other' },
  { name: 'Ben', age: 70, gender: 'Male' },
]

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_SORT':
      if (state.column === action.column) {
          if ( action.sorter) {
              console.log('using custom sorter', state);
              let sorted = state.data.slice().sort(action.sorter)
               if ( state.direction === 'descending'  ) {

                  sorted = sorted.reverse()
               }
            return {
                ...state,
                data: sorted,
                direction:
                  state.direction === 'ascending' ? 'descending' : 'ascending',
              }

          } else {
              console.log('using std sorter');
            return {
                ...state,
                data: state.data.slice().reverse(),
                direction:
                  state.direction === 'ascending' ? 'descending' : 'ascending',
              }
          }
       
      }

      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: 'ascending',
      }
    default:
      throw new Error()
  }
}

function TableExampleSortable() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    column: null,
    data: tableData,
    direction: null,
  })
  const { column, data, direction } = state

  return (
      <div style={{overflowX: 'scroll'}}>
    <Table sortable celled >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={column === 'name' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name', sorter : mysorter })}
          >
            Namex
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'age' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'age' })}
          >
            Age
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'gender' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'gender' })}
          >
            Gender
          </Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>extra</Table.HeaderCell>
          <Table.HeaderCell>last</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map(({ age, gender, name }) => (
          <Table.Row key={name}>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{age}</Table.Cell>
            <Table.Cell>{gender}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{age}</Table.Cell>
            <Table.Cell>{gender}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{age}</Table.Cell>
            <Table.Cell>{gender}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{age}</Table.Cell>
            <Table.Cell>{gender}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{age}</Table.Cell>
            <Table.Cell>{gender}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{age}</Table.Cell>
            <Table.Cell>{gender}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{age}</Table.Cell>
            <Table.Cell>{gender}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{age}</Table.Cell>
            <Table.Cell>{gender}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{age}</Table.Cell>
            <Table.Cell>{gender}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{age}</Table.Cell>
            <Table.Cell>{gender}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{age}</Table.Cell>
            <Table.Cell>{gender}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    </div>
  )
}

export default TableExampleSortable