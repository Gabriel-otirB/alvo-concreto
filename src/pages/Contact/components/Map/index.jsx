import { Layout } from './styles';

const Map = () => {
  return (
    <Layout>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29401.512679527343!2d-43.202110723713645!3d-22.906395572314413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRua%20da%20Constru%C3%A7%C3%A3o%2C%20123%2C%20Centro%2C%20Rio%20de%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1733069986554!5m2!1spt-BR!2sbr"
          width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </Layout>
  )
}

export default Map;