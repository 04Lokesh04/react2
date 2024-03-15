// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, clickedEmoji} = props
  const {id, emojiName, emojiUrl} = details
  const clickEmoji = () => {
    clickedEmoji(id)
  }
  return (
    <li className="list">
      <button className="buttonEmoji" type="button" onClick={clickEmoji}>
        <img className="image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
