

import React, { useState } from 'react'
import {addTodo , deleteTodo, removeAll} from '../actions/Index'
import {useSelector, useDispatch } from 'react-redux'
import '../components/Todo.css'



function Todo() {
    const [input, setInput] = useState('')
    const list = useSelector((state)=>state.TodoReducers.list)
    const [display , setDisplay] = useState("none")
    const dispatch = useDispatch()
   
    return (
        <div className="main-container">
            <div className="todo-container">
                <h1>Todo's List</h1>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button onClick={()=>dispatch(addTodo(input), setInput(""),setDisplay("block"))}>+</button>
            </div>
            <div className="show-data">
                {
                    list.map((elem)=>(
                        <div className="each-data" key={elem.id}>
                            <h4>{elem.data}</h4>
                            <button onClick={()=>dispatch(deleteTodo(elem.id))}>x</button>
                        </div>
                    ))
                }
                
            </div>
            <div className="remove-data">
                <button style={{display: display}}
                 onClick ={()=>dispatch(removeAll(), setDisplay("none"))}>Remove All</button>
            </div>
        </div>
    )
}

export default Todo
