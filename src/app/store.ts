import { ADD_TODO, UPDATE_TODO, SELECT_TASK, DELETE_TASK, CREATE_MODE, SEARCH_TASK } from './actions';
export interface TaskItem {
    title: string,
    content: string,
    timeStamp: string,
    id: number,
}
export interface IAppState {
    taskItems: TaskItem[],
    selectedTask: TaskItem,
    searchedItems: TaskItem[];
}

export const INITIAL_STATE: IAppState = {
    taskItems: [],
    selectedTask: null,
    searchedItems: []
}

export function rootReducer(state: IAppState, action): IAppState {
    let currentdate = new Date(); 
    let datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " , "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes();
    switch (action.type) {
        case ADD_TODO:
            action.todo.id = state.taskItems.length + 1;  
            action.todo.timeStamp = datetime;    
            return Object.assign({}, state, {
                taskItems: state.taskItems.concat(Object.assign({}, action.todo)),
                searchedItems: state.searchedItems.concat(Object.assign({}, action.todo)),
            })
        case UPDATE_TODO: 
            const otherTasks = state.taskItems.filter(item => (
                item.id !== action.payload.id
            ));
            action.payload.timeStamp = datetime;    
            return Object.assign({}, state, {
                taskItems: otherTasks.concat(action.payload),
                searchedItems: otherTasks.concat(action.payload),
            })
        case DELETE_TASK:
            return Object.assign({}, state, {
                taskItems: state.taskItems.filter(t => t.id !== state.selectedTask.id),
                searchedItems: state.searchedItems.filter(t => t.id !== state.selectedTask.id),
            })
        case SELECT_TASK:
            const selectedItem = state.taskItems.filter(item => (
                item.id === action.payload
            ));
            return Object.assign({}, state, {
                ...state,
                selectedTask: selectedItem[0],
            });
        case CREATE_MODE:
                return Object.assign({}, state, {
                    ...state,
                    selectedTask: null,
                });
        case SEARCH_TASK:
            const newItems = JSON.parse(JSON.stringify(state.taskItems));
            const searchedItems = newItems.filter(item => (
                item.title.includes(action.payload) ||
                item.content.includes(action.payload)
            ));
            return Object.assign({}, state, {
                ...state,
                searchedItems: searchedItems,
            });
    }
    return state;
}