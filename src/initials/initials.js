// Иконки: react-icons.github.io/react-icons/search
import { GiHamburgerMenu } from "react-icons/gi";
import { LuMessagesSquare } from "react-icons/lu";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { SlSocialVkontakte } from "react-icons/sl";
import { RiDiscordLine } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";
import {
  BsSpeedometer2,
  BsDiscord
} from "react-icons/bs";
import {
  IoIosArrowUp,
  IoIosArrowRoundForward
} from "react-icons/io";

// Видео:
import Video from '../images/video.mp4';

// Изображения:
import LogoImage from '../images/logo.webp';
import PersonHeaderImage from '../images/person-header.webp';
import SkyInfoImage from '../images/sky-info.webp';
import LibInfoImage from '../images/lib-info.webp';

// Описание логотипа:
export const initialLogo = {
  name: 'Логотип',
  href: '/',
  art: {
    src: LogoImage,
    alt: 'Логотип'
  }
};

// Описание кнопки для анкетирования:
export const initialAnket = {
  name: 'Заполните анкету',
  href: '/'
};

export const initialIconSticky = {
  icon: GiHamburgerMenu
};

// Описание важных ссылок:
export const initialLinks = [
  {
    name: 'О сервере',
    href: '#more'
  },
  {
    name: 'Вики',
    href: '/'
  },
  {
    name: 'Discord',
    href: '/'
  }
];

// Описание шапки сайта:
export const initialHeader = {
  name: 'Role-play',
  title: 'Настоящая ванилла  с элементами',
  subtitles: [
    'Окунись в нaстоящий дружеский сервер.',
    'Без привилегий, привата и лишних дополнений.'
  ],
  arl: {
    src: PersonHeaderImage,
    alt: 'Красивый персонаж'
  },
  link: {
    name: 'Подробнее',
    href: '#more'
  }
};

// Описание Info 1:
export const initialInfoOne = {
  title: 'Приватный сервер',
  subtitles: [
    'Это место, где постоянно кипит бурная и интересная жизнь среди большого сообщества. Ключевая особенность приватного сервера заключается именно в доверии друг к другу.',
    'Мы блокируем гриферов, а повреждённые постройки восстанавливаем как можно быстрее.'
  ],
  art: {
    src: SkyInfoImage,
    alt: 'Остров с игроками'
  }
};

// Описание Info 2:
export const initialInfoTwo = {
  title: 'Простые и понятные правила',
  subtitles: [
    'На сервере не строгая модерация. Ты не получишь бан по пустякам. Правила разделены по смысловым категориям, поэтому ты легко их прочитаешь за пару минут.',
    'Также, ты можешь развернуть любое правило и в подробностях узнать про него.'
  ],
  art: {
    src: LibInfoImage,
    alt: 'Игрок в библиотеке'
  }
};

// Описание уведомлений:
export const initialAlerts = [
  {
    title: 'Высокая стабильность',
    subtitle: 'Сервер оптимизирован без вреды для ваниллы. Есть мир ферм специально для автоматических ферм',
    color: '30, 170, 112',
    icon: BsSpeedometer2
  },
  {
    title: 'Активное комьюнити',
    subtitle: 'Наше дружелюбное комьюнити скрасит твои серые деньки и подарит хорошее настроение.',
    color: '244, 121, 115',
    icon: LuMessagesSquare
  },
  {
    title: 'Место твоих фантазий',
    subtitle: 'Осуществляй проекты любого масштаба, строй города и удивляй остальных игроков!',
    color: '217, 148, 70',
    icon: HiOutlineClipboardDocumentList
  }
];

// Описание Discord:
export const initialDiscord = {
  name: 'Discord',
  href: '/',
  icon: BsDiscord,
  color: '88, 101, 242',
  title: 'Остались вопросы?',
  subtitle: 'Заходи на наш Discord сервер и задавай вопросы в канале поддержки. Мы обязательно поможем!'
};

// Описание FAQ: 
export const initialFaqs = [
  {
    question: 'На какой версии сервер?',
    answer: 'Ответ, Ответ, Ответ, Ответ. Ответ, Ответ, Ответ. Ответ, Ответ, Ответ. Ответ, Ответ, Ответ. Ответ, Ответ, Ответ. Ответ, Ответ, Ответ.Ответ, Ответ, Ответ.Ответ, Ответ, Ответ.vvОтвет, Ответ, Ответ.Ответ, Ответ, Ответ.Ответ, Ответ, Ответ.Ответ, Ответ, Ответ.Ответ, Ответ, Ответ.Ответ, Ответ, Ответ.vvvОтвет, Ответ, Ответ.Ответ, Ответ, Ответ. vОтвет, Ответ, Ответ.Ответ, Ответ, Ответ.vvОтвет, Ответ, Ответ.Ответ, Ответ, Ответ.Ответ, Ответ, Ответ.Ответ, Ответ, Ответ.'
  },
  {
    question: 'На какой версии сервер?',
    answer: 'Ответ, Ответ, Ответ, Ответ.'
  },
  {
    question: 'На какой версии сервер?',
    answer: 'Ответ, Ответ, Ответ, Ответ.'
  },
  {
    question: 'На какой версии сервер?',
    answer: 'Ответ, Ответ, Ответ, Ответ.'
  }
];

// Иконка для FAQ:
export const initialForFaq = {
  title: 'Ответы на самые популярные вопросы',
  icon: IoIosArrowUp
};

// Покупка проходки:
export const initialPrice = {
  title: 'Не хочешь войти по анкете?',
  name: 'Купить проходку',
  icon: IoIosArrowRoundForward,
  video: Video,
  error: 'Видео временно недоступно!'
};

// Footer: 
export const initialFooter = {
  author: '© Все права защищены. Frogdream, 2024',
  description: 'We are in no way affiliated with or endorsed by Mojang, AB.',
  links: [
    {
      name: 'VK',
      href: '/',
      color: '60, 115, 243',
      icon: SlSocialVkontakte
    },
    {
      name: 'Discord',
      href: '/',
      color: '88, 101, 242',
      icon: RiDiscordLine
    }
  ],
  documents: [
    {
      name: 'Политика конфиденциальности',
      href: '/'
    },
    {
      name: 'Политика возврата средств',
      href: '/'
    }
  ]
};

// Данные модального окна:
export const initialModal = {
  title: 'Покупка проходки',
  name: 'check',
  desc: {
    discord: {
      text: 'Я присоединился в',
      name: 'Discord',
      href: '/'
    },
    condition: {
      text: 'и согласен с',
      name: 'условиями',
      href: '/'
    }
  },
  button: 'Купить проходку за 49 Р',
  icon: TfiClose
};

export const initialInput = [
  {
    name: 'nickname',
    title: 'Никнейм',
    place: 'Твой никнейм',
    type: 'text',
    autocomplete: 'on',
    required: true
  },
  {
    name: 'email',
    title: 'Электронная почта',
    place: 'Введи свою почту',
    type: 'email',
    autocomplete: 'on',
    required: true
  },
  {
    name: 'promo',
    title: 'Промокод (если есть)',
    place: 'Введи промокод',
    type: 'text',
    autocomplete: 'off',
    required: false
  }
];