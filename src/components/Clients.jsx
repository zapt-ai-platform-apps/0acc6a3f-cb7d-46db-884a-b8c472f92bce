import { For } from 'solid-js';

function Clients() {
  const clients = [
    { name: 'عميل 1', logo: 'https://source.unsplash.com/100x100/?company' },
    { name: 'عميل 2', logo: 'https://source.unsplash.com/100x100/?business' },
    { name: 'عميل 3', logo: 'https://source.unsplash.com/100x100/?enterprise' },
    { name: 'عميل 4', logo: 'https://source.unsplash.com/100x100/?startup' },
  ];

  return (
    <section id="clients" class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">عملاؤنا</h2>
        <div class="flex flex-wrap justify-center items-center">
          <For each={clients}>
            {(client) => (
              <img src={client.logo} alt={client.name} class="w-24 h-24 object-contain m-4" />
            )}
          </For>
        </div>
      </div>
    </section>
  );
}

export default Clients;