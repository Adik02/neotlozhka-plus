# Неотложка Плюс — Next.js сайт (Montserrat + ваш логотип)

## Старт
```bash
npm i
cp .env.example .env.local
# заполните TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID
npm run dev
```
Откройте http://localhost:3000

## Примечания
- Шрифт: Montserrat через next/font.
- Логотип: /public/logo.png (ваш файл подставлен).
- Плавающая кнопка звонка, отзывы, FAQ — уже подключены.


## Деплой на Vercel без Git (через ZIP)
1) Создайте аккаунт на https://vercel.com и войдите.
2) Нажмите **Add New… → Project → Import** и перетащите папку `neotlozhka-plus` или ZIP.
3) В разделе **Environment Variables** создайте переменные:
   - `NEXT_PUBLIC_GA_ID` (опционально)
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
4) Нажмите **Deploy**. Через ~1 минуту сайт будет доступен по временной ссылке.
5) Подключите домен `2444.kg` (Project → Settings → Domains).
