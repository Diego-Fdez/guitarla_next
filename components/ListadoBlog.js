import Entrada from "./Entrada";
import styles from "../styles/Blog.module.css"

const ListadoBlog = ({entradas}) => {

  const nuevasEntradas = entradas.data

  return (
    <>
      <h1 className='heading'>Blog</h1>

      <div className={styles.blog}>
        {nuevasEntradas.map((entrada) => (
          <Entrada key={entrada.id} entrada={entrada} />
        ))}
      </div>
    </>
  );
};

export default ListadoBlog;
