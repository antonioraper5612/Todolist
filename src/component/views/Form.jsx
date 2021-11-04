import React from 'react'

import "../css/Form.css"

const Form = ({add,setItems,items}) => {
    return (
        <div className="main-form">
            <input type="text" onChange={(e)=>setItems(e.target.value)} value={items} placeholder="Add a todo" required={true}/>
            <button onClick={add}>Add Todo</button>
        </div>
    )
}

export default Form
