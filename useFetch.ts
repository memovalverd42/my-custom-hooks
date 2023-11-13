import { useEffect, useState } from "react";

interface state<T> {
    data: T | null;
    isLoading: boolean,
    hasError: any
}

export const useFetch = <T>( url: string ) => {

    const [state, setState] = useState<state<T>>({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getFecth = async() => {

        setState({
            ...state,
            isLoading: true,
            hasError: null
        });

        const resp = await fetch(url);
        const data: T = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null
        });

    }

    useEffect(() => {
      getFecth();
    }, [url])
    
    return {
        data:       state.data,
        isLoading:  state.isLoading,
        hasError:   state.hasError,
    };

}
