# Установка необходимых приложений:
- Скачайте Node JS: https://nodejs.org/en
- Установите среду разработки, например: Visual Studio Code

# Инструкция по открытию сайта:
1. Откройте среду разработки
2. Выберите папку с проектом
3. Откройте консоль
4. Введите в консоль: npm install
5. Запустите проект: npm run dev

## Запуск проекта на хостинге:
0. Установите Node JS
1. В консоли проекта пропишите: npm run build
2. Содержимое build или dist перенести на хостинг
3. Запустите проект: npm run dev

### Описание файловой структуры (не важных для читателя):
1. node_modules - скаченные библиотеки
2. readme.md - описание проекта
3. bun.lock, elint - проверка кода
4. .gitignore - игнорирование переносимых файлов
5. package.json - описание проекта на уровне кода
6. vite.config.json - описание сборки на уровне кода

### Описание файловой структуры (важно):
1. index.html - главный html файл (сео)
2. public - папка с публичными файлами (иконка сайта)
3. components - папка с html структурой и событиями
4. images - папка с картинками и видео
5. styles - папка с файлами css
6. initials - папка со всем контентом страницы