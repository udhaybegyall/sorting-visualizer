import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

interface IState {
    sliderValue?: number,
    issorting?: boolean,
    timetaken?: any,
    algo: string,
    delay: number,
    setSliderValue?: (value: number | number[]) => void
    setIsSorting?: (value: boolean) => void
    setTimeTaken?: (value: any) => void
    setAlgo?: (value: string) => void
    setDelay?: (value: number) => void
}

const initialState: IState = {
    sliderValue: 50,
    issorting: false,
    timetaken: 0,
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

    const setIsSorting = (value: boolean) => {
        dispatch({
            type: "SET_IS_SORTING",
            payload: value
        });
    }

    const setTimeTaken = (value: any) => {
        dispatch({
            type: "SET_TIME_TAKEN",
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
            issorting: state.issorting,
            timetaken: state.timetaken,
            algo: state.algo,
            delay: state.delay,
            setSliderValue,
            setIsSorting,
            setTimeTaken,
            setAlgo,
            setDelay
        }}>
            {children}
        </GlobalState.Provider>
    );
};





