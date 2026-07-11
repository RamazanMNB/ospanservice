import {
  CheckCircle,
  Clock3,
  HardHat,
  ShieldCheck,
  MapPinned,
  Wrench,
} from "lucide-react";

const advantages = [
  {
    icon: HardHat,
    title: "Опытная команда",
    description: "Квалифицированные специалисты с опытом реализации сложных объектов.",
  },
  {
    icon: Clock3,
    title: "Соблюдение сроков",
    description: "Работаем по графику и выполняем обязательства перед заказчиком.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия качества",
    description: "Используем проверенные материалы и современные технологии.",
  },
  {
    icon: Wrench,
    title: "Полный цикл работ",
    description: "От проектирования и поставки до запуска объекта.",
  },
  {
    icon: MapPinned,
    title: "Работаем по Казахстану",
    description: "Реализуем проекты в разных регионах страны.",
  },
  {
    icon: CheckCircle,
    title: "Надежный партнер",
    description: "Строим долгосрочные отношения и сопровождаем проекты.",
  },
];

function WhyUs() {
  return (
    <section id="whuus" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-amber-500 uppercase font-semibold tracking-widest">
            Почему выбирают нас
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-3">
            Надежность в каждом проекте
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition"
              >
                <Icon
                  size={42}
                  className="text-amber-500 mb-5"
                />

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default WhyUs;