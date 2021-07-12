import React, { useState } from 'react'

export const AddCategory = ({setCat}) => {

    const [inputValue, setValue] = useState('');

    const handleText = (e)=>{
        setValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setCat(cats => [inputValue, ...cats]);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleText}></input>
        </form>
    )
}
