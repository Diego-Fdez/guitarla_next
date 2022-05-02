import Guitarra from "./Guitarra"
import styles from "../styles/Listado.module.css"

const Listado = ({guitarras}) => {

  const arrayGuitarra = guitarras.data

  return (
    <div className={styles.listado}>
      {arrayGuitarra.map(guitarra => (
        <Guitarra 
        key = {guitarra.attributes.url}
        guitarra = {guitarra}
        />
      ))}
    </div>
  )
}

export default Listado