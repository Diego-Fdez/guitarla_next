import Layout from "../../components/Layout"
import styles from  "../../styles/Entrada.module.css"
import Image from "next/image"

const EntradaBlog = ({entrada}) => {
  
  const {contenido, publishedAt, imagen, titulo} = entrada[0].attributes
  

  return (
    <Layout pagina={titulo}>
      <main className="contenedor">
        <h3 className="heading">{titulo}</h3>
        <article className={styles.entrada}>
          <Image layout="responsive" width={800} height={600} 
            src={imagen.data.attributes.url} alt={`Imagen entrada ${titulo}`}
          />
        <div className={styles.contenido}>
          <p className={styles.fecha}>{publishedAt}</p>
          <p className={styles.texto}>
            {contenido}
          </p>
        </div>
        </article>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {

  const url2 = `${process.env.API_URL}/api/blogs?&populate=imagen`
  const respuesta = await fetch(url2)
  const entradas = await respuesta.json()
  const nuevasEntradas = (entradas.data)

  const paths = nuevasEntradas.map(entrada => ({
    params: {url: entrada.attributes.url}
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {url}}) {

  const urlBlog = (`${process.env.API_URL}/api/blogs?populate=imagen&filters[url][$eq]=${url}`)
  const respuesta = await fetch(urlBlog)
  const entradaBlog = await respuesta.json()
  const entrada = entradaBlog.data
  
  return {
    props: {
      entrada
    }
  }
}

export default EntradaBlog