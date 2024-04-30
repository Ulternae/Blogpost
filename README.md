# Bienvenido a BlogPost

[BlogPost](https://ulternae.github.io/Blogpost/#/) es una aplicación diseñada para aprender sobre **autenticación** y **autorización** usando React y Tailwind CSS. Permite a los usuarios crear, editar, comentar en blogs y ver perfiles de otros usuarios, proporcionando diferentes niveles de acceso según el rol del usuario.

## Autenticación y Autorización

### Usuarios actuales

Solo el administrador puede cambiar los roles de los demás usuarios

### Usuarios y roles

| USER         | ROL                        |
|--------------|----------------------------|
| Ultis        | Admin                      |
| Eva          | Editor                     |
| Milo         | Tester                     |
| Zoe          | User                       |
| Otis         | User                       |

### Permisos por rol --- Blogs
| ROL    | Eliminar Blogs | Crear Blogs | Editar Todos los Blogs | Comentar Blog |
|--------|----------------|-------------|---------------------------------------|---------------|
| Admin  | ✅             | ✅          | ✅                                 | ✅            |
| Editor | ❌             | ❌          | ✅                               | ✅            |
| Tester | ❌             | ✅          | ❌                                 | ✅            |
| User   | ❌             | ❌          | ✅ `Si el blog es propio`    | ✅                   | ✅            |

### Permisos por rol --- Perfiles
| ROL    | Ver Perfiles | Eliminar perfil | Editar Perfil |
|--------|----------------|-------------|------------------------|
| Admin  | ✅             | ✅          | ✅                    | 
| Editor | ✅             | ❌          | ❌                     | 
| Tester | ✅             | ❌           | ❌                    | 
| User   | ✅             | ❌          | ✅ `Si el perfil es propio`   
          

## Características

-   **Navegación con React Router**: Gestiona rutas y navegación eficientemente.
-   **Gestión de Estado**: Utiliza `createContext` y React para manejar el estado global de la aplicación.
-   **Autenticación de Usuarios**: Facilita el inicio y cierre de sesión con diferentes permisos según el rol del usuario.
-   **Responsive Design**: Diseñado con un enfoque Mobile First.
-   **Blogs**: Permite a los usuarios ver los blogs publicados, comentar en ellos, y si son los autores, editarlos.
-   **Profiles**: Los usuarios pueden ver el perfil público de los usuarios registrados.

## Tecnologias Usadas

-   React
-   React Router
-   Tailwind CSS
-   Vite
-   gh-pages

## Cómo iniciar el proyecto


1.  **Clona el repositorio:**
    
    `git clone https://github.com/Ulternae/Blogpost.git`
    
2.  **Instala las dependencias:**
    
    `npm i`
    
3.  **Ejecuta el proyecto:**
    
    `npm run dev`
    

Esto correra la aplicacion en  `http://localhost:5173/Blogpost/`

## Estructura del Proyecto

Descripción de cómo los archivos y carpetas están organizados en el proyecto:
### `assets`

Contiene todos los recursos gráficos como imágenes y SVGs utilizados en la aplicación.

### `api`


Simula la interacción con una base de datos:

-   `blogdata.js`: Maneja la recuperación y gestión de los blogs.
-   `usersdata.js`: Maneja la recuperación y gestión de datos de usuarios, incluyendo roles y permisos.

### `pages`

Alberga todos los componentes de React utilizados para construir la interfaz de usuario de la aplicación. Algunos de los componentes importantes incluyen:

-   `BlogCreate`: Interfaz para que los usuarios creen nuevos blogs.
-   `Home`: La página de inicio que da la bienvenida al usuario a la aplicacion
-   `BlogPage`: Muestra todos los blogs creados
-  `Menu`: Gestiona la navegación principal del sitio.

### `utilities`

Maneja el estado global con Context API

## Vista General de la Interfaz de Usuario

![image](https://github.com/Ulternae/Blogpost/assets/164533943/9e18c18d-b8c3-43e3-8e2a-c1c022e5a0c9)
![image](https://github.com/Ulternae/Blogpost/assets/164533943/34cc8c70-44e1-4275-a349-0e29d5213efe)
