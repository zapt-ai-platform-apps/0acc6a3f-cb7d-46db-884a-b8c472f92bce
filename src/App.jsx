import Header from './components/Header';
import Footer from './components/Footer';
import ServicesList from './components/ServicesList';
import ContactForm from './components/ContactForm';
import AboutUs from './components/AboutUs';
import Clients from './components/Clients';

function App() {
  return (
    <div class="min-h-screen h-full flex flex-col text-gray-800">
      <Header />
      <main class="flex-grow pt-20">
        <section class="bg-gradient-to-br from-purple-100 to-blue-100 py-16">
          <div class="container mx-auto px-4 text-center">
            <h1 class="text-5xl font-bold mb-6">بيع خدمات إنشاء المواقع والتطبيقات</h1>
            <p class="text-xl mb-8">نحن متخصصون في إنشاء مواقع الويب والتطبيقات في جميع المجالات</p>
            <a href="#services" class="inline-block px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">اطلب خدماتنا الآن</a>
          </div>
        </section>
        <ServicesList />
        <AboutUs />
        <Clients />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;