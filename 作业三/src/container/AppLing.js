import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import tupian5 from '../images/5.png'
import tupian6 from '../images/6.png'
import tupian7 from '../images/7.png'
import tupian8 from '../images/8.png'
const tabs2 = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
  ];
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#33CCFF',color:'#FFFFFF'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'#FFFFFF', marginRight: '16px' }} />,
                    ]}
                    >灵感</NavBar>
                    <Tabs tabs={tabs2}
                initialPage={1}
                tabBarUnderlineStyle={{border:'2px solid #33CCFF'}}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#DDDDDD' }}>
                
                <ul>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian5} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian6} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian7} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian8} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian5} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian6} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian7} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian8} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                </ul>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#DDDDDD' }}>
                
                <ul>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian5} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian6} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian7} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian8} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian5} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian6} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian7} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian8} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                </ul>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#DDDDDD' }}>
                
                <ul>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian5} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian6} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian7} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian8} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian5} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian6} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian7} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian8} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                </ul>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#DDDDDD' }}>
                
                <ul>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian5} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian6} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian7} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian8} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian5} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian6} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian7} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian8} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                </ul>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#DDDDDD' }}>
                
                <ul>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian5} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian6} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian7} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian8} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian5} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian6} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                    <li style={{listStyle:'none',marginLeft:'-45px'}}>
                        <img src={tupian7} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                        <img src={tupian8} alt="" style={{width:'50%',padding:'5px',height:'165px'}}/>
                    </li>
                </ul>
                </div>
                </Tabs>
            </div>
        )
    }
}
