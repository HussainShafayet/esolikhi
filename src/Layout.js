import React from 'react'
import NavBar from './components/Nav/NavBar'

export default function Layout({children}) {
  return (
    <>
        <NavBar />
        <main>
            <div className='container'>
                 {children}
            </div>
        </main>
        {/* <Footer /> */}
    </>
  )
}
