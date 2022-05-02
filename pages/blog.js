import Layout from "../components/Layout"
import ListadoBlog from "../components/ListadoBlog"

const Blog = ({ entradas }) => {
  
  return (
    <Layout 
      pagina="Blog"
    >
      <main className="contenedor">
        <ListadoBlog 
          entradas = {entradas}
        />
      </main>
    </Layout>
  )
}

//para consultar apis que se actualizan constantemente
export async function getStaticProps() {

  const url = `${process.env.API_URL}/api/blogs?populate=*`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()
      
  return{
    props: {
      entradas
    }
  }
}

export default Blog