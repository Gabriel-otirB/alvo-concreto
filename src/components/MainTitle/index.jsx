import { Title } from './styles';

const MainTitle = ({ children }) => {
  return (
    <Title>
      <h3 className="main-title">{children}</h3>
    </Title>
  )
}

export default MainTitle