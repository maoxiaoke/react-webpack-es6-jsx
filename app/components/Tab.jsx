import React from 'react';

class Tab extends React.Component {
    constructor(props){
        super(props);
        this.state = { counter: 0};
    }
    componentDidMount(){
        this.interval = setInterval(
            this.increment.bind(this),1000
        )
    }
    increment(){
        this.setState(({counter}) => {
            return {counter: counter + 1};
        });
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        const {counter} = this.state;
        return (
            <div style={{textAlign: 'center'}}>
              <p>yuer <span style={{color:'red'}}>❤</span> xiaoke</p>
              <p>xiaoke <span style={{color:'red'}}>❤</span> yuer</p>
              <p>a timer of love</p>
              <p>{counter}</p>
            </div>
        )
    }
}
export default Tab;