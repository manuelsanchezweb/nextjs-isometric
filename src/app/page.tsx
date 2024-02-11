import Hero from '@/components/Hero/Hero'
import HeroControls from '@/components/Hero/HeroControls'
import IsometricCanvas from '@/components/IsometricCanvas/IsometricCanvas'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-12 text-white">
      <h1 className="text-4xl">Isometric Shit</h1>
      <IsometricCanvas /> {/* Render the isometric canvas here */}
      <HeroControls />
    </main>
  )
}
