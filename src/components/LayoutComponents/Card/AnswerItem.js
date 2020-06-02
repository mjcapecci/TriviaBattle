import React from "react"

const AnswerItem = ({ itemAnswer, isCorrect }) => {
  return (
    <li
      className="answer-item"
      onClick={() =>
        isCorrect ? alert("That's correct") : alert("That's incorrect")
      }
    >
      {itemAnswer}
    </li>
  )
}

export default AnswerItem
