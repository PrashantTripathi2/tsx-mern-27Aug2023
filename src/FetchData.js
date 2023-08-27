import React ,{useEffect} from "react";
import Event from "./Event";
import Wolrd from "./World";

export default function FetchData(){
    var datafetch = async ({next,back,page,isnext})=>{
        var markeError = false;
        Event.emit('Wait');
        var persons,worlds=[];
        function ErrorHandler(){
            Event.emit('Error');
            Event.emit('NoWait');
            markeError=true;
        }
        var res = await fetch(isnext?next:back).catch((err)=>{
            ErrorHandler();
        });
        var json = await res?.json();
        if(json==null||json==undefined){
            ErrorHandler();
            return;
        }
        persons = json.results;
        next = json.next;
        back = json.previous;
        for(let i=0;i<persons.length;i++){
            var res = await fetch(persons[i].homeworld).catch((err)=>{ErrorHandler();});
            var json = await res.json();
            worlds.push(json);
        }
        page = isnext?page+1:page-1;
        Event.emit('NoWait');
        Event.emit('fetched',{persons,worlds,next,back,page});
    }
    useEffect(()=>{
        datafetch({next:'https://swapi.dev/api/people',back:null,page:-1,isnext:true});
    },[]);
    Event.Handle('fetchMore','FetchData',datafetch);
    return null;
}