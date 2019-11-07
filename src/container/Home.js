import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Good from './Good';
import All from './All';
import Share from './Share';
import Question from './Question';
import Job from './Job';
import Usercs from './Usercs';
export default class Home extends Component {
    render() {
        let url = this.props.match.url
        return (
            <div>
                <div>
                    <Link to={url+'/all'} className="tab">全部</Link>
                    <Link to={url+'/good'} className="tab">精华</Link>
                    <Link to={url+'/share'} className="tab">分享</Link>
                    <Link to={url+'/question'} className="tab">问答</Link>
                    <Link to={url+'/job'} className="tab">招聘</Link>
                    <Link to={url+'/usercs'} className="tab">用户端测试</Link>
                </div>
                <div>
                    <Route path={`${url}/all`} component={All} />
                    <Route path={`${url}/good`} component={Good} />
                    <Route path={`${url}/share`} component={Share} />
                    <Route path={`${url}/question`} component={Question} />
                    <Route path={`${url}/job`} component={Job} />
                    <Route path={`${url}/usercs`} component={Usercs} />
                    {/* <Route path='/home/:tab' component={List}/> */}
                </div>
                <div>
                    <ul className='butn'>
                        <li>
                        <Link to={'/fenye?tab='+'&page=1'}><button style={{width:'20px'}}>1</button></Link>
                        </li>
                        <li>
                        <Link to={'tab=all&page=2'}><button style={{width:'20px'}}>2</button></Link>
                        </li>
                        <li>
                        <Link to={'tab=all&page=3'}><button style={{width:'20px'}}>3</button></Link>
                        </li>
                        <li>
                        <Link to={'tab=all&page=4'}><button style={{width:'20px'}}>4</button></Link>
                        </li>
                        <li>
                        <Link to={'tab=all&page=5'}><button style={{width:'20px'}}>5</button></Link>
                        </li>
                        <li>
                        <Link to={'tab=all&page=6'}><button style={{width:'20px'}}>6</button></Link>
                        </li>
                        <li>
                        <Link to={'tab=all&page=7'}><button style={{width:'20px'}}>7</button></Link>
                        </li>
                        <li>
                        <Link to={'tab=all&page=8'}><button style={{width:'20px'}}>8</button></Link>
                        </li>
                        <li>
                        <Link to={'tab=all&page=9'}><button style={{width:'20px'}}>9</button></Link>
                        </li>
                        <li>
                        <Link to={'tab=all&page=10'}><button style={{width:'20px'}}>10</button></Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <img src={require("./image/9.png")} alt="" width='900px'/>
                </div>
            </div>
        )
    }
    
}
