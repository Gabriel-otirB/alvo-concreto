import ContentService from './components/ContentService';
import Line from '../../components/Line';
import DeliveryImage from '../../assets/images/services/services-delivery.jpg';
import ConsultancyImage from '../../assets/images/services/services-consultancy.jpg';
import PlaningImage from '../../assets/images/services/services-planing.jpg';
import CustomizeImage from '../../assets/images/services/services-customize.jpg';
import QualityImage from '../../assets/images/services/services-quality.jpg';
import SustainabilityImage from '../../assets/images/services/services-sustainability.jpg';
import MaintenanceImage from '../../assets/images/services/services-maintenance.jpg';
import TrainingImage from '../../assets/images/services/services-training.jpg';
import CallToAction from './components/CallToArea';

import { useEffect } from 'react';

import { servicesList } from '../../utils/data';

const Services = () => {

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';

    const hash = window.location.hash;

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'auto', block: 'start' });

          setTimeout(() => {
            window.scrollBy(0, -70);
            document.documentElement.style.scrollBehavior = 'smooth';
          }, 0);
        }
      }, 10);
      
    }
  }, []);

  return (
    <>
      <ContentService
        title='Serviços de Entrega de Concreto'
        titleAnimation=''
        description='
        Na Alvo Concreto, somos especializados em entrega pontual de concreto, atendendo obras de
        pequeno, médio e grande porte em qualquer lugar da cidade. Nosso objetivo é garantir a agilidade e
        eficiência que você precisa para o sucesso do seu projeto.'
        servicesList={servicesList.delivery}
        buttonTitle='AGENDE SUA ENTREGA'
        image={DeliveryImage}
        animation='slide-down'
        id='delivery'
      />
      <Line />
      <ContentService
        title='Consultoria Técnica Especializada'
        description='
        Na Alvo Concreto, oferecemos consultoria técnica especializada para projetos de construção, garantindo que seu empreendimento
        seja executado com a máxima precisão e qualidade. Nosso time de profissionais experientes auxilia em todas as etapas,
        desde a escolha dos materiais até o acompanhamento da execução da obra.'
        servicesList={servicesList.consultancy}
        buttonTitle='FAÇA SUA CONSULTORIA'
        image={ConsultancyImage}
        side='inverting'
        id='consultancy'
      />
      <Line />
      <ContentService
        title='Planejamento de Obras'
        description='
        Na Alvo Concreto, oferecemos um planejamento estratégico e detalhado
        para a execução de obras, garantindo que seu projeto seja realizado dentro do prazo, orçamento e com a máxima qualidade.
        Nossa equipe experiente atua em todas as fases do processo, desde a concepção até a entrega final.'
        servicesList={servicesList.planing}
        buttonTitle='PLANEJE SUA OBRA'
        image={PlaningImage}
        id='planing'
      />
      <Line />
      <ContentService
        title='Projetos Personalizados'
        description='
        Na Alvo Concreto, desenvolvemos projetos personalizados para atender às necessidades
        específicas de cada cliente, garantindo soluções inovadoras e de alta qualidade. Nossa
        equipe trabalha lado a lado com o cliente, criando projetos sob medida que atendem às exigências de cada obra e projeto de construção.'
        servicesList={servicesList.customize}
        buttonTitle='PERSONALIZE SEU PROJETO'
        image={CustomizeImage}
        side='inverting'
        id='customize'
      />
      <Line />
      <ContentService
        title='Garantia e Qualidade nos Projetos'
        description='
        Na Alvo Concreto, a garantia e qualidade são nossos principais compromissos. Cada projeto personalizado é desenvolvido com os mais altos padrões de qualidade, utilizando
        materiais de primeira linha e técnicas avançadas para garantir que sua obra seja segura, durável e eficiente.<span class="sm-remove">Nossa equipe de profissionais está
        sempre à disposição para assegurar que todos os detalhes atendam às normas e especificações exigidas.</span>'
        servicesList={servicesList.quality}
        buttonTitle='GARANTA QUALIDADE'
        image={QualityImage}
        id='quality'
      />
      <Line />
      <ContentService
        title='Soluções Sustentáveis'
        description='
        Na Alvo Concreto, estamos comprometidos com a sustentabilidade e com a redução do impacto ambiental em todas as nossas operações.
        Oferecemos soluções sustentáveis que priorizam o uso eficiente dos recursos, a redução de resíduos e a
        implementação de práticas ecológicas em nossos projetos.<span class="sm-remove">Acreditamos que a construção responsável é fundamental para um futuro melhor.</span>'
        servicesList={servicesList.sustainability}
        buttonTitle='CONSTRUA O FUTURO'
        image={SustainabilityImage}
        side='inverting'
        id='sustainability'
      />
      <Line />
      <ContentService
        title='Manutenção de Equipamentos'
        description='
        Na Alvo Concreto, oferecemos serviços especializados de manutenção de equipamentos para garantir que seus projetos não sejam interrompidos.
        Contamos com uma equipe qualificada para realizar manutenção preventiva e corretiva em máquinas e equipamentos, garantindo que eles operem com máxima eficiência e
        segurança durante toda a execução da obra.'
        servicesList={servicesList.maintenance}
        buttonTitle='TRABALHE COM SEGURANÇA'
        image={MaintenanceImage}
        id='maintenance'
      />
      <Line />
      <ContentService
        title='Treinamento e Capacitação'
        description='
        Na Alvo Concreto, oferecemos treinamentos e capacitação para profissionais da construção civil, com o objetivo de melhorar
        o desempenho e a segurança nas obras. Nossos cursos abordam desde o manuseio de equipamentos até as melhores práticas em segurança no trabalho,
        garantindo que sua equipe esteja preparada para enfrentar os desafios do setor.'
        servicesList={servicesList.training}
        buttonTitle='CAPACITE SUA EQUIPE'
        image={TrainingImage}
        side='inverting'
        id='training'
      />
      <Line />
      <CallToAction />
      <Line />
    </>
  )
}

export default Services