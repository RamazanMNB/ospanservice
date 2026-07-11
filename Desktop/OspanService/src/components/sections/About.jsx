import workersImage from "C:/Users/Рамазан/Desktop/OspanService/src/assets/images/about.jpg";

function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Фото */}
        <div>
          <img
            src={workersImage}
            alt="О компании Ospan Service"
            className="w-full h-[550px] object-cover rounded-3xl shadow-xl"
          />
        </div>

        {/* Текст */}
        <div>

          <p className="text-amber-500 uppercase font-semibold tracking-widest mb-3">
            О компании
          </p>

          <h2 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
            Строительно-монтажная компания полного цикла
          </h2>

          <p className="text-gray-600 leading-8 text-lg mb-8">
            Ospan Service выполняет комплекс строительно-монтажных,
            электромонтажных и инженерных работ для коммерческих,
            промышленных и государственных объектов.
          </p>

          <p className="text-gray-600 leading-8 text-lg mb-10">
            Мы сопровождаем проекты от проектирования и поставки оборудования
            до ввода объекта в эксплуатацию, соблюдая сроки, требования
            безопасности и высокие стандарты качества.
          </p>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <h3 className="text-4xl font-bold text-amber-500">
                150+
              </h3>

              <p className="text-gray-600 mt-2">
                Выполненных объектов
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-amber-500">
                12+
              </h3>

              <p className="text-gray-600 mt-2">
                Лет опыта
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-amber-500">
                30+
              </h3>

              <p className="text-gray-600 mt-2">
                Специалистов
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-amber-500">
                24/7
              </h3>

              <p className="text-gray-600 mt-2">
                Техническая поддержка
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;