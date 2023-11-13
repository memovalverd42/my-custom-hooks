export interface Todo {
    id: number;
    todo: string;
    done: boolean;
}

export type Actions = 
    | { type: '[TODO] Add Todo', payload: Todo }
    | { type: '[TODO] Delete Todo', payload: number }
    | { type: '[TODO] Toggle Todo', payload: number }