# Configuración del Entorno de Desarrollo para JavaScript y Jest

## Paso 1: Instalación de Node.js

Antes de comenzar, asegúrate de tener Node.js instalado en tu sistema. Jest se ejecuta en un entorno de Node.js.

### Windows y Linux

1. Descarga Node.js desde [Node.js official website](https://nodejs.org/).
2. Sigue las instrucciones de instalación.

Para verificar la instalación, abre tu terminal y ejecuta:

```bash
node --version
npm --version
```

Estos comandos deben mostrar las versiones de Node.js y npm (el gestor de paquetes de Node.js), respectivamente.

## Paso 2: Configuración del Proyecto

Crea una nueva carpeta para tu proyecto y navega a ella en tu terminal.

```bash
mkdir mi-proyecto-jest
cd mi-proyecto-jest
```
Inicializa un nuevo proyecto de Node.js:

```bash
npm init -y
```

Esto creará un archivo package.json en tu proyecto.

## Paso 3: Instalación de Jest

Instala Jest utilizando npm:

```bash
npm install --save-dev jest
```

## Paso 4: Configuración de Jest

Edita tu archivo __package.json__ para agregar un script de prueba que use Jest. Debe verse así:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

## Paso 5: Creación de Archivos de Pruebas

Crea archivos para tu código y pruebas. Por ejemplo, para el ejercicio 1:

suma.js

```javascript

function suma(a, b) {
    return a + b;
}
module.exports = suma;
```
suma.test.js

```javascript

const suma = require('./suma');

test('suma 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
});
```

Repite este proceso para los demás ejercicios.

## Paso 6: Ejecutar las Pruebas

Para ejecutar tus pruebas, utiliza el siguiente comando en la terminal:

```bash
npm test
```


Jest buscará automáticamente archivos con extensiones __.test.js__ o __.spec.js__ y ejecutará las pruebas contenidas en ellos.