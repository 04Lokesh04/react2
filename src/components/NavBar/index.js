// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <nav className="navElements">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
      />
      <h1 className="heading">EmojiGame</h1>
      <div className="text">
        <p className="para">Score: {score}</p>
        <p className="para">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
