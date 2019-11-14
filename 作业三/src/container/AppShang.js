import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import tupian11 from '../images/11.png'
import tupian2 from '../images/2.png'
import tupian1 from '../images/1.png'
import tupian10 from '../images/10.png'

export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#33CCFF',color:'#FFFFFF'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'#FFFFFF', marginRight: '16px' }} />,
                    ]}
                    >商城</NavBar>
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
                
                <div>
                    <img src={tupian11} alt="" style={{width:'100%',paddingTop:'10px',backgroundColor:'#FFFFFF'}}/>
                </div>
                <div>
                    <img src={tupian10} alt="" style={{width:'100%',padding:'10px',backgroundColor:'#DDDDDD'}}/>
                    <img src={tupian10} alt="" style={{width:'100%',padding:'10px',backgroundColor:'#DDDDDD'}}/>
                    <img src={tupian10} alt="" style={{width:'100%',padding:'10px',backgroundColor:'#DDDDDD'}}/>
                </div>
            </div>
        )
    }
}
