import Image from 'next/image'
import Layout from "../components/Layout"
import styles from "../styles/Nosotros.module.css"

const Nosotros = () => {
  return (
    <Layout 
      pagina="Nosotros"
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt='Imagen sobre nosotros' />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laborum, maiores incidunt libero doloremque natus amet aliquid? Officiis omnis aspernatur at accusantium, illum labore. Quam deleniti delectus laborum voluptatum sit! 
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In nesciunt quos rem fugiat saepe. Iste voluptatem nobis modi eaque atque? Quos aspernatur numquam assumenda inventore impedit ducimus aut dolores nam.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros