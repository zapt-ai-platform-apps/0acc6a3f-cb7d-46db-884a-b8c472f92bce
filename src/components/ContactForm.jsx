import { createSignal, Show } from 'solid-js';

function ContactForm() {
  const [formData, setFormData] = createSignal({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = createSignal(false);
  const [success, setSuccess] = createSignal(false);
  const [error, setError] = createSignal('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading()) return;

    setLoading(true);
    setSuccess(false);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData()),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(data.error || 'حدث خطأ أثناء إرسال رسالتك. حاول مرة أخرى لاحقًا.');
      }
    } catch (err) {
      setError('حدث خطأ أثناء إرسال رسالتك. حاول مرة أخرى لاحقًا.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">اتصل بنا</h2>
        <form onSubmit={handleSubmit} class="max-w-2xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="الاسم"
            value={formData().name}
            onInput={(e) => setFormData({ ...formData(), name: e.target.value })}
            class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
            required
          />
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={formData().email}
            onInput={(e) => setFormData({ ...formData(), email: e.target.value })}
            class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
            required
          />
          <textarea
            placeholder="رسالتك"
            value={formData().message}
            onInput={(e) => setFormData({ ...formData(), message: e.target.value })}
            class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
            rows="6"
            required
          ></textarea>
          <button
            type="submit"
            class={`w-full px-6 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${loading() ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading()}
          >
            {loading() ? 'جاري الإرسال...' : 'إرسال'}
          </button>
          <Show when={success()}>
            <p class="text-green-600 text-center mt-4">تم إرسال رسالتك بنجاح. سنقوم بالرد عليك قريبًا.</p>
          </Show>
          <Show when={error()}>
            <p class="text-red-600 text-center mt-4">{error()}</p>
          </Show>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;