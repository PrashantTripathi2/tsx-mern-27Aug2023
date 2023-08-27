import React,{useState} from 'react';
import Event from './Event';

function Error(){
    const [state,setState] = useState(null);
    Event.Handle('Error','Error',()=>{
        setState('Error');
    })
    if(state==null)return null;
    return(
        <div className='Error'>
            <h1>Server Not Respond</h1>
        </div>
    )
}

export default Error;
