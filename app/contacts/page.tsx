import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main className="container py-8 space-y-6">
        <h1 className="text-2xl font-bold">Контакты</h1>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-3 text-slate-700">
            <p><strong>Телефоны:</strong> <a href="tel:+996700122444">0700 122 444</a> · <a href="tel:+996551122444">0551 122 444</a></p>
            <p><strong>Telegram:</strong> <a className="underline" href="https://t.me/your_username" target="_blank">@your_username</a></p>
            <p><strong>Адрес:</strong> Бишкек</p>
            <iframe className="w-full h-64 rounded-2xl border" loading="lazy" src="https://maps.google.com/maps?q=Bishkek&t=&z=12&ie=UTF8&iwloc=&output=embed"></iframe>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
