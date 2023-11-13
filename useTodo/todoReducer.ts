import { Actions, Todo } from "../types/todo.types";

export const todoReducer = ( initialState: Todo[], action: Actions ) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];
        
        case '[TODO] Delete Todo':
            return initialState.filter( todo => todo.id != action.payload );

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                if( action.payload === todo.id ){
                    return { ...todo, done: !todo.done }
                }
                return todo
            })
    
        default:
            return initialState;
    }

}