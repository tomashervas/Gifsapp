import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifItem } from './components/GifItem';


export const Gifsapp = () => {

    //const cats = ['Humor', 'Miedo', 'Románticos'];
    const [cats, setCat] = useState(['Rick and Morty']);
    /* const addCat = () => {
        setCat([...cats,'Bromas'] );
    } */

    return (
        <div className="contenedor">
            <h2>GIFSAPP</h2>
            <AddCategory setCat={setCat}/>
        
                <ul>
                    {cats.map(c=> <GifItem key={c} cat={c}/>)}
                </ul>

            {/* <button onClick={addCat}>Añadir categoría</button> */}


        </div>
    )
}