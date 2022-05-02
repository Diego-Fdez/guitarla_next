import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({guitarras, curso, entradas}) {

  return (
    
      <Layout
          pagina="Inicio" 
          guitarra = {guitarras.data[1]}
        >
          <main className='contenedor'>
            <h1 className='heading'>Nuestra Colección</h1>
            <Listado 
              guitarras = {guitarras}
            />
          </main>
          <Curso 
            curso = {curso}
          />
          <section className='contenedor'>
            <ListadoBlog 
              entradas={entradas}
            />
          </section>
        </Layout>
  )
}

export async function getServerSideProps() {

  const urlGuitarras = `${process.env.API_URL}/api/guitarras?populate=*&pagination[limit]=3&sort=createdAt:desc`
  const urlCursos = `${process.env.API_URL}/api/curso?populate=*`
  const urlBlog = `${process.env.API_URL}/api/blogs?populate=*&pagination[limit]=3&sort=createdAt:desc`

  const [resGuitarra, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog)
  ])

  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarra.json(),
    resCursos.json(),
    resBlog.json()
  ])

  return{
    props: {
      guitarras,
      curso,
      entradas
    }
  }
}