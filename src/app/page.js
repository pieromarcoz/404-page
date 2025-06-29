import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/Scene'), {
    ssr: false,
})

/**
 * Renders the main page layout with a dynamic scene component and a test message.
 * 
 * Displays the `Scene` component and the text "HolA ESTO ES UNA PRUEBA DE CODERRABIT" inside a full-screen main container.
 */
export default function Home() {
  return (
    <main className="relative h-screen"> 
        <Scene />
        HolA ESTO ES UNA PRUEBA DE CODERRABIT
    </main>
  );
}
