import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

interface IState {
    sliderValue?: number,
    algo: string,
    delay: number,
    setSliderValue?: (value: number | number[]) => void
    setAlgo?: (value: string) => void
    setDelay?: (value: number) => void
}

const initialState: IState = {
    sliderValue: 50,
    algo: "",
    delay: 1,
};

export const GlobalState = createContext(initialState);

export const GlobalProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const setSliderValue = (value: number | number[]) => {
        dispatch({
            type: "SET_SLIDER_VALUE",
            payload: value
        });
    }

    const setAlgo = (value: string) => {
        dispatch({
            type: "SET_ALGO",
            payload: value
        });
    }

    const setDelay = (value: number) => {
        dispatch({
            type: "SET_DELAY",
            payload: value
        });
    }

    return (
        <GlobalState.Provider value={{
            sliderValue: state.sliderValue,
            algo: state.algo,
            delay: state.delay,
            setSliderValue,
            setAlgo,
            setDelay
        }}>
            {children}
        </GlobalState.Provider>
    );
};





