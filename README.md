📝 ToDo App (Next.js + TypeScript)
Минималистичное приложение для управления задачами, реализованное на Next.js с использованием feature-sliced architecture. Включает поддержку тем, создание, редактирование, удаление и переключение статуса задач.

🚀 Стек технологий
Next.js (App Router)

React 18

TypeScript

SCSS-модули

Feature-Sliced Design (FSD)

useLocalStorage для хранения задач

📁 Архитектура проекта
Проект следует принципам Feature-Sliced Design:

bash
Копировать
Редактировать
src/
├── app/ # Next.js App Router
├── pages/ # Обертки над страницами (переходный слой)
├── features/ # Фичи — логика пользовательских действий
├── entities/ # Сущности — атомарные элементы бизнес-домена
├── widgets/ # Виджеты — комбинации фич/сущностей
├── shared/ # Переиспользуемые части (хуки, UI, утилиты)
├── styles/ # SCSS-переменные и темы
🧱 Детали модулей
📂 app/
Используется App Router (layout.tsx, page.tsx) с глобальными стилями и провайдерами (providers.tsx), а также маршрутом tasks.

📂 features/
taskForm — логика формы задачи:

ui/taskForm.tsx — форма создания/редактирования.

model/useAddTask.ts / useEditTask.ts — хуки добавления/редактирования.

lib/ — вспомогательные утилиты (findTaskById, types, constants).

toggleTask — переключение статуса выполнения задачи:

model/useToggleTask.ts — хук переключения.

deleteTask — удаление задачи:

model/useDeleteTask.ts — хук удаления.

themeToggle — смена темы:

lib/constants.ts — дефолтная тема.

📂 entities/
taskItem — базовая карточка задачи:

ui/taskItem.tsx — отрисовка элемента.

lib/ — типы и константы задачи.

📂 widgets/
tasksList — список задач:

ui/tasksList.tsx — отрисовка списка задач.

lib/types.ts — типы задач.

📂 shared/
hooks/useLocalStorage.ts — хук работы с localStorage.

ui/ — (папка пока пуста, может использоваться для общих UI компонентов).

📂 styles/
theme.scss — стилизация темы.

globals.scss — глобальные стили.

\_variables.scss — SCSS-переменные.

📦 Установка и запуск
bash
Копировать
Редактировать
git clone https://github.com/your-repo/todo-apk-next.git
cd todo-apk-next
yarn install
yarn dev
🌗 Поддержка тем
Темы переключаются через useLocalStorage и сохраняются между сессиями. Стиль темы определяется в theme.scss.
