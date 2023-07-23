// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggetionDetails, updateSearchInput} = props
  const {suggestion} = suggetionDetails

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggetsion-item">
      <p className="suggestion-word">{suggestion}</p>
      <button type="button" className="btn" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem

