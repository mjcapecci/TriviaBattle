import React, { useEffect, useState } from "react"
import { AllHtmlEntities } from "html-entities"

import { useSelector, useDispatch } from "react-redux"
import { getQuestion } from "../../../state/app"

import AnswerItem from "./AnswerItem"

import { StyledMainCard } from "../../StyleComponents/card"

const MainCard = () => {
  const result = useSelector(state => state.app.currentResult)
  const answers = useSelector(state => state.app.answers)
  const loading = useSelector(state => state.app.appLoading)
  const dispatch = useDispatch()

  let keyCounter = 0

  return !loading ? (
    <StyledMainCard>
      <h3>
        {result
          ? AllHtmlEntities.decode(result.results[0].question)
          : "Question goes here"}
      </h3>
      <div className="answer-content">
        <button
          onClick={() => {
            dispatch(getQuestion(1, 11, "medium", "multiple"))
          }}
        >
          CLICK ME
        </button>
        <ul>
          {answers.map(answer => (
            <AnswerItem
              itemAnswer={answer.answer}
              isCorrect={answer.isCorrect}
              key={keyCounter++}
            />
          ))}
        </ul>
      </div>
    </StyledMainCard>
  ) : (
    <h1>Loading</h1>
  )
}

export default MainCard
