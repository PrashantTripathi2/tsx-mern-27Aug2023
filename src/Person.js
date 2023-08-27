import React from 'react';

export default function Person(props){
    var person = props.person;
    var data ={
        name:person.name,
        height:Number(person.height/100),
        mass:Number(person.mass),
        created:()=>{
           var a = person.created.split('T')[0].split('-');
           var b = a[2]+'-'+a[1]+'-'+a[0];
           return b;
        },
        films:person.films.length,
        birth:person.birth_year

    }
    return(
        <div className='TableHolder'>
            <table>
                <thead>
                    <tr>
                        <th>Name:{data.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>    
                        <td>Height:{data.height}</td>
                    </tr>
                    <tr>
                        <td>Mass:{data.mass}</td>
                    </tr>
                    <tr>
                        <td>Created:{data.created()}</td>
                    </tr>
                    <tr>
                        <td>Flims:{data.films}</td>
                    </tr>
                    <tr>
                        <td>Birth:{data.birth}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}