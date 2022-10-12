import React from 'react'
import  Particles from 'react-particles'
import {Nasa} from './particlesjs-config'
const Particle = () => {

    // console.log(Particles)
  return (
     <div >

<Particles  params={Nasa} />


     </div>
  )
}

export default Particle