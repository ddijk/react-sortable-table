export const mysorter = (a, b) => {

    if ( a['name'][1] === b['name'][1]) {
        return 0
    }

    return a['name'][1] < b['name'][1] ? -1: 1

}

export const isDevEnvironment = () => {
    let host = window.location.hostname;
    let port = window.location.port;

    if( (host.indexOf("localhost") !== -1 || host.indexOf("127.0.0.1") !== -1) &&
        (port === '3000' || port === '8082') ) {
        return true;
    }

    return false;
}

export const formateDateTime = (d) => d.toString()

export default mysorter