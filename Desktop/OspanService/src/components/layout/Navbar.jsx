function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Ospan
            <span className="text-amber-500">Service</span>
          </h1>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-slate-700 font-medium">
          <a href="#home">Главная</a>
          <a href="#services">Услуги</a>
          <a href="#projects">Проекты</a>
          <a href="#about">О компании</a>
          <a href="#contact">Контакты</a>
        </nav>

        {/* Button */}
        <button className="bg-amber-500 hover:bg-amber-600 transition text-white px-5 py-3 rounded-xl font-semibold">
          Позвонить
        </button>

      </div>
    </header>
  );
}

export default Navbar;