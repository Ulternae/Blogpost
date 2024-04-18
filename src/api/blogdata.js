
const blogdata = [
  {
    id: crypto.randomUUID(),
    title: 'What is Router',
    slug: 'what-is-router',
    content: 'Link and NavLink allow us to use SPA and SSR',
    author: 'Ultis',
    comments: [
      { text: 'Interesting article!', author: 'Eva', id: crypto.randomUUID() },
      { text: 'Very useful, thanks for sharing', author: 'Milo', id: crypto.randomUUID() }
    ]
  },
  {
    id: crypto.randomUUID(),
    title: 'Exploring React Hooks',
    slug: 'exploring-react-hooks',
    content: 'React hooks transform how we develop functional components and manage state and side effects.',
    author: 'Eva',
    comments: [
      { text: 'Love this approach, thanks for the article', author: 'Zoe', id: crypto.randomUUID() }
    ]
  },
  {
    id: crypto.randomUUID(),
    title: 'Introduction to Redux for Beginners',
    slug: 'introduction-redux',
    content: 'Redux is a predictable state container for JavaScript apps, and here we show you how to get started.',
    author: 'Milo',
    comments: [
      { text: 'Great introduction to Redux!', author: 'Otis', id: crypto.randomUUID() }
    ]
  },
  {
    id: crypto.randomUUID(),
    title: 'What is GraphQL?',
    slug: 'what-is-graphql',
    content: 'A detailed look at GraphQL, a powerful alternative to REST for efficient and flexible APIs.',
    author: 'Zoe',
    comments: [
      { text: 'GraphQL has completely changed the way we structure our APIs', author: 'Ultis', id: crypto.randomUUID() },
      { text: 'Love learning about GraphQL!', author: 'Eva', id: crypto.randomUUID() },
      { text: 'Can\'t wait to implement GraphQL in my projects!', author: 'Milo', id: crypto.randomUUID() },
      { text: 'GraphQL looks promising, thanks for the insights!', author: 'Otis', id: crypto.randomUUID() }
    ]
  },
  {
    id: crypto.randomUUID(),
    title: 'Fundamentals of TypeScript',
    slug: 'fundamentals-typescript',
    content: 'TypeScript offers static typing for JavaScript, improving code scalability and maintainability.',
    author: 'Otis',
    comments: [
      { text: 'Excited to learn TypeScript', author: 'Milo', id: crypto.randomUUID() }
    ]
  }
];

export { blogdata };