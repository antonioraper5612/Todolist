import React from 'react'

import "./css/TodoList.css"
import Form from "./views/Form"
import List from "./views/List"

const TodoList = ({task,claseactive,add,items,setItems,Complete,show,taskFilter,handleEliminar,handleRestaurar}) => {
    return (
        <>
       <h1 className="Todo-title">What's the plan for today ?</h1>
        <div className="main-todo">
            <Form add={add} setItems={setItems} items={items}/>
            <List Complete={Complete} taskFilter={taskFilter} handleEliminar={handleEliminar} handleRestaurar={handleRestaurar}/>
            <div className="todo-button">
             <button className= {`${claseactive === "ALL" ? "selecionActiva" :"Menu"} Menu`} onClick={show} value="ALL">ALL</button>
            <button  className={`${claseactive === "Complete" ? "selecionActiva" :"Menu"} Menu`} onClick={show} value="Complete">Complete</button>
            <button className={`${claseactive === "Incomplete" ? "selecionActiva" :"Menu"} Menu`} onClick={show} value="Incomplete">Incomplete</button>
            <button  className={`${claseactive === "Recycle" ? "selecionActiva" :"Menu"} Menu`} onClick={show} value="Recycle">Recycle</button>
        </div>
        </div>
        </>
    )
}

export default TodoList
