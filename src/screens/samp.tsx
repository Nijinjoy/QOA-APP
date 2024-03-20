import { LOADER, tokens } from "../actions/Action";

const initialState = {
    getCourse: [],
    getRelatedCourse: [],
    getCurrentUserDetails: [],
    loading: false,
    storeLanguage: {}
}

const Reducers = (state = initialState, action) => {
    switch (action.type) {

        case LOADER:
            //console.log("action.payload", action.payload);
            return {
                ...state,
                loading: action.payload
            }
        case "LANGUAGE":
            return {
                ...state,
                LANGUAGE: action.LANGUAGE
            }

        case tokens:
            return {
                ...state,
                handleToken: action.handleToken
            }

        case "courseData":
            return {
                ...state,
                courseData: action.courseData
            }

        case "relatedCourse":
            return {
                ...state,
                relatedCourse: action.relatedCourse
            }
        case "currentUser":
            //console.log("action.currentUser", action.currentUser)
            return {
                ...state,
                currentUser: action.currentUser
            }

        default:
            return state;
    }
}
export default Reducers;


import { Api } from '../../screens/Api';
import { token } from '../../screens/token';

export const LOADER = "LOADER";
export const tokens = "token";


export const handleLoader = (loading) => {
    return async dispatch => {
        dispatch({
            type: LOADER,
            payload: loading
        })
    }
}

export const handleToken = (getToken) => {
    return async dispatch => {
        dispatch({
            type: tokens,
            handleToken: getToken
        })
    }
}

export const storeLanguage = (language) => {
    //console.log("j", language)
    return async dispatch => {
        dispatch({
            type: "LANGUAGE",
            LANGUAGE: language
        })
    }
}

export const getCourse = (id) => {
    return async dispatch => {
        const access_token = token;
        dispatch(handleLoader(true))
        await fetch(
            `${Api}/course?` +
            new URLSearchParams({
                id: id,
                lang: 'en',
            }), {
            method: 'GET',
            headers: {
                Accept: 'application/vnd.api+json',
                authorization: `Bearer ${access_token}`,
            },
        }).then(response => response.json())
            .then(data => {
                //console.log("sucess", data.data);
                dispatch({
                    type: 'courseData',
                    courseData: data.data,
                });
                dispatch(
                    handleLoader(false)
                )
            }).catch(error => console.log('Error..', error));
    };
};


export const getRelatedCourse = (courseId, categoryId) => {
    return async dispatch => {
        await fetch(
            `${Api}/related-courses?` +
            new URLSearchParams({
                lang: 'en',
                cat_id: categoryId,
                page: "1",
                course_id: courseId,
            }), {
            method: 'GET',
            headers: {
                Accept: 'application/vnd.api+json',
            },
        },).then(response => response.json())
            .then(data => {
                //console.log("relatedcourse", data);
                dispatch({
                    type: 'relatedCourse',
                    relatedCourse: JSON.stringify(data?.data),
                });
            }).catch(error => console.log('Error..', error));
    };
};


export const getCurrentUserDetails = (token) => {
    return async dispatch => {
        await fetch(
            `${Api}/current-user`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                authorization: `Bearer ${token}`
            },
        },).then(response => response.json())
            .then(data => {
                //console.log(data.data.user)
                dispatch({
                    type: "currentUser",
                    currentUser: data?.data
                })
            }).catch((err) => console.log("err", err))
    }
}