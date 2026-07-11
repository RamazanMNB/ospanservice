function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          <div>

            <h2 className="text-3xl font-bold">
              Ospan
              <span className="text-amber-500">Service</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              Строительно-монтажная компания полного цикла.
              Инженерные сети, электромонтаж, системы безопасности,
              строительство и капитальный ремонт.
            </p>

          </div>

          <div>

            <h3 className="font-bold text-xl mb-5">
              Разделы
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Главная</li>

              <li>О компании</li>

              <li>Услуги</li>

              <li>Проекты</li>

              <li>Контакты</li>

            </ul>

          </div>

          <div>

            <h3 className="font-bold text-xl mb-5">
              Контакты
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>+7 (777) 000-00-00</p>

              <p>info@ospanservice.kz</p>

              <p>Республика Казахстан</p>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-gray-500">

          © {new Date().getFullYear()} Ospan Service.
          Все права защищены.

        </div>

      </div>

    </footer>
  );
}

export default Footer;