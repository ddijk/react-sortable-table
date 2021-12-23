
export const getPersons = () => {
    const url = 'http://localhost:9000/get_stuff'
    return async("GET_DATA", {}, url, undefined, undefined, undefined, "GET", {'method':'GET'})
}

function async(type, startArgs, url, requestBody, args, onSuccess, method, config) {

    return function (dispatch) {
        dispatch(start(type, startArgs));

        return fetch(url, config)
            .then(response => handleErrors(response).json())
            .then(json => {
                dispatch(receive(type, json, startArgs))
                if (onSuccess) {
                    onSuccess(json)
                }
            })
            .catch(error => dispatch(handleError(type, startArgs, error)))
    }
}

function start(type, start) {
    return {
        type: 'START_' + type, ...start
    }
}


function receive(type, value, startArgs) {
    return {
        type: 'RECEIVE_' + type,
        value,
        start: startArgs
    }
}

function handleError(type, startArgs, error) {
    return {
        type: 'ERROR_' + type,
        error,
        start: startArgs
    }
}

function handleErrors(response) {
    if (!response.ok) throw Error(response.statusText);
    return response;
}
