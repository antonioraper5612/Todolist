import React from 'react'

import "../css/list.css"

const List = ({Complete,taskFilter,handleEliminar,handleRestaurar}) => {


    return (
        <div className="main-task" >
         {taskFilter && taskFilter.length > 0 &&  taskFilter.map((tarea,index)=>(
             <div className={tarea.recycle ? "recycle" : tarea.status ? "taskComplete" : "task"} key={index}>
              {tarea.recycle ? 
              <>
                 <h1>{tarea.tarea}</h1>
                 <div className="recycle-button">
                 <button onClick={()=>handleEliminar(tarea.id)} >Eliminar</button>
                 <button onClick={()=>handleRestaurar(tarea.id)} >Restaurar</button>
                 </div>
                </>
                 : 
                 <>
                 <h1>{tarea.tarea}</h1>
                 <button onClick={(e)=>Complete(tarea.id,e)} >{tarea.status ? "Eliminar" : "Completar" }</button>
                </>  }
             </div>
         ))}
        </div>
    )
}

export default List
