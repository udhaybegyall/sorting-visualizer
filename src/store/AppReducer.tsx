// define action types
type Action = {
    type: string,
    payload: any
}

export default (state: any, action: Action) => {
    switch (action.type) {
        case "SET_SLIDER_VALUE":
            return {
                ...state,
                sliderValue: action.payload
            }
        case "SET_IS_SORTING":
            return {
                ...state,
                issorting: action.payload
            }
        case "SET_TIME_TAKEN":
            return {
                ...state,
                timetaken: action.payload
            }
        case "SET_ALGO":
            return {
                ...state,
                algo: action.payload
            }
        case "SET_DELAY":
            return {
                ...state,
                delay: action.payload
            }
        default:
            return state;
    }
}