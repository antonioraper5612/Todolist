import React, { useState, useEffect } from 'react';


import './App.css';
import TodoList from "./component/TodoList"

function App() {
    const [task, setTask] = useState([{ id: 1, tarea: "Lavar la moto", status: false, recycle: false }, {
        id: 2,
        tarea: "Ir a trabajar",
        status: false,
        recycle: false
    }])
    const [items, setItems] = useState("")
    const [taskFilter, settaskFilter] = useState([])
    const [claseactive, setClaseActive] = useState("ALL")

    const random_id = () => {
        let id = Math.floor(Math.random() * 10000)
        return id
    }

    const validateItems = (items) => {
        const result = task.some(tarea => (
            tarea.tarea === items
        ))
        return result
    }

    const transformText = (text) => {
        let Palabra;
        let resto;
        Palabra = text.charAt(0).toUpperCase();
        resto = text.slice(1).toLowerCase();
        Palabra += resto
        return Palabra
    }

    const add = () => {
        if (items !== "") {
            const title = transformText(items)
            const valid = validateItems(title)
            if (!valid) {
                const id = random_id()
                setTask(
                    [
                        ...task, {
                            id: id,
                            tarea: title,
                            status: false,
                            recycle: false
                        }
                    ]
                )
                setItems("")
            } else {
                alert("YA EXISTE ESTA TAREA")
            }

        }

    }
    const Complete = (id, e) => {
        const event = e.target.innerText
        if (event === "Completar") {
            setTask(
                task.map(tarea => (
                    tarea.id === id ? {...tarea, status: !tarea.status, } : tarea
                ))
            )
        } else {
            setTask(
                task.map(tarea => (
                    tarea.id === id ? {...tarea, status: true, recycle: true } : tarea
                ))
            )
        }
    }

    const show = (e) => {
        const event = e.target.value
        if (event === "ALL") {
            settaskFilter(
                task.filter(tarea => (
                    tarea.recycle === false
                ))
            )
            setClaseActive("ALL")

        } else if (event === "Complete") {
            settaskFilter(
                task.filter(tarea => (
                    tarea.status === true && tarea.recycle === false
                ))
            )
            setClaseActive("Complete")

        } else if (event === "Incomplete") {
            settaskFilter(
                task.filter(tarea => (
                    tarea.status === false
                ))
            )
            setClaseActive("Incomplete")

        } else if (event === "Recycle") {
            settaskFilter(
                task.filter(tarea => (
                    tarea.recycle === true
                ))
            )
            setClaseActive("Recycle")
        }

    }

    const handleRestaurar = (id) => {
        setTask(
            task.map(tarea => (
                tarea.id === id ? {...tarea, status: false, recycle: false } : tarea
            ))
        )
    }

    const handleEliminar = (id) => {
        setTask(
            task.filter(tarea => (
                tarea.id !== id
            ))
        )
    }

    useEffect(() => {
        if (claseactive === "ALL") {
            settaskFilter(
                task.filter(tarea => (
                    tarea.recycle === false
                ))
            )
        } else if (claseactive === "Complete") {
            settaskFilter(
                task.filter(tarea => (
                    tarea.status === true && tarea.recycle === false
                ))
            )

        } else if (claseactive === "Incomplete") {
            settaskFilter(
                task.filter(tarea => (
                    tarea.status === false
                ))
            )

        } else if (claseactive === "Recycle") {
            settaskFilter(
                task.filter(tarea => (
                    tarea.recycle === true
                ))
            )
        }
    }, [task, claseactive])

    return (


        <
        TodoList task = { task }
        taskFilter = { taskFilter }
        add = { add }
        setItems = { setItems }
        Complete = { Complete }
        show = { show }
        handleEliminar = { handleEliminar }
        handleRestaurar = { handleRestaurar }
        claseactive = { claseactive }
        items = { items }
        />

    );
}

export default App;