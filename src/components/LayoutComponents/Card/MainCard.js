import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { getQuestion } from "../../../state/app"

import AnswerItem from "./AnswerItem"

import { StyledMainCard } from "../../StyleComponents/card"

const MainCard = () => {
  const result = useSelector(state => state.app.currentResult)
  const question = useSelector(state => state.app.currentQuestion)
  const loading = useSelector(state => state.app.appLoading)
  const dispatch = useDispatch()

  return (
    <StyledMainCard>
      <h3>Question</h3>
      <div className="answer-content">
        <button
          onClick={() => {
            dispatch(getQuestion(1, 11, "medium", "multiple"))
          }}
        >
          CLICK ME
        </button>
        <ul>
          {/* <li className="answer-item">Answer 1</li>
          <li className="answer-item">Answer 2</li>
          <li className="answer-item">Answer 3</li>
          <li className="answer-item">Answer 4</li> */}
        </ul>
      </div>
    </StyledMainCard>
  )
}

export default MainCard
