import {Component} from 'react'

import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  GradientGeneratorHeading,
  GradientGeneratorParagraph,
  GradientDirectionList,
  GradientGeneratorParagraphColor,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    activeGradientDirection: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  generateGradient = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  render() {
    const {
      fromColorInput,
      toColorInput,
      gradientValue,
      activeGradientDirection,
    } = this.state
    return (
      <GradientGeneratorContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <ResponsiveContainer>
          <GradientGeneratorHeading>
            Generate a CSS color Gradient
          </GradientGeneratorHeading>
          <GradientGeneratorParagraph>
            Choose Direction
          </GradientGeneratorParagraph>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                gradientDirectionDetails={eachItem}
                key={eachItem.directionId}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
                isActive={activeGradientDirection === eachItem.value}
              />
            ))}
          </GradientDirectionList>

          <GradientGeneratorParagraphColor>
            Pick the Colors
          </GradientGeneratorParagraphColor>
          <ColorPickerContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{fromColorInput}</ColorValue>
              <CustomInput
                type="color"
                onChange={this.onChangeFromColor}
                value={fromColorInput}
              />
            </CustomInputAndColorContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{toColorInput}</ColorValue>
              <CustomInput
                type="color"
                onChange={this.onChangeToColor}
                value={toColorInput}
              />
            </CustomInputAndColorContainer>
          </ColorPickerContainer>
          <GenerateButton type="button" onClick={this.generateGradient}>
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
