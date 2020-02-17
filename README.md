## Shopping-Cart Challenge

Migración de código HTML y CSS a React, implementando la lógica necesaria para hacer una lista de la compra funcional.

Herramientas utilizadas:
**HTML5 | CSS | React | API fetch | Git&Github**

"Initial implementation of the store with vanilla html and css":
![Example image](./example.png?raw=true)

Basicamente, esta web consiste en una **página principal** con dos apartados:

- **Shopping cart**: donde aparecen 4 columnas con un pequeño detalle de los productos, un contador de la cantidad, precio y precio total de cada producto.
- **Order Summary**: donde se muestra el número total de artículos que se han añadido y el precio total, además de los distintos descuentos que se activan ó desactivan según se cumplan las condiciones, y el coste total de la compra aplicandose los descuentos.

Además de la página principal, hay añadida una ruta que permite navegar a una **página con el detalle del producto** seleccionado, donde además de nombre, precio y codigo, se muestra una descripción y una imagen ampliada de dicho producto.
Esta página también cuenta con un botón para volver a la página principal, y otro botón para añadir el producto al carro de la compra y al mismo tiempo volver a la página principal.

##Sección "Detalle de Producto":
![Maqueta ordenador](src/img/imgProductDetail.png)

La **estructura de carpetas** de src se divide en:

- components: contiene los ficheros de los componentes realizados con React (App.js, Products.js, Product.js, ColProduct.js, ColQuantity.js, ColPrice.js, ColTotal.js, Summary.js, ProductDetail.js).
- img: contiene las imágenes utilizadas en el proyecto.
- services: contiene un fichero para realizar el API fetch.
- stylesheet: contiene el fichero index.css heredado.

Además, en la carpeta public, se ha incorporado una carpeta api para **crear una API** mediante un **fichero JSON** (products.json) que contiene un array "products", que a su vez contiene objetos con la información de cada producto: "name", "code", "id","image", "imageDet","description", "price", "currency" y "quantity".

##Para acceder a la página web, entrar en: https://elva-sf.github.io/shopping-cart/

## Requisitos del Challenge explicados:

**"Use the framework/library of your choice":**

El framework/library utilizado ha sido React, con el cual he estructurado el código HTML heredado en diversos componentes para así ayudar a la organización del proyecto, transformando éstos en componentes dinámicos al añadir la lógica e intentando hacerlos reutilizables en la medida de lo posible.

**"Requisites"**

- **"Add/Remove product card items using the +/- buttons"**:

Para este requisito he creado un pequeño componente (ColQuantity.js) que contiene dicho contador, al cual he añadido la lógica para que funcione correctamente:

1º Asignar una función manejadora con onClick a ambos botones, y el valor de la cantidad, al input.

2º Estas funciones son desarrolladas en el componente principal (App.js).
Había que identificar el elemento selecionado con el ratón en cada función, ya que el componente está creado tras recorrer el array de productos con un "map.". Para ello realicé una copia temporal de la lista de productos, los cuales contienen un id (entre otros valores) para luego comparar los id (los de la lista temporal con el del elemento clickado).
Una vez identificado el producto seleccionado, realicé la lógica para que la función sume ó reste 1 a la cantidad de producto.

3º Las funciones son pasadas mediante "props" desde el componente App.js a su componente bisnieto ColQuantity.js, el cual recibe también la cantidad de producto y, finalmente, pueden ser ejecutadas en dicho componente cuando el usuario seleccione el botón correspondiente (una función resta a la cantidad, y la otra suma).

- **"Calculate the totals of each product and the summary total accordingly"**:

a) Para calcular el precio total de cada producto:

1º Pasé por "props" el precio de cada producto al componente ColTotal.js y su cantidad correspondiente calculada anteriormente.

2º Asigné la multiplicación de ambos valores en una etiqueta span de HTML para pintar el resultado.

b) Para calcular el sumatorio total:

1º Pasé mediante "props" el listado de productos al componente Summary.js, para luego acceder al valor de cantidad de cada uno y sumarlos mediente el método "reduce.".

2º También accedí al precio de cada uno para luego multiplicarlo por la correspondiente cantidad, utilizando una vez más el método "reduce.", y así obtener el sumatorio total.

- **"All totals in order summary should be updated whenever a product is added or removed"**.

El componente Summary.js es funcional y se adapta cuando hay cambios en la cantidad de cada producto, cambios realizados mediante las funciones manejadoras anteriormente explicadas.

**"Bonus Points"**

1. **"Product Detail modal"**:

Sección de Detalle de Producto implementada.

Para ello he utilizado "React-Router", para que al hacer click a uno de los tres productos, la web navegue y muestre en pantalla el contenido del componente ProductDetail.js, el cual contiene una imagen ampliada del producto, el nombre, precio, descripción y código del producto seleccionado, así como un botón de cerrar (el cual navega de vuelta a la pantalla principal) y un botón de añadir al carrito de la compra (el cual tiene una doble funcionalidad, que consiste en ejecutar la función manejadora de incrementar la cantidad de cada producto, y también regresar a la pantalla principal).

Mencionar que me he servido de los recursos que he podido utilizar de la carpeta `/bonus`, pero también he tenido que reutilizar etiquetas y clases de css que ya venían dadas en la página principal según he considerado, así como también he tenido que modificar dichas clases con el atributo "style" para intentar adecuar la UI a la imagen de ejemplo que ha sido proporcionada.

2. **"Discounts"**:

"We would like to add some discounts to our products. Choose one or both and add them in your implementation":

- **"2-for-1 promotions: buy two of the same product, get one free, applied to `MUG` items"**:

Promoción de tazas implementada.

Para ello, accedí al producto "Mug" en el componente Summatory.js y realicé un cálculo ayudandome de un condicional y guardándolo en una constante, para luego sumarlo al total.

- **"bulk discounts: buying 3 or more of `TSHIRT` product, the price of that product is reduced 5%. E.g., if you buy 3 or more `TSHIRT` items, the price per unit should be 19.00€"**:

Promoción de camisetas implementada.

Para ello, accedí al producto "Shirt" en el componente Summatory.js y realicé un cálculo ayudandome de un condicional y guardándolo en una constante, para luego sumarlo al total.
