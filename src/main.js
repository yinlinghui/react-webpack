import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/home/Home'

const UrlRouters = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/home">关于</Link></li>
            </ul>
            <Route exact path="/home" component={Home}/>
        </div>
    </Router>
)
class HelloReact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.Timing = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    componentWillMount() {
        clearInterval(this.Timing)
    }

    test = () => {
        console.log('打印出来了');
    };

    render() {
        return (
            <div>
                <h1 onClick={this.test}>Hello111 {this.props.name}</h1>
                <h2>This time {this.state.date.toLocaleTimeString()}</h2>
                <UrlRouters />
            </div>
        )
    }
}
ReactDom.render(<HelloReact name="React"/>, document.getElementById('app'))
