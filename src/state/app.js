import axios from "axios"

const initialState = {
  currentResult: null,
  answers: [],
  appLoading: false,
  appError: null,
}

const CURRENT_RESULT = "CURRENT_RESULT"
const ANSWERS = "ANSWERS"
const APP_LOADING = "APP_LOADING"
const APP_ERROR = "APP_ERROR"

export const getQuestion = (
  amount,
  category,
  difficulty,
  type
) => async dispatch => {
  dispatch(appLoading())
  const res = await axios.get(
    `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
  )
  try {
    dispatch(populateAnswers(res.data))
    dispatch({
      type: CURRENT_RESULT,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: APP_ERROR,
      payload: res.response.data,
    })
  }
}

export const populateAnswers = result => dispatch => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  let newAnswers = []
  result.results[0].incorrect_answers.map(answer => {
    newAnswers.push({ answer, isCorrect: false })
  })
  newAnswers.splice(getRandomInt(4), 0, {
    answer: result.results[0].correct_answer,
    isCorrect: true,
  })
  dispatch({
    type: ANSWERS,
    payload: newAnswers,
  })
}

export const appLoading = () => dispatch => {
  dispatch({ type: APP_LOADING })
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case CURRENT_RESULT:
      return { ...state, currentResult: payload, appLoading: false }
    case ANSWERS:
      return { ...state, answers: payload }
    case APP_LOADING:
      return { ...state, appLoading: true }
    case APP_ERROR:
      return { ...state, appError: payload, appLoading: false }
    default:
      return state
  }
}
