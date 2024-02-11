'use client'

import gameStore from '@/store'
import { useSnapshot } from 'valtio'

const Count = () => {
  const snap = useSnapshot(gameStore)

  return (
    <div>
      <div>heroPositionX: {snap.heroPosition.x}</div>
      <div>heroPositionY: {snap.heroPosition.y}</div>
    </div>
  )
}

export default Count
