import React from 'react';
import NavBar from './components/Nav/NavBar';
import style from './Layout.module.css'

export default function Layout({children}) {
  return (
    <>
    <div className={style.blogLayout}>
      <header  className={style.header}>
          <NavBar />
      </header>
      <nav  className={style.nav}>
        navigation
      </nav>

      <main  className={style.main}>
        {children}
      </main>

      <footer  className={style.footer}>
        footer
      </footer>

      <div  className={style.feeds}>
        feeds
      </div>
    </div>

    </>
  );
}
