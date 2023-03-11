import { DECREMENT, INCREMENT } from "./actionTypes";
import initalState from "./initalState";

const counterReducer = (state = initalState, action: any) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.payload
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - action.payload
            }
        case action.payload > state.count:
            return {
                ...state,
                count: 0
            }
        default:
            return state;
    }
}

export default counterReducer;