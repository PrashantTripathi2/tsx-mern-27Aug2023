import React from "react";
import Event from "./Event";
import CardView from "./CardView";
import Wait from "./Wait";
import Error from "./Error";
import Modal from "./Modal";
import FetchData from "./FetchData";

export default function App(){
    return (
        <div style={{
            height:'100%',
            width:'100%'
        }}>
            <Wait/>
            <Error/>
            <Modal/>
            <CardView/>
            <FetchData/>
        </div>
    )
}