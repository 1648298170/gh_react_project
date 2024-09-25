import {ADD_TODO, TOGGLE_TODO} from '../actions/actionsType'
//初始化数据
const initialState = {
    allIds: [],
    byIds: {}
}
//
export default function (state = initialState, action) {
    console.log(state, action);
    switch (action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload;
            console.log(id, content)
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,//内容
                        completed: false//默认未完成
                    }
                }
            }
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;//获取id
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],//获取id对应的对象
                        completed: !state.byIds[id].completed//取反
                    }
                }
            }
        }
        default:
            return state;
    }

}