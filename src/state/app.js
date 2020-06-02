import axios from "axios"

const initialState = {
  currentResult: {},
  currentQuestion: {},
  appLoading: false,
  appError: null,
}

// const TOGGLE_DRAWER = "TOGGLE_DRAWER"
// export const toggleDrawer = open => ({ type: TOGGLE_DRAWER, payload: open })

const CURRENT_RESULT = "CURRENT_RESULT"
const CURRENT_QUESTION = "CURRENT_QUESTION"
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
    dispatch({
      type: CURRENT_RESULT,
      payload: res.data,
    })
    dispatch(processQuestion(res))
  } catch (error) {
    dispatch({
      type: APP_ERROR,
      payload: res.response.data,
    })
  }
}

export const processQuestion = res => dispatch => {
  const questionInfo = res.data.results[0]
  dispatch({
    type: CURRENT_QUESTION,
    payload: questionInfo,
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
    case CURRENT_QUESTION:
      return { ...state, currentQuestion: payload, appLoading: false }
    case APP_LOADING:
      return { ...state, appLoading: true }
    case APP_ERROR:
      return { ...state, appError: payload, appLoading: false }
    default:
      return state
  }
}
