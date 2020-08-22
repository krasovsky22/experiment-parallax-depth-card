import React from 'react'

import { ParallaxDepthCard } from 'experiment-parallax-depth-card'
import 'experiment-parallax-depth-card/dist/index.css'

const URL =
  'https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&amp;auto=compress,format&amp;fit=crop&amp;w=1199&amp;h=798&amp;q=80&amp;cs=tinysrgb&amp;crop='

const BEACH_URL =
  'https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop='

const WATER_URL =
  'https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop='

const App = () => {
  const handleButtonClick = () => console.log('clicked')

  return (
    <div className='container'>
      <ParallaxDepthCard backgroundUrl={URL} title='Some Card'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </ParallaxDepthCard>

      <ParallaxDepthCard
        backgroundUrl={BEACH_URL}
        title='Some Card'
        onClick={handleButtonClick}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </ParallaxDepthCard>

      <ParallaxDepthCard backgroundUrl={WATER_URL} title='Some Card'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </ParallaxDepthCard>
    </div>
  )
}

export default App
