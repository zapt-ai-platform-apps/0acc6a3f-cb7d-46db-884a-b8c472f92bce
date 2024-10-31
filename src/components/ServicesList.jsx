import ServiceCard from './ServiceCard';
import { For } from 'solid-js';

function ServicesList() {
  const services = [
    {
      title: 'إنشاء مواقع الويب',
      description: 'نقوم بتطوير مواقع ويب احترافية ومتجاوبة مع جميع الأجهزة.',
      image: 'https://source.unsplash.com/400x300/?website',
    },
    {
      title: 'تطوير تطبيقات الجوال',
      description: 'نقوم بتطوير تطبيقات جوال لنظامي iOS و Android.',
      image: 'https://source.unsplash.com/400x300/?mobile,app',
    },
    {
      title: 'تصميم تجربة المستخدم',
      description: 'نوفر تصاميم تجربة مستخدم مبتكرة تجعل منتجاتك أكثر جاذبية.',
      image: 'https://source.unsplash.com/400x300/?design,ux',
    },
  ];

  return (
    <section id="services" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">خدماتنا</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <For each={services}>
            {(service) => (
              <ServiceCard service={service} />
            )}
          </For>
        </div>
      </div>
    </section>
  );
}

export default ServicesList;