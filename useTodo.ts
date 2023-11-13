import { useEffect, useReducer } from 'react';
import { Todo } from '../types/todo.types';
import { todoReducer } from '../08-useReducer/todoReducer';

const initialState: Todo[] = []

const init = () => {
    return JSON.parse( localStorage.getItem('todos')! ) || [];
}

export const useTodo = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
    }, [todos])
  
    const handleNewTodo = ( todo: Todo ) => {
        dispatch({
            type: '[TODO] Add Todo',
            payload: todo
        });
    }
  
    const handleDeleteTodo = ( id: number ) => {
        dispatch({
            type: '[TODO] Delete Todo',
            payload: id
        })
    }
  
    const handleToggleTodo = ( id: number ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return ({
        todos,
        totalTodosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    });
    
}
