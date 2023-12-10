import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
    <form action="http://localhost:4242/create-checkout-session" method="POST">
      <button type="submit">Checkout</button>
    </form>
    </main>
  )
}
