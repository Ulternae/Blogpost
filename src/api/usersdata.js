const userList = [
  { 
    id: crypto.randomUUID(),
    name: "Ultis", 
    role: "Admin", 
    email: "ultis@example.com", 
    password: "ultis123" 
  },
  { 
    id: crypto.randomUUID(),
    name: "Eva", 
    role: "Editor", 
    email: "eva@example.com", 
    password: "eva123" 
  },
  {     
    id: crypto.randomUUID(),
    name: "Milo", 
    role: "Tester", 
    email: "milo@example.com", 
    password: "milo123" 
  },
  { 
    id: crypto.randomUUID(),
    name: "Zoe", 
    role: "User", 
    email: "zoe@example.com", 
    password: "zoe123" 
  },
  { 
    id: crypto.randomUUID(),
    name: "Otis", 
    role: "User", 
    email: "otis@example.com", 
    password: "otis123" 
  }
];

export { userList }