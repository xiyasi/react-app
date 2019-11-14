import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import { NavBar, Icon, Tabs } from 'antd-mobile';
import tupian1 from '../images/1.png'
import tupian2 from '../images/2.png'
import tupian3 from '../images/3.png'
import tupian4 from '../images/4.png'

export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#33CCFF',color:'#FFFFFF'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'#FFFFFF', marginRight: '16px' }} />,
                    ]}
                    >住吧家居</NavBar>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                    <img
                        src={tupian1}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' ,height:'160px'}}
                        onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        //this.setState({ imgHeight: 'auto' });
                        }}
                    />
                     <img
                        src={tupian2}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' ,height:'160px'}}
                        onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        //this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    </Carousel>
                    </WingBlank>    
                
                <div style={{padding:'10px',backgroundColor:'#DDDDDD'}}>
                    <img src={tupian4} alt="" style={{width:'100%'}}/>
                </div>
                <div style={{paddingTop:'10px',marginLeft:'10px',marginBottom:'10px'}}>
                    热门推荐
                </div >
                <img src={tupian3} alt="" style={{width:'100%',height:'160px'}}/>
                <img src={tupian1} alt="" 
                    style={{width:'100%',height:'160px',marginTop:'10px'}}/>
            </div>
        )
    }
}
