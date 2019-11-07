import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class All extends Component {
    
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        let pagesum = this.props.location.search;
        let pages = pagesum.slice(4,7);
        let page = pagesum.slice(12);
        fetch('https://cnodejs.org/api/v1/topics?tab='+pages+'&page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }

    render() {
        //console.log(this.state.data.id);
        return (
            <ul className="lieb">
                {
                    this.state.data.map((item)=>(
                        
                        <li>
                            <div style={{float:"left",width:'30px',height:'40px'}} >
                                <img src={item.author.avatar_url} alt="" width='30px' height='30px'/>
                            </div>
                            <div  dangerouslySetInnerHTML={{__html:item.reply_count}} style={{float:"left"}} className='rq'></div>
                            <div  dangerouslySetInnerHTML={{__html:'<div>/</div>'}} style={{float:"left"}} className='rq'></div>
                            <div  dangerouslySetInnerHTML={{__html:item.visit_count}} style={{float:"left"}} className='rq'></div>
                            <div  dangerouslySetInnerHTML={{__html:'<div>全部</div>'}} style={{float:"left"}} className='wd'></div>
                            <Link to={'/xiangq?id='+item.id}><div  dangerouslySetInnerHTML={{__html:item.title}} style={{float:"left"}} className='tm'></div></Link>
                            
                        </li>
                        
                    ))
                }
            </ul>
        )
    }
}