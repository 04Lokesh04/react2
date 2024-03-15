/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import './index.css'

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, clickedEmojilist: []}

  playgameagain = score => {
    const {topScore} = this.state

    if (score > topScore) {
      this.setState({score: 0, topScore: score, clickedEmojilist: []})
    } else {
      this.setState(prevState => ({
        score: 0,
        topScore: prevState.topScore,
        clickedEmojilist: [],
      }))
    }
  }

  finishGameAndSetTopScore = clickedEmojilistSize => {
    const {topScore} = this.state
    const {emojisList} = this.props
    return (
      <WinOrLoseCard
        score={clickedEmojilistSize}
        size={emojisList.length}
        topScore={topScore}
        playgameagain={this.playgameagain}
      />
    )
  }

  clickedEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojilist} = this.state
    const clickedEmojilistSize = clickedEmojilist.length

    if (clickedEmojilist.includes(id)) {
      this.finishGameAndSetTopScore(clickedEmojilistSize)
    } else {
      if (emojisList.length === clickedEmojilistSize) {
        this.finishGameAndSetTopScore(emojisList.length)
      }

      this.setState(prevState => ({
        clickedEmojilist: [...prevState.clickedEmojilist, id],
        score: prevState.score + 1,
      }))
    }
  }

  render() {
    const {emojisList} = this.props
    const {topScore, score} = this.state
    const shuffledList = emojisList.sort(() => Math.random() - 0.5)
    return (
      <div>
        <NavBar score={score} topScore={topScore} />
        <div className="main">
          <ul className="card">
            {shuffledList.map(each => (
              <EmojiCard
                details={each}
                key={each.id}
                clickedEmoji={this.clickedEmoji}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
