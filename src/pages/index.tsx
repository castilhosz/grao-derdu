import Head from 'next/head'

import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <div className={styles['page-home']}>
      <Head>
        <title>Grão Derdu</title>
      </Head>

      <aside>
        <img src={'/illustration.svg'} />
        <strong>Entre no melhor clube de café da America Latina.</strong>
        <p>Receba no seu conforto e usufrua do melhor grão que você poderia tomar</p>
      </aside>
      <main>
        <div className={styles['main-content']}>
          <img src={'/logo.svg'} alt="Grão Derdu" />
          <button className={styles['create-account']}>
            <img src={'/google-icon.svg'} alt="Google" />
            Crie sua conta com o Google
          </button>
          <div className={styles.separator}>ou realize o seu login</div>
          <form>
            <input
              type="text"
              placeholder="Digite o seu código pessoal"
            />
            <button className={styles['enter-account']}>
              <img src={'/log-in.svg'} />
              Logue na sua conta
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}