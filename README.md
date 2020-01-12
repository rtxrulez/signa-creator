# Signa Creator

Rtx Rulez repository view
https://rtxrulez.github.io/signa-creator/

Начало работы.

### Установка зависимостей

`npm i`

### Запуск режима разработки

`npm start`

### Сборка для продакшена перед пушем в гитхаб

`npm run build`

## Deploy

Для деплоя на GitHub pages достаточно выполнять команду

`npm run deploy`

После деплоя происходит переключение на ветку `master`

Пароль от базы данных находится в файле
`src/config/pass.js`
Он не под контролем версий, так что придется создать его и экспортировать
