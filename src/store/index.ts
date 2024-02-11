import { proxy } from 'valtio'

interface GameState {
  heroPosition: { x: number; y: number }
}

const gameStore = proxy<GameState>({
  heroPosition: { x: 2, y: 4 },
})

export default gameStore
