Proyecto RODAR

Descripción

Este es un proyecto de una tienda en línea de bicicletas llamado RODAR. La web incluye varias páginas como home, productos, detalle y contacto, todas estilizadas para mantener una apariencia y sensación uniformes. El proyecto utiliza HTML, CSS y JavaScript junto con Bootstrap para una rápida y eficiente creación de interfaces.

Estructura del Proyecto
arduino

Copiar código

CILSA_FULLSTACK/
├── page/
│   ├── home.html
│   ├── productos.html
│   ├── detalle.html
│   └── contacto.html
├── style/
│   ├── general.css
│   ├── productos.css
│   └── detalle.css
├── script/
│   ├── productos.js
│   └── detalle.js
├── README.md
└── index.html

Descripción de Archivos

page/home.html: Página de inicio de la tienda.
page/productos.html: Página donde se muestran los productos disponibles.
page/detalle.html: Página de detalle de un producto específico.
page/contacto.html: Página de contacto.
style/general.css: Hoja de estilos general que contiene estilos comunes para todas las páginas.
style/productos.css: Hoja de estilos específica para la página de productos.
style/detalle.css: Hoja de estilos específica para la página de detalles.
script/productos.js: Script que maneja la lógica de la página de productos.
script/detalle.js: Script que maneja la lógica de la página de detalle.
README.md: Archivo de documentación del proyecto.

Instalación
Para ejecutar este proyecto localmente, sigue los siguientes pasos:

Clona el repositorio:

Copiar código
git clone https://github.com/tu-usuario/rodar.git

Navega al directorio del proyecto:

Copiar código
cd CILSA_FULLSTACK

Abre el proyecto en tu editor de código preferido (por ejemplo, Visual Studio Code).

Uso
Para visualizar tu proyecto localmente y compartirlo con otros:

Instala localtunnel:

Copiar código

npm install -g localtunnel

Inicia un servidor local (puedes usar la extensión Live Server de Visual Studio Code):

Copiar código
live-server

Abre una terminal y ejecuta:

Copiar código
lt --port 5500

Sustituye 5500 con el puerto en el que está corriendo tu servidor local si es diferente.

Comparte la URL generada por localtunnel con tu cliente.

Estilos y Diseño

Para mantener un estilo armonioso en todas las páginas, se ha definido un archivo CSS general general.css. Los botones, colores y tipografías están unificados en este archivo. Se ha utilizado Bootstrap para acelerar el desarrollo y mantener consistencia en los componentes.

Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para cualquier mejora o corrección.

Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

Contacto

Para cualquier consulta, puedes contactarme a través del formulario de contacto en la página contacto.html o a través de GitHub.