import React from 'react';

export default function Wolrd(props){
    var name = props.world.name;
    var terrain = props.world.terrain;
    var climate = props.world.climate;
    var population = props.world.population;
    return(
        <div className='TableHolder'>
            <table>
                <thead>
                    <tr>
                        <th>World:{name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Terrain:{terrain}</td>
                    </tr>
                    <tr>
                        <td>Climate:{climate}</td>
                    </tr>
                    <tr>
                        <td>Population:{population}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}