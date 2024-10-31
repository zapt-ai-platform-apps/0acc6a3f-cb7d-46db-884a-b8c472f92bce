function ServiceCard(props) {
  const { service } = props;

  return (
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={service.image} alt={service.title} class="w-full h-48 object-cover" />
      <div class="p-6">
        <h3 class="text-2xl font-bold mb-4">{service.title}</h3>
        <p class="text-gray-700 mb-4">{service.description}</p>
        <a href="#contact" class="inline-block px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 cursor-pointer">اطلب الآن</a>
      </div>
    </div>
  );
}

export default ServiceCard;