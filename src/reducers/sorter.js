import _ from 'lodash'
export const sorter = (state = { 'tableData': [] }, action) => {
    console.log('action', action);
    switch (action.type) {
        case 'START_GET_DATA':
            console.info('START_GET_DATA', action);
            return state

        case 'RECEIVE_GET_DATA':
            console.info('RECEIVE_GET_DATA', action.value);
            return {
                ...state,
                'tableData': [...state.tableData,...action.value.content],
                'chunk_size': action.value.chunk_size,
                'chunk_index': action.value.chunk_index,
                'total_size': action.value.total_size
            }

        case 'ERROR_GET_DATA':
            console.error('ERROR_GET_DATA', action);
            return state
        case 'CHANGE_SORT':
            if (state.column === action.column) {
                    console.log('using std sorter');
                    return {
                        ...state,
                        tableData: state.tableData.slice().reverse(),
                        direction:
                            state.direction === 'ascending' ? 'descending' : 'ascending',
                    }

            }

            return {
                ...state,
                column: action.column,
                tableData: _.sortBy(state.tableData, [action.column]),
                direction: 'ascending',
            }
        default:
            return state;
    }
}

export default sorter