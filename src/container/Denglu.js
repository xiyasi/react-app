import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class All extends Component {
    render() {
        return (
            <div>
               <img src={require("./image/8.png")} alt="" width="900px"/>
               <Link to='/home'><button className='dl'>登录</button></Link>
            </div>
        )
    }
}