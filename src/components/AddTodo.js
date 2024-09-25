import { connect } from "react-redux";
import { addTodo } from "../store/actions/actions";
import {useState} from "react";


function AddTodo({ addTodo }) {
    let [input, setInput] = useState("");

    //更新input的值
    const updateInput = input => setInput(input);

    //添加todo
    const handleAddTodo = () => {
        addTodo(input);
        setInput("");
    }

    return (
        <div className="add-todo">
            <input onChange={(e)=>updateInput(e.target.value)} value={input}></input>
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    )
}

//将addTodo函数映射到props上
export default connect(null, { addTodo })(AddTodo);