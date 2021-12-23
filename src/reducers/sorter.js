import _ from 'lodash'
export const sorter = (state = { 'tableData': [] }, action) => {
    console.log('action', action);
    switch (action.type) {
        case 'START_GET_DATA':
            console.info('START_GET_DATA', action);
            return state

        case 'RECEIVE_GET_DATA':
            console.info('RECEIVE_GET_DATA', action);
            return {
                ...state,
                'tableData': action.value
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
                column: action.column,
                tableData: _.sortBy(state.tableData, [action.column]),
                direction: 'ascending',
            }
        default:
            return state;
    }
}

export default sorter