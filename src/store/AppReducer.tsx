export default (state: any, action: any) => {
    switch (action.type) {
        case "SET_SLIDER_VALUE":
            return {
                ...state,
                sliderValue: action.payload
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