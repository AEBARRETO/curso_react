
![Logo](/public/logo.jpg)

# Barreto's Store
Realizado en el curso de React de Coder House 2022

## Descripcion del proyecto
Barreto's Store es una aplicación web que permite ver, ver por categorías productos de electrónica para luego agregarlo ir agregando a un carrito de orden de compra y al final luego de ingresar los datos personales del cliente genera una nueva orden de compra. 


## Setup
Ejecutar en terminal lo siguiente
```
git clone https://github.com/AEBARRETO/curso_react
cd curso_react
npm install
cp .env.example .env
npm start
```
Con esto la aplicación corre en el navegador por defecto. 

## Estructura en base de FireStore Database
### Categorias:
  - id (String): Generado automaticamente. 
  - nombre (String): Nombre de la categoría.
### Productos:
- id (String): Generado automaticamente. 
- categoria (String):  Categoría del producto.
- img (String): URL de la imagen del producto. 
- nombre (String): Nombre del producto.
- precio (Number): Precio del producto.
- stock  (Number): Unidades disponibles del producto. 

### Order:
- comprador (Mapa): Datos del comprador.
- -	email (String): Email del comprador.
- -	nombre (String): Nombre del Comprador.
- -	telefono (Number): Nro de teléfono.
- fecha (DateTime) : Fecha de creación. 
- total (Number): Importe total de la orden de compra.
- items (Mapa): Items de la compra.
- - id ( String ): Generado automaticamente. 
- - categoria (String):  Categoría del producto.
- - img (String): URL de la imagen del producto. 
- - nombre (String): Nombre del producto.
- - precio (Number): Precio del producto.
- - stock  (Number): Unidades disponibles del producto al momento de la compra. 
- - seleccionado (Number): Unidades solicitadas. 


## Dependencias
This project uses the following dependencies
- Data storage : [firebase](https://github.com/firebase/firebase-js-sdk) 
  Para el almacenamiento de productos, categorías y ordenes de compra. 
- Fromulario: [react-hook-form](https://react-hook-form.com/)
  Usado para recuperar y validar datos un formulario.
- Routing: [react-router-dom](https://github.com/remix-run/react-router)
  Manejador de rutas. 
- React Bootstrap : [react-bootstrap](https://react-bootstrap.github.io)
  Estilos

