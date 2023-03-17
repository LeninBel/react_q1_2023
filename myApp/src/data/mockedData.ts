export type Book = {
  title: string;
  image: string;
  category: string;
  author: string;
};

const books: Array<Book> = [
  {
    title: 'Python for Finance Cookbook',
    image: '3.jpeg',
    category: 'Python',
    author: 'Eryk Lewinson',
  },
  {
    title: 'JavaScript and jQuery',
    image: '7.jpeg',
    category: 'jQuery',
    author: 'Jon Duckett',
  },
  {
    title: 'Learn JavaScript Quickly',
    image: '4.jpeg',
    category: 'JavaScript',
    author: 'Code Quickly',
  },
  {
    title: 'JavaScript from Beginner to Professional:',
    image: '5.jpeg',
    category: 'JavaScript',
    author: 'Laurence Lars Svekis , Maaike van Putten , et al.',
  },
  {
    title: 'JavaScript The Definitive Guide',
    image: '6.jpeg',
    category: 'JavaScript',
    author: 'David Flanagan',
  },
];

export default books;
