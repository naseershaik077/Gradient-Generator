// Write your code here
// Write your code here

import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, isActive, clickGradientDirectionItem} = props
  const {value, displayText} = gradientDirectionDetails

  const onClickGradientDirectionItem = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={onClickGradientDirectionItem}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem