import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Denglu from './container/Denglu';
import Xiangq from './container/Xiangq';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className='main'>
                        <div className="content">
                            <Route path='/home' component={Home} />
                            <Route path='/api' component={Api} />
                            <Route path='/start' component={Start} />
                            <Route path='/about' component={About} />
                            <Route path='/denglu' component={Denglu} />
                            <Route path='/xiangq' component={Xiangq} />
                        </div>
                    </div>
                    <ul className="sider">
                        <img src={require("./image/1.png")} alt="" width="270px"/>
                        <img src={require("./image/2.png")} alt="" width="270px"/>
                        <img src={require("./image/3.png")} alt="" width="270px"/>
                        <img src={require("./image/4.png")} alt="" width="270px"/>
                        <img src={require("./image/5.png")} alt="" width="270px"/>
                        <img src={require("./image/6.png")} alt="" width="270px"/>
                    </ul>
                </div>
            </Router>
        )
    }
}
