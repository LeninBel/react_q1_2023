export type Book = {
  title: string;
  image: string;
  category: string;
  author: string;
  releaseDate?: string;
};

const books: Array<Book> = [
  {
    title: 'Python for Finance Cookbook',
    image: new URL(`../assets/3.jpeg`, import.meta.url).href,
    category: 'Python',
    author: 'Eryk Lewinson',
  },
  {
    title: 'JavaScript and jQuery',
    image: new URL(`../assets/7.jpeg`, import.meta.url).href,
    category: 'jQuery',
    author: 'Jon Duckett',
  },
  {
    title: 'Learn JavaScript Quickly',
    image: new URL(`../assets/4.jpeg`, import.meta.url).href,
    category: 'JavaScript',
    author: 'Code Quickly',
  },
  {
    title: 'JavaScript from Beginner to Professional:',
    image: new URL(`../assets/5.jpeg`, import.meta.url).href,
    category: 'JavaScript',
    author: 'Laurence Lars Svekis , Maaike van Putten , et al.',
  },
  {
    title: 'JavaScript The Definitive Guide',
    image: new URL(`../assets/6.jpeg`, import.meta.url).href,
    category: 'JavaScript',
    author: 'David Flanagan',
  },
];

export default books;
