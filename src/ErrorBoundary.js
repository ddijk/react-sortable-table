import React from 'react'
// import {encodeUrlParameters, fetchData} from "../actions";
import {Icon} from "semantic-ui-react";
import {formateDateTime, isDevEnvironment} from "./utils";

const errorUrl = '/logfrontenderror'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo,
            posting: false,
            success: false,
            failedToSend: false
        })
        // You can also log error messages to an error reporting service here

        let dev= isDevEnvironment();

        let url = window.location.href;

        if( !dev ) {
            this.logErrorToMyService(error, errorInfo, url);
        }
    }

    logErrorToMyService = (error, errorInfo, url) => {

        this.setState({posting: true})

        // fetchData(errorUrl + encodeUrlParameters({error, url}), errorInfo.componentStack)
        //     .then(response => {
        //         if (!response.ok) throw Error(response.statusText);
        //         return response;
        //     })
        //     .then(json => {
        //         this.setState({posting: false, success: true})
        //     })
        //     .catch(error => {
        //         this.setState({posting: false, success: false, failedToSend: true})
        //     })
        console.error('Ooops:'+ errorInfo, error);
    }

    render() {

        let dev= isDevEnvironment();

        let url = window.location.href;

        if (this.state.errorInfo) {
            // Error path
            return (
                <div style={{margin: 'auto', maxWidth: 600, marginTop: 32}}>
                    <h2 style={{color: 'rgb(206, 17, 38)'}}>Er is iets mis gegaan</h2>
                    <p>Er is een fout opgetreden in de frontend van Advobot</p>
                    <p>{url}</p>

                    {dev ? <button onClick={() => this.logErrorToMyService(this.state.error, this.state.errorInfo, url)}>log error</button> : ''}

                    <p>
                        {this.state.posting ? <Icon loading name='spinner' color='blue'/> : <div>

                            {this.state.success ? <div><Icon name='check' color='green'/> Deze foutmelding is verzonden naar een beheerder</div> : ''}

                        </div>}

                        {this.state.failedToSend ? <div>
                            <Icon name='close' color='red'/> Maak a.u.b. een screenshot en stuur deze naar een beheerder
                            <div>
                                {formateDateTime(new Date())}
                            </div>
                        </div> : ''}

                    </p>

                    <details style={{ whiteSpace: 'pre-wrap' }} open>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

export default ErrorBoundary