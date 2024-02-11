import { CANVAS_WIDTH, TILE_SIZE } from '@/config'
import { TILES_X, TILES_Y } from '@/config'

/**
 * Converts top-down grid coordinates to isometric coordinates.
 * @param x The x-coordinate in the top-down view.
 * @param y The y-coordinate in the top-down view.
 * @returns A tuple containing the isometric x and y coordinates.
 */
export function toIsometric(x: number, y: number): [number, number] {
  return [(x - y) * TILE_SIZE + CANVAS_WIDTH / 2, ((x + y) * TILE_SIZE) / 2]
}

/**
 * Draws a simple isometric tile on the canvas.
 * @param ctx The canvas rendering context.
 * @param x The x-coordinate for the tile.
 * @param y The y-coordinate for the tile.
 * @param color The fill color for the tile.
 */
export function drawIsometricTile(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string
): void {
  const [isoX, isoY] = toIsometric(x, y)
  ctx.fillStyle = color
  ctx.fillRect(isoX, isoY, TILE_SIZE, TILE_SIZE / 2)
}

/**
 * Draws the hero in an isometric view.
 * @param ctx The canvas rendering context.
 * @param x The x-coordinate for the hero.
 * @param y The y-coordinate for the hero.
 * @param color The fill color for the hero.
 */
export function drawIsometricHero(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string
): void {
  const [isoX, isoY] = toIsometric(x, y)
  ctx.fillStyle = color
  ctx.fillRect(isoX, isoY, TILE_SIZE, TILE_SIZE * 2) // Hero is taller (16x32)
}

export const isWalkable = (x: number, y: number): boolean => {
  // Adjusted to use dynamic grid size
  console.log(
    'Max number of tilesX:',
    TILES_X,
    'Max number of tilesY:',
    TILES_Y
  )
  const minX = 0,
    maxX = TILES_X - 1,
    minY = 0,
    maxY = TILES_Y - 1
  return x >= minX && x <= maxX && y >= minY && y <= maxY
}
