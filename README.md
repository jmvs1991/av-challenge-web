# America virtual challenge (web)

Proyecto web para mostrar el pronostico de tiempo por zonas.

Tecnologías utilizadas:

- ReactJS
- Bootstrap
- Sass(scss)

### Requerimientos previos

Tener instalado NodeJS como manejador de paquetes.

### Ejecución de proyecto.

1. Con una consola de comandos ubicarse dentro la carpeta av-challenge-web a nivel del archivo package.json.
2. Ejecutar el comando 'npm install'
3. Crear un archivo .env.local a nivel del archivo package.json con la siguiente estructura:

    REACT_APP_API_URL={UrlApi} Url para consumir los metodos expuestos por la api (La url debe ser tomado hasta el segmento api).

    Ejemplo: https://localhost:44338/api

    REACT_APP_CLAVE_ENC={claveEnc} Como los datos se persisten en localstorage los mismos se guardan encriptado, esta clave es la llave de encriptación.

    Ejemplo: avChallenge
4. Ejecutar el comando 'npm start'