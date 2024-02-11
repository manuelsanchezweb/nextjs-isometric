'use client'

import { MOV_SPEED } from '@/config'
import { isWalkable } from '@/helpers/utils'
import gameStore from '@/store'
import React, { useEffect } from 'react'
import { useSnapshot } from 'valtio'

const HeroControls = () => {
  const { heroPosition } = useSnapshot(gameStore)

  const moveHero = (direction: string) => {
    let newX = gameStore.heroPosition.x
    let newY = gameStore.heroPosition.y

    switch (direction) {
      case 'up': // Diagonally up in isometric equals left and up in top-down
        newY -= MOV_SPEED
        newX -= MOV_SPEED
        break
      case 'down': // Diagonally down in isometric equals right and down in top-down
        newY += MOV_SPEED
        newX += MOV_SPEED
        break
      case 'left': // Diagonally left in isometric equals left and down in top-down
        newX -= MOV_SPEED
        newY += MOV_SPEED
        break
      case 'right': // Diagonally right in isometric equals right and up in top-down
        newX += MOV_SPEED
        newY -= MOV_SPEED
        break
    }

    if (isWalkable(newX, newY)) {
      gameStore.heroPosition.x = newX
      gameStore.heroPosition.y = newY
    } else {
      console.log('Not walkable', newX, newY)
    }
  }

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
        case 'w':
          moveHero('up')
          break
        case 'ArrowDown':
        case 's':
          moveHero('down')
          break
        case 'ArrowLeft':
        case 'a':
          moveHero('left')
          break
        case 'ArrowRight':
        case 'd':
          moveHero('right')
          break
      }
    }

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyDown)

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, []) // Empty dependency array means this effect runs once on mount

  return (
    <>
      <div className="flex items-center gap-4">
        <div>heroPositionX: {heroPosition.x}</div>
        <div>heroPositionY: {heroPosition.y}</div>
      </div>
    </>
  )
}

export default HeroControls
