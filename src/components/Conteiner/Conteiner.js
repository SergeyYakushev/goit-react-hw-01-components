import s from './Conteiner.module.css';

function Conteiner({ children }) {
  return <div className={s.conteiner}>{children}</div>;
}

export default Conteiner;
