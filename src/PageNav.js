import React from 'react';
import Event from './Event';

export default function PageNav(props){
    var Style={
        display:'none'
    }
    return(
        <div className='PageNav'>
            <span style={props.back==null?Style:null} onClick={()=>{
                Event.emit('fetchMore',{next:props.next,back:props.back,page:props.page,isnext:false});
            }}>{"<"}</span>
            <span>{props.page}</span>
            <span style={props.next==null?Style:null} onClick={()=>{
                Event.emit('fetchMore',{next:props.next,back:props.back,page:props.page,isnext:true});
            }}>{">"}</span>
        </div>
    );
}