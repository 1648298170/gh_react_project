import { VISIBILITY_FILTERS } from "../constants";

//获取
export const getTodosState = store => store.todos;

export const getTodoList = store => 
    getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) => 
    getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

export const getTodos = store => 
    getTodoList(store).map(id => getTodoById(store, id));

//过滤
export const getTodosByVisibilityFilter = (store, filter) => {
    const allTodos = getTodos(store);
    switch (filter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETED:
            return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL: 
        default:
            return allTodos;
    }
}