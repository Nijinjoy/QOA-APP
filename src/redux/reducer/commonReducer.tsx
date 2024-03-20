import { SET_LANGUAGE } from "../constants";

const initialState = {
    storeLanguage: {}
}

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LANGUAGE":
            console.log("action.payload===>", action.payload);
            return {
                ...state,
                storeLanguage: action.payload
            }
        default:
            return state
    }
}
export default commonReducer
