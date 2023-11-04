import React from 'react'
import './main.css'
import Temp from '../temp/Temp'
const Main = () => {
  return (
    <main>
        <div className="container">
            <section className="today">
                <Temp/>
            </section>
        </div>
    </main>
  )
}

export default Main