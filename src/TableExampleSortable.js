
import React from 'react'
import { Table } from 'semantic-ui-react'
import mysorter from './utils'
import { connect } from "react-redux";
import { getPersons } from './endpoints';


class TableExampleSortable extends React.Component {


    componentDidMount = () => {

        this.props.dispatch(getPersons());
    }

    render() {
        const column = this.props.column;
        const direction = this.props.direction;
        return (
            <div style={{ overflowX: 'scroll' }}>
                <Table sortable celled >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell
                                sorted={column === 'name' ? direction : null}
                                onClick={() => this.props.dispatch({ type: 'CHANGE_SORT', column: 'name', sorter: mysorter })}
                            >
                                Namex
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'age' ? direction : null}
                                onClick={() => this.props.dispatch({ type: 'CHANGE_SORT', column: 'age' })}
                            >
                                Age
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'gender' ? direction : null}
                                onClick={() => this.props.dispatch({ type: 'CHANGE_SORT', column: 'gender' })}
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
                        {this.props.data.map(({ age, gender, name }) => (
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
}


const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        // filter: state.cases.filter,
        // cases: state.overzichtBgk.content,
        // column: state.overzichtBgk.column,
        // direction: state.overzichtBgk.direction
        data: state.sorter.tableData
    }
}
export default connect(mapStateToProps)(TableExampleSortable)
