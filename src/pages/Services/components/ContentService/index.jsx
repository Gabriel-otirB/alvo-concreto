import PropTypes from 'prop-types';
import { Service } from './styles'
import PictureFrame from '../../../../components/PictureFrame';
import ServiceTitle from '../../components/ServiceTitle';
import ContentText from '../../../../components/ContentText';
import ServiceDescription from '../../components/ServiceDescription';
import TalkButton from '../../components/TalkButton';
import Container from '../../../../components/Container';
import LogoTitle from '../../../../components/LogoTitle';

const ContentService = ({ title, buttonTitle, description, servicesList, image, side, animation }) => {

  const isInverted = side === 'inverting';
  
  return (
    <Container id="service-entrega-concreto">
      <div className="bg-default">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <LogoTitle animation={animation} />
            </div>
            <Service>
              <div className={isInverted ? "col-md-6 order-md-2" : "col-md-6"}>
                <PictureFrame>
                  <img className="slide" src={image} alt={title} />
                </PictureFrame>
              </div>
              <div className={isInverted ? "col-md-6 order-md-1" : "col-md-6"}>
                <ServiceTitle title='primary'>{title}</ServiceTitle>
                <ContentText>
                  <p className="service-description" dangerouslySetInnerHTML={{ __html: description }} />
                </ContentText>
                <ServiceDescription servicesList={servicesList} side={side} />
                <TalkButton buttonTitle={buttonTitle} />
              </div>
            </Service>
          </div>
        </div>
      </div>
    </Container>
  )
}

ContentService.propTypes = {
  buttonTitle: PropTypes.node, 
  title: PropTypes.node,
  description: PropTypes.node,
  servicesList: PropTypes.node,
  image: PropTypes.node,
  side: PropTypes.node,
  animation: PropTypes.node,
};

export default ContentService;
