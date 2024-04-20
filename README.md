# Bienvenido a este BlogPost

Esta aplicación fue echa para aprender acerca de la **autenticación** y **autorización** de cada usuario dependiendo su rol realizada con React y Tailwind , dale un vistazo [BlogPostPage](https://ulternae.github.io/Blogpost/#/),

### Usuarios actuales
Únicamente el administrado puede ser capas de cambiar los roles de los demás usuarios

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
