# Chagenge de Alkemi

Construyamos con una api de peliculas

## Creamos un Sistema de Login

Mi primer paso fue la creacion de mi componente Login, para el cual se debe escribir la priimer letra en mayuscual ya que en React JSX nesecita diferenciar entre elementos HTML(minuscula) y componentes(Mayuscula).
Los elementos en react debe retornar un solo elemento, en caso contrario utilizamos u fragmento <></>.
Implementar funcion de tipo Handler
Evitamos que el formulario se refresque implementando eventos e.preventDefault() evita que este evento se desencadene por defecto.
Utilizamo expresion regular para validar gmail, con regexEmail.
La valicion de la informacion sumnistrada por el usuario que utiliza la aplicaccion.
Implementamos Libreria AXIOS para realizar peticones HTTP, utilizamos metodo POST, para eviar usuario y contraseña.
Instalamos las libreria sweetAlert y realizamos la modificacion con los console.log previamente implementados.
Cuando consultamos a una API esta nos devuelve un token lo que significa que enviamos la informacion correcta que el servidor estba esperando. Este es un identificador de una consulta correcta.
Utilizamos localStorage es  un objeto (solo almacena string), que nos ofrece nuestro navegador para alamacenamiento de informacion mediante el metodo setItem mediante argumentos.
Implementamos un sistema de ruteo con react-route-dom.
El objetivo del proyeto es mostrar un listado de peliculas.
Utilizamos un hooks useHistory y useEffect.
Creamos una barra de Navegacion, conocemos la etiqueta Link
Desarrollamos un Footer con enlaces tradicionales, y reconocemos el atributo rel="noopenernoreferrer"
Un componente es un bloque de codigo reutilizable.
Tnto el header como el footer tiene la peculiaridad de estar omnipresente (en todos lados) 
Aprendimos de SPA (single page application) y como realizar la omnipresncia de los componentes footer y header.
Implemantamos una libreria css para facilitar los estilos y centrarnos en la logica del proyecto.
Implementamos estilos con bootstrap, descargamos los estilos css. Utilizamos la hoja bootstrap.min.css sin depender de un CDN
Proteger una ruta, Creamos un renderizado condicional.
Guardamos la informacion de la API en un estado.
iMPLEMENTAMOS EL METODO DE ITERACION .map
Utilizamos substring me permite extraer una parte del string. como 30 letras para el h5.



## Objetivos de aprendizaje

Identificar los elementos indispensables que necesita este componente.
Entender como es que React trabaja con los formularios.
Identificar los lelementos HTML insispensables en mi componente.

## Vlidación del Formulario Login

Entender qué es la validacion de campos de un formulario.
Identificar cómo trabajar React para trabajar con formularios.
Implementar el uso de expresiones regulares básicas para la validación.
El manejos de errores es crucial para indicarle al usuario que maneja nuestra aplicacion 

## Envío de Formulario (Peticiones HTTP)

Peticiones HTTP como podemos menejarlas
identificar como podemos hacer una peticion HTTP desde REACT
Implementar la libreria AXIOS para hacer este tipo de peticiones


## Manejo de Errores (Sweet alert2)

Identificar por que el manejo de errores es crucial para la UX.
Instalar e implementar librería Sweet alert.
Gnerar mensajes de error y confirmación según la información obtenida.

## Persistencia del Token

Comprender que es un token y la imortacnia de su existencia.
Identificar que el almacenamiento local es un buen lugar para almacenar el token.
Guardar el token en el almacenamiento local del navegador.

## Redirección al componente "Listado"

Comprender como funcionan las redirecciones.
Instalar e implemantar la librería React Router Dom.
Reconocer qué componentes vamos a utilizar de la librería.
Implementear la redirección hacía el componente Listado, una vez obtenido el token.



## Armado del Encabezado y la Navegación

Identificar cuales elementos HTML componen una barra de navegacion.
Definir que componentes de React Router vamos a utilizar.
Implementar un componente Header que contenga la barra de navegación.

## Armado del pié de página

Identificar cuál es el contenido mas comúnmente presente en el footer de un sitio web.
Definir que elementos HTML necesitamos para armar el footer de nuestra aplicación.
Estructurar un componente que contenga la información requerida y la lógica necesaria para que funcione perfectamente.

## Integración del encabezado y la navegación

Identificar en que lugar de nuestra aplicación deberá implementarse el componente HEADER.
Integrar el componente HEADER al flow de nuestra Aplicación.

## Integracion de Libreria CSS
Visualizar las distintas maneras que tiene React para trabajar con CSS.
Definir cuál será la manera más cómoda para encarar el desarrollo del challenge.
Implementar la libreria de CSS que se adapte a nuestra necesidad.

## Armado de la vista
Identificar los elementos HTML que vamos  nesecitar
Definir que información nsescita el componente para trabajar
Implementar un código JSX que nos permita mostrar perefctamente la información.

## Protección de la ruta "/listado"

Entender como se protegen y el "por qué" de esta nesecidad
Definir que nesecitamos de nuestra aplicación para proteger esta ruta en particular
Generar un sistema de redirección al visitante de la app, en dado caso que no esté autenticado para visualizar esta ruta

## Obtención de datos desde la API

Conocer cuáles son los requerimientos mínimos que la API espera de nuetra. aplicación para entregarnos la información.
Reconocer cuáles partes de la respuesta de la API son las que nesecitmas en nuestra aplicación.

## Renderización de datos en componente

Entender cómo funciona la rederización de datos dinámicos.
Usar los estados de React a travéz de Hooks para alamecenar la información obtenida de la API.
Usar el estado en donde almacenamos la información para hacer un renderizado condicional de la información en nuestro componente.

## Manejo de Errores catch

Utilizamos catch para el manejo de erores e Implementamos sweetalert2.

## Ingreso al detalle de cada Ítem

Entender el detalle de cada ítem deberá ser un componente aparte.
Identificar que información necesita ese componente para mostrar la información específica.
Implementar los componentes de React Router que nos permitan navegar desde el componente Listado hasta el componente Detalle.