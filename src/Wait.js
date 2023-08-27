import React,{useState} from 'react';
import Event from './Event';

function Wait(){
    const [state,setState] = useState('Wait');
    var Style={
        backgroundColor:'rgba(125,125,125,0.6)',
        position:'fixed',
        top:'0px',
        left:'0px',
        height:'100%',
        width:'100%',
        textAlign:'center'
    }
    Event.Handle('Wait','Wait',()=>{
        setState('Wait');
    });
    Event.Handle('NoWait','Wait',()=>{
        setState('NoWait');
    })
    if(state=='NoWait')return null;
    return(
        <div style={Style}>
            <img src='./loding.gif'/>
        </div>
    )
}

export default Wait;