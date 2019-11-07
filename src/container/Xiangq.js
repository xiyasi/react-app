import React, { Component } from 'react'
export default class Huoqu extends Component {
    constructor(){
        super();
        this.state = {
           data: []
        }
    }
    
    componentDidMount(){
        let page = this.props.location.search;
        let pages = page.slice(4);
        console.log(pages);
        fetch('https://cnodejs.org/api/v1/topic/'+pages)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    render() {
        //console.log(this.state.data.content);
        return (
            <div>
                {
                    <div  dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
                }
            </div>
        )
    }
}