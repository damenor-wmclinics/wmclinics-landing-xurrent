import Image from 'next/image'

import RedictToXurrent from './_components/RedictToXurrent'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#CC9F53] to-[rgb(204,159,83)] flex items-center justify-center p-4">
      <RedictToXurrent />
      <div className="bg-white rounded-tr-3xl rounded-bl-3xl shadow-xl p-14 pb-6 w-full max-w-md text-center">
        <div className="flex justify-center mb-8 h-14 relative">
          <a href="https://wmclinics.es">
            <Image src="/images/logo.png" alt="Xurrent Logo" className="h-14 object-contain" fill />
          </a>
        </div>

        <h1 className="text-2xl font-medium mb-6 text-balance">Gracias por acceder a nuestro Canal de Escucha a nuestros clientes Dorsia y Origen</h1>
        <p className="text-lg text-gray-600 font-light"> Será redirigido a nuestro portal by Xurrent</p>
        <div className="mt-12 opacity-0 animate-fadeIn animation-delay-500">
          <p className="mb-2 text-xl">Redireccionando...</p>
          <div className="relative w-full h-3 mx-auto bg-white/20 rounded-full overflow-hidden">
            <div className="absolute w-0 inset-0 bg-[#CC9F53] rounded-full animate-progress"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
