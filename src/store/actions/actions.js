import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionsType";

let nextTodoId = 0;
//新增一条todo
export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: nextTodoId++,
        content,
    },
})

//切换todo的完成状态
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: {
        id,
    },
})

//设置过滤条件
export const setFilter = filter => ({
    type: SET_FILTER,
    payload: {
        filter,
    },
})