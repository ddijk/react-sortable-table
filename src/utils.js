export const mysorter = (a, b) => {

    if ( a['name'][1] === b['name'][1]) {
        return 0
    }

    return a['name'][1] < b['name'][1] ? -1: 1

}

export default mysorter