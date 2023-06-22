import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>How many eggs could you eat in an hour</h1>
        <form action='/' method='post'>
          <input
            className={styles.numeggs}
            type='number'
            id='num-eggs'
            name='num-eggs'
            min='0'
            placeholder='BIG NUMBER ENTER AREA'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </main>
  );
}
