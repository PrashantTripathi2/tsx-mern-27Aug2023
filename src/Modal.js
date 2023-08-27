import React ,{useState} from "react";
import Person from "./Person";
import Wolrd from "./World";
import Event from "./Event";

export default function Modal(props){
    const [state,setState] = useState(null);
    var Style={
        backgroundColor:'rgba(125,125,125,0.6)',
        position:'fixed',
        top:'0px',
        left:'0px',
        height:'100%',
        width:'100%',
    }
    Event.Handle('OpenModal','Modal',({person,world})=>{
        setState({person,world});
    });
    Event.Handle('CloseModal','Modal',(arg)=>{
        setState(null);
    })
    if(state==null)return null;
    return(
        <div style={Style} className="Model">
            <div className="closeMarkerHolder">
                <span className='closeMarker' onClick={()=>{Event.emit('CloseModal');}}>X</span>
            </div>
            <div>
                <Person person = {state.person} />
                <hr></hr>
                <Wolrd world={state.world}/>
            </div>
        </div>
    )
}