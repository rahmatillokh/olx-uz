import {
  Portfell,
  Ball,
  Car,
  Detskiy,
  Dog,
  Halat,
  Key,
  Kraska,
  Logo,
  Noll,
  Obmen,
  Phone,
  Dom,
  GooglePlay,
  AppStore,
} from "../assets/index";
import { BiMessageRounded, BiHeart, BiUser } from "react-icons/bi";

const NAVBAR_LINKS = [
  {
    text: "O'Z | РУ",
  },
  {
    text: <BiMessageRounded size="20px" />,
  },
  {
    text: `Сообщения`,
  },
  {
    text: <BiHeart size="20px" />,
  },
  {
    text: <BiUser size="20px" />,
  },
  {
    text: `Ваш профиль`,
  },
];

const Categories = [
  {
    img: Detskiy,
    text: "Детский мир",
  },
  {
    img: Key,
    text: "Недвижимость",
  },
  {
    img: Car,
    text: "Транспорт",
  },
  {
    img: Portfell,
    text: "Работа",
  },
  {
    img: Dog,
    text: "Животные",
  },
  {
    img: Dom,
    text: "Дом и сад",
  },
  {
    img: Phone,
    text: "Электроника",
  },
  {
    img: Kraska,
    text: "Бизнес и услуги",
  },
  {
    img: Halat,
    text: "Мода и стиль",
  },
  {
    img: Ball,
    text: "Хобби и спорт",
  },
  {
    img: Noll,
    text: "Отдам даром",
  },
  {
    img: Obmen,
    text: "Обмен",
  },
];

const Product = [
  {
    id: "product-1",
    img: "https://frankfurt.apollo.olxcdn.com/v1/files/bwdy93viccpd2-UZ/image;s=644x461",
    text: "Bollar uchun beshiklar Belanchaklar",
    location: "Самарканд",
    time: "Сегодня 08:20",
    cost: "600 000 сум",
    addFavourites: <BiHeart size="22px" />,
  },
  {
    id: "product-2",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png",
    text: "Баскетбольный мяч",
    location: "Учтепинский район",
    time: "6 май",
    cost: "269 000 сум",
    addFavourites: <BiHeart size="22px" />,
  },
  {
    id: "product-3",
    img: "https://frankfurt.apollo.olxcdn.com/v1/files/7dpx4zg1p7sc3-UZ/image;s=644x461",
    text: "Беговая дорожка PowerGym PG-370Mi",
    location: "Мирзо-Улугбекский район",
    time: "Вчера 15:55",
    cost: "6 300 000 сум",
    addFavourites: <BiHeart size="22px" />,
  },
  {
    id: "product-4",
    img: "https://frankfurt.apollo.olxcdn.com/v1/files/8ybai3jwyqvh3-UZ/image;s=644x461",
    text: "Профнастил оцинкованный МП-20 0,35 | Профлист",
    location: "Андижан",
    time: "6 май",
    cost: "46 500 сум",
    addFavourites: <BiHeart size="22px" />,
  },
  {
    id: "product-5",
    img: "https://frankfurt.apollo.olxcdn.com/v1/files/sml5s3d9uccw1-UZ/image;s=644x461",
    text: "Уголок мягкий коженный",
    location: "Самарканд",
    time: "Вчера 09:36",
    cost: "4 500 000 сум",
    addFavourites: <BiHeart size="22px" />,
  },
  {
    id: "product-6",
    img: "https://frankfurt.apollo.olxcdn.com/v1/files/fnvficjzz7r22-UZ/image;s=644x461",
    text: "Детская кроват для вашых детей",
    location: "Мирзо-Улугбекский район",
    time: "6 май",
    cost: "2 000 000 сум",
    addFavourites: <BiHeart size="22px" />,
  },
  {
    id: "product-7",
    img: "https://frankfurt.apollo.olxcdn.com/v1/files/5lz2g77503x21-UZ/image;s=644x461",
    text: "Пеноплэкс , Penopleks , penoplex , xps .",
    location: "Мирабадский район",
    time: "Вчера 20:18",
    cost: "13 330 сум",
    addFavourites: <BiHeart size="22px" />,
  },
  {
    id: "product-8",
    img: "https://frankfurt.apollo.olxcdn.com/v1/files/sl5ctwt44kn63-UZ/image;s=644x461",
    text: "Продается Новые витринные холодильники 5 млн (шт)",
    location: "Бухара",
    time: "Сегодня 12:32",
    cost: "5 000 000 сум",
    addFavourites: <BiHeart size="22px" />,
  },
];

const Footer1 = [
  {
    text: "Мобильные приложения",
  },
  {
    text: "Помощь",
  },
  {
    text: "Платные услуги",
  },
  {
    text: "Бизнес на OLX",
  },
  {
    text: "Реклама на сайте",
  },
  {
    text: "Условия использования",
  },
  {
    text: "Политика конфиденциальности",
  },
  {
    text: "Партнёры",
  },
];

const Footer2 = [
  {
    text: "Как продавать и покупать?",
  },
  {
    text: "Правила безопасности",
  },
  {
    text: "Карта сайта",
  },
  {
    text: "Карта регионов",
  },
  {
    text: "Карьера в OLX",
  },
  {
    text: "Обратная связь",
  },
];

const Footer3 = [
  {
    text: GooglePlay,
  },
  {
    text: AppStore,
  },
];

export { NAVBAR_LINKS, Categories, Product, Footer1, Footer3, Footer2 };
