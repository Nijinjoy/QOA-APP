import { SET_LANGUAGE } from "../constants";

export const storeLanguage = (language) => {
    console.log("translation===>", language)
    return async (dispatch) => {
        dispatch({
            type: SET_LANGUAGE,
            payload: language
        })
    }
}