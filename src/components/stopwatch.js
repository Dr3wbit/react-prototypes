import React, { Component } from 'react';


class Stopwatch extends Component {

    render(){
        const { elapsed, status } = this.state;
        return (
            <div>
                <h1>{elapsed}</h1>
                <p>{status}</p>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
            </div>
        );
    }

    constructor(props){
        super(props);

        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0,
        };

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }

    start(){
        this.setState = ({
            status: 'running',
            start: new Date().getTime()
        });
    }

    stop(){
        this.setState = ({
            status: 'stopped'
        });
    }

    update(){
        const { status, start } = this.state;
        if (status = 'running'){
            this.setState = ({
                elapsed: new Date().getTime() - start
            })
            setTimeout(this.update, 10);
        }
    }
}

export default Stopwatch;