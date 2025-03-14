import { Template } from './styles';
import Line from '../../components/Line';

const Container = ({ children }) => {
  return (
    <Template>
      {children}
      <Line />
    </Template>
  )
}

export default Container