import Link from "next/link"
import styles from "../styles/NoEncontrado.module.css"

const NoEncontrado = () => {
  return (
    <div className={styles.no_encontrado}>
      <h2 className="heading">Página no encontrada</h2>
      <Link href="/">Volver al Inicio</Link>
    </div>
  )
}

export default NoEncontrado