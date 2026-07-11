import heroImage from "C:/Users/Рамазан/Desktop/OspanService/src/assets/images/hero.avif";



function Hero() {
  return (
    <section id="home" className="min-h-screen bg-slate-900 flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Левая часть */}
        <div>
          <p className="uppercase tracking-widest text-amber-500 font-semibold mb-4">
            Строительно-монтажная компания
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Надежные инженерные решения для вашего бизнеса
          </h1>

          <p className="text-gray-300 text-lg mt-6">
            Выполняем строительно-монтажные работы любой сложности.
            Работаем качественно, безопасно и точно в срок.
          </p>

          <div className="flex gap-4 mt-8">
            <a href="#services" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold transition">
                Наши услуги
            </a>

            <a href="#contact" className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-slate-900 transition">
                Связаться
            </a>
          </div>
        </div>

        {/* Правая часть */}
        <div>
          <img
            src={heroImage}
            alt="Строительный объект"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;