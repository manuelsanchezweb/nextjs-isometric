'use client'

import React, { useRef, useEffect } from 'react'
import { useSnapshot } from 'valtio'
import gameStore from '@/store'
import { CANVAS_HEIGHT, CANVAS_WIDTH, TILES_X, TILES_Y } from '@/config'
import { drawIsometricHero, drawIsometricTile } from '@/helpers/utils'

const IsometricCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { heroPosition } = useSnapshot(gameStore)

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    for (let x = 0; x < TILES_X + 1; x++) {
      for (let y = 0; y < TILES_Y + 1; y++) {
        drawIsometricTile(ctx, x, y, 'green')
      }
    }

    drawIsometricHero(ctx, heroPosition.x, heroPosition.y, 'red')
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (ctx) {
      draw(ctx)
    }
  }, [heroPosition])

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
    ></canvas>
  )
}

export default IsometricCanvas
