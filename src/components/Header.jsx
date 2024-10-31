function Header() {
  return (
    <header class="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold text-purple-600">New App</a>
        <nav>
          <ul class="flex space-x-4">
            <li><a href="#" class="hover:text-purple-600 cursor-pointer">الرئيسية</a></li>
            <li><a href="#services" class="hover:text-purple-600 cursor-pointer">الخدمات</a></li>
            <li><a href="#about" class="hover:text-purple-600 cursor-pointer">نبذة عنا</a></li>
            <li><a href="#clients" class="hover:text-purple-600 cursor-pointer">عملاؤنا</a></li>
            <li><a href="#contact" class="hover:text-purple-600 cursor-pointer">اتصل بنا</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;