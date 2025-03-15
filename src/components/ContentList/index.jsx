import { List } from './styles';
import PropTypes from 'prop-types';

const ContentList = ({children}) => {
  return (
    <List>{children}</List>
  )
}

ContentList.propTypes = {
  children: PropTypes.node, 
};

export default ContentList;