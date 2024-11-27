import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import ButtonItem from '../ButtonItem'

import GameResultView from '../GameResultView'

import {
  MainContainer,
  ScoreContainer,
  ItemsContainer,
  Heading,
  ScoreCardContainer,
  ParagraphScore,
  ScoreSpan,
  ItemsImagesContainer,
  PopUpContainer,
  PopUpButton,
  RulesImageContainer,
  RulesImage,
  CloseLineContainer,
  CloseLineButton,
} from './styledComponents'

class RockPaperScissorsGame extends Component {
  state = {
    showResult: false,

    myChoice: {},

    apponentChoice: {},

    score: 0,

    resultMessage: '',
  }

  onClickPlayAgain = () => this.setState({showResult: false})

  onGetResult = () => {
    const {myChoice, apponentChoice, resultMessage} = this.state

    return (
      <GameResultView
        myChoice={myChoice}
        apponentChoice={apponentChoice}
        resultMessage={resultMessage}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onGetButtonId = (id, image) => {
    const {choicesList} = this.props

    const number = Math.floor(Math.random() * choicesList.length)

    if (choicesList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,

        myChoice: [id, image],

        apponentChoice: choicesList[number],

        score: prevState.score - 1,

        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,

        myChoice: [id, image],

        apponentChoice: choicesList[number],

        score: prevState.score + 1,

        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,

        myChoice: [id, image],

        apponentChoice: choicesList[number],

        score: prevState.score + 1,

        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,

        myChoice: [id, image],

        apponentChoice: choicesList[number],

        score: prevState.score - 1,

        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,

        myChoice: [id, image],

        apponentChoice: choicesList[number],

        score: prevState.score - 1,

        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,

        myChoice: [id, image],

        apponentChoice: choicesList[number],

        score: prevState.score + 1,

        resultMessage: 'YOU WON',
      }))
    } else {
      this.setState({
        showResult: true,

        myChoice: [id, image],

        apponentChoice: choicesList[number],

        resultMessage: 'IT IS DRAW',
      })
    }
  }

  onGetImages = () => {
    const {choicesList} = this.props

    return (
      <ItemsImagesContainer>
        {choicesList.map(eachItem => (
          <ButtonItem
            key={eachItem.id}
            buttonDetails={eachItem}
            onGetId={this.onGetButtonId}
          />
        ))}
      </ItemsImagesContainer>
    )
  }

  render() {
    const {showResult, score} = this.state

    return (
      <MainContainer>
        <ScoreContainer>
          <ItemsContainer>
            <Heading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </Heading>
          </ItemsContainer>

          <ScoreCardContainer>
            <ParagraphScore>Score</ParagraphScore>

            <ScoreSpan>{score} </ScoreSpan>
          </ScoreCardContainer>
        </ScoreContainer>

        {showResult ? this.onGetResult() : this.onGetImages()}

        <PopUpContainer>
          <Popup modal trigger={<PopUpButton type="button">Rules</PopUpButton>}>
            {close => (
              <RulesImageContainer>
                <CloseLineContainer>
                  <CloseLineButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseLineButton>
                </CloseLineContainer>
                <RulesImage
                  alt="rules"
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                />
              </RulesImageContainer>
            )}
          </Popup>
        </PopUpContainer>
      </MainContainer>
    )
  }
}

export default RockPaperScissorsGame
