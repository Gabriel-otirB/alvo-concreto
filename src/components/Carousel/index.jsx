import { Section } from './styles';

import slide1 from '../../assets/images/carousel/slide1.jpg';
import slide2 from '../../assets/images/carousel/slide2.jpg';
import slide3 from '../../assets/images/carousel/slide3.jpg';

import Line from '../../components/Line';

const Carousel = () => {
  return (
    <Section id="carousel" alt="Carousel Section">
      <div id="mainCarousel" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active default-carousel" data-bs-interval="8000">
            <img src={slide1} className="d-block w-100" alt="..."/>
              <div className="carousel-caption">
                <h5 className="default-title">Transforme Sua Obra em Realidade</h5>
                <p>Oferecemos soluções em concreto de alta qualidade para projetos robustos e seguros.</p>
                <a href="#" className="main-btn">Fazer Orçamento</a>
              </div>
          </div>
          <div className="carousel-item default-carousel" data-bs-interval="8000">
            <img src={slide2} className="d-block w-100" alt="..."/>
              <div className="carousel-caption">
                <h5 className="default-title">Concreto de Alta Performance</h5>
                <p>Garanta a durabilidade e resistência da sua obra com nossos produtos inovadores.</p>
                <a href="#" className="main-btn">Fazer Orçamento</a>
              </div>
          </div>
          <div className="carousel-item default-carousel" data-bs-interval="8000">
            <img src={slide3} className="d-block w-100" alt="..."/>
              <div className="carousel-caption">
                <h5 className="default-title">Construa com Segurança e Qualidade</h5>
                <p>Com a Alvo Concreto, sua obra será entregue no prazo e com a máxima qualidade.</p>
                <a href="#" className="main-btn">Fazer Orçamento</a>
              </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </Section>
  )
}

export default Carousel;