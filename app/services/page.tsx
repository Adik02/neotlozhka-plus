import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceCard from '@/components/ServiceCard'

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="container py-8 space-y-6">
        <h1 className="text-2xl font-bold">Услуги</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard title="Срочные выезды" desc="Диагностика, доврачебная помощь, транспортировка" />
          <ServiceCard title="Перевозка лежачих" desc="Спецоборудование, носилки, сопровождение" />
          <ServiceCard title="Дежурство на мероприятиях" desc="Бригада и автомобиль на площадке" />
        </div>
      </main>
      <Footer />
    </>
  )
}
