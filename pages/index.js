import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

// export async function getServerSideProps() {
//   let data = await new Date().toDateString;
//   data = JSON.parse(JSON.stringify(data));
//   return {
//     props: { time: data },
//   };
// }
export default function Home({ time }) {
  return (
    <>
      <main>
        <h1 className={styles.title}>{time}</h1>
      </main>
      <h1>
        <Link href="/csr">
          <a>CSR로</a>
        </Link>
      </h1>
      <h1>
        <Link href="/ssg">
          <a>SSG로</a>
        </Link>
      </h1>
      <h1>
        <Link href="/isr">
          <a>ISR로</a>
        </Link>
      </h1>
    </>
  );
}
