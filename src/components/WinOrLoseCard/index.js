// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, size, playgameagain} = props
  const playagain = () => {
    playgameagain(score)
  }
  return (
    <div>
      <nav className="navbar">
        <img
          className="navimage"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
      </nav>
      <div className="main">
        {score < size ? (
          <div className="card">
            <div className="text">
              <h1 className="heading">You Lose</h1>
              <p className="para">Best Score</p>
              <p className="para2">{score}/12</p>
              <button className="playButton" type="button" onClick={playagain}>
                Play Again
              </button>
            </div>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              alt="lose game"
            />
          </div>
        ) : (
          <div className="card">
            <div className="text">
              <h1 className="heading">You Won</h1>
              <p className="para">Best Score</p>
              <p className="para2">{score}/12</p>
              <button className="playButton" type="button" onClick={playagain}>
                Play Again
              </button>
            </div>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              alt="won game"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default WinOrLoseCard
