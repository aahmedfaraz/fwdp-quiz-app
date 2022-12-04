// Import services
import { useReducer } from "react";
import axios from 'axios';

// Import files
import globalContext from "./globalContext";
import globalReducer from "./globalReducer";

// Import Types
import { CLEAR_ERROR, GET_ALL_QUESTIONS, INCREMENT_SCORE, MOVE_TO_NEXT_QUESTION, SET_ERROR, SET_LOADING } from "../types";

// Variables
const URL = 'https://the-trivia-api.com/api/questions?categories=general_knowledge,science,sport_and_leisure&limit=10&region=PK&difficulty=easy'

const GlobalState = props => {

    const initialState = {
        allQuestions : [],
        currentQuestion: 0,
        score: 0,
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(globalReducer, initialState);

    const startQuiz = async () => {
        dispatch({
            type: SET_LOADING
        });
        try {
            const response = await axios.get(URL);
            const data = await response.data;

            const filteredData = data.map(questionData => {
                // Make random options
                let options = [...questionData.incorrectAnswers, questionData.correctAnswer];
                const randomIndex = Math.floor(Math.random() * 4);
                let swap = options[randomIndex];
                options[randomIndex] = options[3];
                options[3] = swap;

                // Create new data
                const newData = {
                    category: questionData.category,
                    id: questionData.id,
                    correctAnswer: questionData.correctAnswer,
                    options,
                    question: questionData.question,
                }
                return newData;
            });

            dispatch({
                type: GET_ALL_QUESTIONS,
                payload: filteredData
            })
        } catch (err) {
            console.error('ERROR >> ', err);
            dispatch({
                type: SET_ERROR,
                payload: err.message || 'Server Error: Sorry! Somethig went wrong.'
            })
            setTimeout(() => {
                dispatch({
                    type: CLEAR_ERROR
                })
            }, 10000);
        }
    }

    const incrementScore = () => {
        dispatch({
            type: INCREMENT_SCORE
        })
    }

    const moveToNextQuestion = () => {
        dispatch({
            type: MOVE_TO_NEXT_QUESTION
        })
    }

    return (
        <globalContext.Provider value={{
            allQuestions: state.allQuestions,
            currentQuestion: state.currentQuestion,
            score: state.score,
            loading: state.loading,
            error: state.error,
            startQuiz: startQuiz,
            incrementScore: incrementScore,
            moveToNextQuestion: moveToNextQuestion,
        }}>
            {props.children}
        </globalContext.Provider>
    )
}

export default GlobalState;