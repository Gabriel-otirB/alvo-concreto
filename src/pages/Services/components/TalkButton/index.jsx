import PropTypes from 'prop-types';
import { TeamButton } from './styles'

const TalkButton = ({ buttonTitle }) => {
  return (
    <TeamButton>
      <a href="/contact">{buttonTitle}</a>
    </TeamButton>
  )
}

TalkButton.propTypes = {
  buttonTitle: PropTypes.node, 
};

export default TalkButton;