import { Box } from './styles.js'
import PropTypes from 'prop-types';

const ServiceBox = ({ titleService, serviceDesc, icon, route }) => {

  return (
    <Box>
      <div className="col-md-4 service-box">
        <i className={'fas fa-' + icon}></i>
        <h4>{titleService}</h4>
        <p>{serviceDesc}</p>
        <a href={`/services#${route}`} className="btn-saiba-mais">Saiba Mais</a>
      </div>
    </Box>
  )
}

ServiceBox.propTypes = {
  titleService: PropTypes.node, 
  serviceDesc: PropTypes.node,
  icon: PropTypes.node,
  route: PropTypes.node,
};

export default ServiceBox;