## Shopping-Cart Challenge

Migración de código html y css a React, añadiendo la implementación necesaria para hacer una lista de la compra funcional.
Herramientas utilizadas:
**HTML5 | CSS | React | API fetch | Git&Github**

"Initial implementation of the store with vanilla html and css":
![Example image](./example.png?raw=true)

La página web consiste básicamente en una **página principal** con dos secciones:

- **Sección de Shopping cart**: donde aparecen 4 columnas con el detalle de los productos, un contador de la cantidad de cada producto, el precio y el total.
- **Sección de Order Summary**: donde se muestra el número total de artículos que se han añadido y el precio total, además de los distintos descuentos que se activan ó desactivas según se cumplan las condiciones, y el coste total de la compra aplicandose los descuentos.

Además de la página principal, se ha añadido una ruta que permite navegar a una **página con el detalle del producto** seleccionado, donde además de nombre, precio y codigo, se muestra una descripción y una imagen ampliada de dicho producto.
Esta página también cuenta con un botón para volver a la página pricipal y otro botón para añadir el producto al carro de la compra y volver al mismo tiempo a la página principal.

##Sección "Detalle de Producto":
![Maqueta ordenador](src/img/imgProductDetail.png)

La estructura de carpetas de src se divide en:

- components: contiene los ficheros de los componentes realizados con React (App.js, Products.js, Product.js, ColProduct.js, ColQuantity.js, ColPrice.js, ColTotal.js, Summary.js, ProductDetail.js).
- img: contiene las imágenes utilizadas en el proyecto.
- services: contiene un fichero para realizar el API fetch.
- stylesheet: contiene el fichero index.css heredado.

Además, en la carpeta public, he incorporado una carpeta api para **crear una API** mediante un **fichero JSON**(products.json) que contiene un array "products", que a su vez contiene objetos con la información de cada pruducto: "name", "code", "id","image", "imageDet","description", "price", "currency" y "quantity".

##Para acceder a la página web, entrar en: https://elva-sf.github.io/shopping-cart/

## Requisitos del Challenge explicados:

**Use the framework/library of your choice:**
El framework/library utilizado ha sido React, con el cual he estructurado el código HTML heredado en diversos componentes para así ayudar a la organización del proyecto, transformando éstos en componentes dinámicos al añadirle la lógica e intentando hacerlos reutilizables en la medida de lo posible.

**Requisites**

- "Add/Remove product card items using the +/- buttons":

Para este requisito he creado un pequeño componente (ColQuantity.js) que contiene dicho contador, al cual he añadido la lógica para que funcione correctamente:

1º Asignar una función manejadora con onClick a ambos botones, y el valor de la cantidad al input.

2º Estas funciones son desarrolladas en el componente principal (App.js).
En cada función había que identificar el elemento selecionado con el click del ratón (ya que el componente está creado tras recorrer el array de productos con un "map.") mediante la creación de una copia temporal de la lista de productos, los cuales contienen un id (entre otros valores) para luego comparar los id e identificar el elemento.
Una vez identificado el producto seleccionado, se le indica a función que sume/reste 1 a la cantidad del elemento.

3º Las funciones son pasadas mediante "props" desde el componente App.js a su componente bisnieto ColQuantity.js, el cual recibe también la cantidad del elemento, y finalmente pueden ser ejecutadas en dicho componente (una resta la cantidad, y la otra la suma) cuando el usuario seleccione el botón correspondiente.

- Calculate the totals of each product and the summary total accordingly:

-> Para calcular el precio total de cada producto:

1º Al componente creado llamado ColTotal.js le he pasado por "props" el precio de cada producto y la cantidad correspondiente calculada anteriormente.

2º Luego asigné la multiplicación de ambos valores en una etiqueta span de HTML para pintar el resultado.

-> Para calcular el sumatorio total:

1º He creado un componente llamado Summary.js, le he pasado mediante "props" el listado de productos, he accedido al valor de cantidad de cada uno y los he sumado mediente el método "reduce.".

2º También he accedido al precio de cada uno y lo he multiplicado por la correspondiente cantidad, utilizando una vez más el método "reduce.", para así obtener el sumatorio total.

- All totals in order summary should be updated whenever a product is added or removed.

El componente Summary.js es funcional y se adapta cuando hay cambios en la cantidad de cada producto, cambios realizados mediante las funciones manejadoras anteriormente explicadas.

**Bonus Points**

1. Product Detail modal:

Sección de Detalle de Producto implementada.
Para ello he utilizado "React-Router" para que al darle click a uno de los tres productos, la web navegue y muestre en pantalla el contenido del componente ProductDetail.js, el cual contiene una imagen ampliada del producto, el nombre, precio, descripción y código del producto seleccionado, así como un botón de cerrar (el cual navega de vuelta a la pantalla principal) y un botón de añadir al carrito de la compra (el cual tiene una doble funcionalidad, que consiste en ejecutar la función manejadora de incrementar la cantidad de cada producto, y en regresar también a la pantalla principal).

Mencionar que me he servido de los recursos que he podido utilizar de la carpeta `/bonus`, pero también he tenido que re-utilizar etiquetas y clases de css que ya venían dadas para la página principal según he considerado, así como también he tenido que modificar dichas clases con el atributo "style" para intentar adecuar la UI a la imagen de ejemplo dada.

2. Discounts
   We would like to add some discounts to our products. Choose one or both and add them in your implementation:

- 2-for-1 promotions: buy two of the same product, get one free, applied to `MUG` items.

Promoción de tazas implementada. Para ello accedí al producto "Mug" en el componente Summatory.js e hice el cálculo, ayudandome de un condicional, y guardandolo en una constante para luego sumarlo al total.

- bulk discounts: buying 3 or more of `TSHIRT` product, the price of that product is reduced 5%. E.g., if you buy 3 or more `TSHIRT` items, the price per unit should be 19.00€.

Promoción de camisetas implementada. Para ello accedí al producto "Shirt" en el componente Summatory.js e hice el cálculo, ayudandome de un condicional, y guardandolo en una constante para luego sumarlo al total.
