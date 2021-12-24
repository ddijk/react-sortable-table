
import React from 'react'
import { Table, Progress } from 'semantic-ui-react'
import { connect } from "react-redux";
import { getPersonsChunk } from './endpoints';


class TableExampleSortable extends React.Component {


    componentDidMount = () => {

        this.props.dispatch(getPersonsChunk(0));
    }

    componentDidUpdate() {

        if (!this.props.sorting && this.props.chunk_index < Math.round(this.props.total_size / this.props.chunk_size)) {
            const nextChunk = this.props.chunk_index + 1;
            this.props.dispatch(getPersonsChunk(nextChunk))
        }
    }

    render() {
        const column = this.props.column;
        const direction = this.props.direction;
        return (
            <div style={{ overflowX: 'scroll' }}>
                <div id={'progress'} style={{display: 'inline-block', marginTop: 8, marginLeft: 28}}>
                            { Math.round(100*((this.props.data.length || 0)/(this.props.total_size || 1))) } % 
                            <Progress style={{margin: 0, width: 100}} size='tiny' color='blue' active={this.props.total_size!==this.props.data.length} total={this.props.total_size} value={this.props.data.length}/>
                        </div>
                <Table sortable celled >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell
                                sorted={column === 'name' ? direction : null}
                                onClick={() => this.sort('name')}
                            >
                                Namex
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'age' ? direction : null}
                                onClick={() => this.sort('age')}
                            >
                                Age
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'gender' ? direction : null}
                                onClick={() => this.sort('gender')}
                            >
                                Gender
                            </Table.HeaderCell>
                            <Table.HeaderCell sorted={column === 'index' ? direction : null}
                                onClick={() => this.sort('index')}
                            >index</Table.HeaderCell>
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
                        {this.props.data.map(({ age, gender, name, index }) => (
                            <Table.Row key={name}>
                                <Table.Cell>{name}</Table.Cell>
                                <Table.Cell>{age}</Table.Cell>
                                <Table.Cell>{gender}</Table.Cell>
                                <Table.Cell>{index}</Table.Cell>
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

    sort(column) {
        if (this.props.data.length < this.props.total_size) {
            console.log('** Sorting not yet possible, not all data fetched');
        } else {

            this.props.dispatch({ type: 'CHANGE_SORT', column: column })
        }
    }
}


const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        data: state.sorter.tableData,
        chunk_index: state.sorter.chunk_index,
        chunk_size: state.sorter.chunk_size,
        total_size: state.sorter.total_size,
        sorting: state.sorter.sorting // when 'true' -> user is busy sorting
    }
}
export default connect(mapStateToProps)(TableExampleSortable)
