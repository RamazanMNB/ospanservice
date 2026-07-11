import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = "Заявка с сайта Ospan Service";

    const body = `
Имя: ${formData.name}

Телефон: ${formData.phone}

Email: ${formData.email}

Сообщение:
${formData.message}
`;

    window.location.href = `mailto:s.asset@ospanservice.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-amber-500 font-semibold">
            Контакты
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-3">
            Свяжитесь с нами
          </h2>

          <p className="text-gray-600 mt-5">
            Оставьте заявку, и мы свяжемся с вами в ближайшее время.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <div className="space-y-8">
              <div className="flex gap-5">
                <Phone className="text-amber-500" size={30} />
                <div>
                  <h3 className="font-bold text-xl">Телефон</h3>
                  <p className="text-gray-600">+7 (777) 000-00-00</p>
                </div>
              </div>

              <div className="flex gap-5">
                <Mail className="text-amber-500" size={30} />
                <div>
                  <h3 className="font-bold text-xl">Email</h3>
                  <p className="text-gray-600">s.asset@ospanservice.com</p>
                </div>
              </div>

              <div className="flex gap-5">
                <MapPin className="text-amber-500" size={30} />
                <div>
                  <h3 className="font-bold text-xl">Адрес</h3>
                  <p className="text-gray-600">Республика Казахстан</p>
                </div>
              </div>

              <div className="flex gap-5">
                <Clock className="text-amber-500" size={30} />
                <div>
                  <h3 className="font-bold text-xl">Режим работы</h3>
                  <p className="text-gray-600">Пн–Пт: 09:00 – 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:border-amber-500"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Телефон"
                className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:border-amber-500"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:border-amber-500"
                required
              />

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Опишите ваш проект"
                className="w-full p-4 rounded-xl border border-gray-300 outline-none resize-none focus:border-amber-500"
                required
              />

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 transition text-white font-semibold rounded-xl px-8 py-4"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;