import boltIcon from "/src/assets/icons/bolt-solid.svg";
import styles from "./Header.module.css";

export default function Header({ children }) {
  return (
    <h1 className={`${styles.title} flex flex-fully-centered`}>
      {children}
      <img className={styles.logo} src={boltIcon} />
    </h1>
  );
}
``;
