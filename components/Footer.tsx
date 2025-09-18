export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-100">
      <div className="container py-6 text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Неотложка Плюс. Все права защищены.</p>
        <div className="text-slate-500">Бишкек · Работаем 24/7</div>
      </div>
    </footer>
  )
}
