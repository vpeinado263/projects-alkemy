# Chagenge de Alkemi

Conaumimos una api de peliculas

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


## Manejo de Errores (Sweet alert)

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



### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
