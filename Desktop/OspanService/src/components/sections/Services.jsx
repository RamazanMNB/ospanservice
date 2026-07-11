import { services } from "../../data/services";

function Services() {
    return (
        <section id="services" className="bg-slate-100 py-24">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-5xl font-bold text-center text-slate-900">
                    Наши услуги
                </h2>

                <p className="text-center text-gray-600 mt-5 mb-16 max-w-2xl mx-auto">
                    Полный комплекс строительно-монтажных и инженерных работ
                    для коммерческих и промышленных объектов.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
                            >
                                <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mb-5">
                                    <Icon size={28} color="white" />
                                </div>

                                <h3 className="text-xl font-bold mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-6">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}

export default Services;