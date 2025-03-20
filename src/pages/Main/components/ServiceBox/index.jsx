import { Box } from './styles.js'

const ServiceBox = ({ titleService, serviceDesc, icon }) => {
  return (
    <Box>
      <div className="col-md-4 service-box">
        <i className={'fas fa-' + icon}></i>
        <h4>{titleService}</h4>
        <p>{serviceDesc}</p>
        <a href="#" className="btn-saiba-mais">Saiba Mais</a>
      </div>
    </Box>
  )
}

export default ServiceBox;