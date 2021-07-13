import React, { useState, useEffect } from 'react'

export const GifItem = ({cat}) => {

    const [imgs, setImg] = useState([]);
    let offset = Math.floor(Math.random()*1000);

    useEffect(()=>{
        getGifs(cat);
    }, [cat]);

    const getGifs = async (cat)=>{
        
        console.log(offset);
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(cat)}&limit=8&offset=${offset}&api_key=gRkD5kUUP5gG1YZtyn4jnGoBb25aVn0L`;
        const resp = await fetch( url );
        const {data} = await resp.json();
        if(data.length > 0) {
            const gifs = data.map(gif=>{
                return {
                    id:gif.id,
                    titulo: gif.title,
                    url: gif.images.fixed_width.url
                }
            })

            console.log(data)
            console.log(gifs);
            setImg(gifs);

        } else {
            if(offset===0) return;
            offset = 0;
            getGifs(cat)
        }
    }

    return (
        <div>
            <h3>{cat}</h3>
            <ul className="listaGifs">
                {imgs.map(img=> {
                    return (
                        <div key={img.id} className="card animate__animated animate__fadeIn">
                            <li>
                                <p>{img.titulo}</p>
                                <div className="imagen">
                                    <img src={img.url} alt={img.titulo}></img>
                                </div>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
