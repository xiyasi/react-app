import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Good extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics/?tab=good')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }

    render() {
        console.log(this.state.data);
        return (
            <ul className="lieb">
                {
                    this.state.data.map((item)=>(
                        <li>
                            <div style={{float:"left",width:'30px',height:'40px'}}>
                                <img src={item.author.avatar_url} alt="" width='30px' height='30px'/>
                            </div>
                            <div  dangerouslySetInnerHTML={{__html:item.reply_count}} style={{float:"left"}} className='rq'></div>
                            <div  dangerouslySetInnerHTML={{__html:'<div>/</div>'}} style={{float:"left"}} className='rq'></div>
                            <div  dangerouslySetInnerHTML={{__html:item.visit_count}} style={{float:"left"}} className='rq'></div>
                            <div  dangerouslySetInnerHTML={{__html:'<div>精华</div>'}} style={{float:"left"}} className='wd'></div>
                            <Link to={'/xiangq?id='+item.id}><div  dangerouslySetInnerHTML={{__html:item.title}} style={{float:"left"}} className='tm'></div></Link>
                        </li>
                    ))
                    
                }
            </ul>
        )
    }
}
