
import { ChevronDown } from "lucide-react"

export default function HeroBanner() {
  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-black to-black px-4">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">Pokédex</h1>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-white font-light leading-relaxed max-w-2xl mx-auto">
            Descubre el mundo completo de Pokémon con nuestra enciclopedia digital moderna
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-8 hidden">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">1000+</div>
            <div className="text-sm text-white uppercase tracking-wide">Pokémon</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">18</div>
            <div className="text-sm text-white uppercase tracking-wide">Tipos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">9</div>
            <div className="text-sm text-white uppercase tracking-wide">Generaciones</div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer"
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-white uppercase tracking-wide font-medium">Explorar</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center group-hover:border-red-400 transition-colors">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce group-hover:bg-red-400 transition-colors"></div>
          </div>
          <ChevronDown className="w-5 h-5 text-white animate-bounce group-hover:text-red-400 transition-colors" />
        </div>
      </button>

      <div className="absolute top-20 left-10 w-2 h-2 bg-red-200 rounded-full opacity-60"></div>
      <div className="absolute top-40 right-16 w-3 h-3 bg-yellow-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-green-200 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-4 h-4 bg-purple-200 rounded-full opacity-30"></div>
    </section>
  )
}