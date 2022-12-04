import { CLEAR_ERROR, GET_ALL_QUESTIONS, INCREMENT_SCORE, MOVE_TO_NEXT_QUESTION, SET_ERROR, SET_LOADING } from "../types";

const globalReducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING: 
            return {
                ...state,
                error: null,
                loading: true
            }
        case GET_ALL_QUESTIONS: 
            return {
                ...state,
                allQuestions: action.payload,
                loading: false
            }
        case SET_ERROR: 
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case CLEAR_ERROR: 
            return {
                ...state,
                error: null,
            }
        case INCREMENT_SCORE: 
            return {
                ...state,
                score: state.score + 1,
            }
        case MOVE_TO_NEXT_QUESTION: 
            if (state.currentQuestion == 9) {
                // End Quiz
                return {
                    ...state,
                    allQuestions : [],
                    currentQuestion: 0,
                    score: 0,
                    loading: false,
                    error: null
                }
            } else {
                // Carry on
                return {
                    ...state,
                    currentQuestion: state.currentQuestion + 1
                }
            }
        default:
            return {
                ...state,
            }
    }
}

export default globalReducer;