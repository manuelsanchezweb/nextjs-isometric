import gameStore from '@/store'
import React from 'react'
import { useSnapshot } from 'valtio'
import HeroControls from './HeroControls'

const Hero = () => {
  return (
    <>
      <HeroControls />
    </>
  )
}

export default Hero
