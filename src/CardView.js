import React ,{useState} from "react";
import Card from "./Card";
import PageNav from "./PageNav";
import Event from "./Event";

export default function CardView(){
    const [state,setState] = useState(null);
    Event.Handle('fetched','CardView',({persons,worlds,page,next,back})=>{
        setState({persons,worlds,page,next,back});
    });
    if(state==null)return null;
    var i=-1;
    var Cards = state.persons.map((e)=>{
        i+=1;
        return <Card person={state.persons[i]} key={i} index={i} world={state.worlds[i]} />
    })
    return(
        <div className="CardView">
            {Cards}
            <PageNav next={state.next} back={state.back} page={state.page} />
        </div>
    )
}
