import Image from "next/image"
import { useState } from "react"
import Layout from "../../components/Layout"
import styles from "../../styles/Guitarra.module.css"

const Producto = ({ guitarra, agregarCarrito }) => {

  const [cantidad, setCantidad] = useState(1)

  const {descripcion, imagen, nombre, precio, id} = guitarra.data[0]

  const handleSubmit = e => {
    e.preventDefault()

    if(cantidad < 1) {
      alert('cantidad no válida')
      return
    }

    //agregar al carrito
    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: guitarra.data[0].attributes.imagen.data.attributes.url,
      nombre: guitarra.data[0].attributes.nombre,
      precio: guitarra.data[0].attributes.precio,
      cantidad,
    }
    agregarCarrito(guitarraSeleccionada)
  };

  return (
    <Layout pagina={`Guitarra ${nombre}`}>
      <div className={styles.guitarra}>
      <Image layout="responsive" width={180} height={350} src={guitarra.data[0].attributes.imagen.data.attributes.url} alt={guitarra.data[0].attributes.nombre} />
        <div className={styles.contenido}>
          <h3>{guitarra.data[0].attributes.nombre}</h3>
          <p className={styles.descripcion}>{guitarra.data[0].attributes.descripcion}</p>
          <p className={styles.precio}>$ {guitarra.data[0].attributes.precio}</p>
          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label>Cantidad:</label>
            <select 
              value={guitarra.data[0].attributes.cantidad}
              onChange={e => setCantidad(parseInt(e.target.value))}>
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            <input 
              type="submit"
              value="Agregar al Carrito"
            />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {
  
    const urlG = (`${process.env.API_URL}/api/guitarras?populate=imagen&filters[url][$eq]=${url}`)
    const respuesta = await fetch(urlG)
    const guitarra = await respuesta.json()
    
    return{
      props: {
        guitarra
      }
    }
  }

export default Producto