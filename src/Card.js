import React ,{useState,useEffect} from "react";
import UniqueColor from "./UniqueColor";
import Event from "./Event";

export default function Card(props){
    var a=0;
    const [src,setSrc] = useState(null);
    useEffect(()=>{
        fetch('https://picsum.photos/100').then((res)=>{
            return res.blob();
        }).then((blob)=>{
            setSrc(URL.createObjectURL(blob));
        });
    },[]);
    var person = props.person;
    var world = props.world;
    var color;
    if(person.species.length==0){
        color = UniqueColor[0];
    }
    else{
        let a = person.species[0].split('/');
        let num = Number(a[a.length-2]);
        color = UniqueColor[num];
    }
    var Style={
        backgroundColor:color
    }
    return(
        <div onClick={()=>{
            Event.emit('OpenModal',{person,world});
        }} style={Style} className="Card">
            <div>{props.person.name}</div>
            <div>
                <img src={src}/>
            </div>
        </div>
    )
}