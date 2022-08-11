---
title: Главная страница блога
icon: home
order: 6
category:
  - Блог
tag:
  - Блог
  - Главная
  - Макет
---

`vuepress-theme-hope` позволяет вам включить домашнюю страницу в стиле блога.

Вам нужно установить `layout: Blog` и `home: true` на главной странице frontmatter.

<!-- more -->

![Скриншот главной страницы](./assets/blog-light.png#light)
![Скриншот главной страницы](./assets/blog-dark.png#dark)

## Frontmatter опции

### hero

- Тип: `boolean`
- По умолчанию: `true`

Отображать ли значок и описание домашней страницы.

### bgImage

- Тип: `string | false`

Для адреса фонового изображения необходимо указать абсолютный путь. Если не заполнить, будет автоматически применено пейзажное изображение по умолчанию.

### bgImageStyle

- Тип: `Record <string, string>`

Стиль CSS фонового изображения.

### heroImageStyle

- Тип: `Record <string, string>`

Стиль CSS для домашней иконки

### heroFullScreen

- Тип: `boolean`
- По умолчанию: `false`

Отображается ли герой в полноэкранном режиме

### projects

- Тип: `ProjectOption[]`

`ProjectOption` включает:

- `name`: обязательно, имя проекта
- `link`: обязательно, ссылка на проект, заполните внешний путь или абсолютный путь
- `desc`: описание проекта
- `icon`: иконка, вы можете указать полный или абсолютный путь ссылки на изображение, также поддерживается значок FontClass.

  Мы предоставляем эти иконки в качестве встроенной поддержки: `"link"`, `"project"`, `"book"`, `"article"`, `"friend"`。