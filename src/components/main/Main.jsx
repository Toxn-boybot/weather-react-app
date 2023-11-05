import React from 'react'
import './main.css'
import Temp from '../temp/Temp'
import Details from '../details/Details'
import Map from '../map/Map'
const Main = () => {
  return (
    <main>
        <div className="container">
            <section className="today">
                <Temp/>
                <Details/>
                <Map/>
            </section>
        </div>
    </main>
  )
}

export default Main