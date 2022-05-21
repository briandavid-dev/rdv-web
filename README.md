## Stack

```bash
NextJS | TypeScript | AntDesign
```

## Deployment

```bash
# Install dependencies
$ yarn
# local
$ yarn dev
# generate script by production
$ yarn build

# Deployment en prod
After build steps:
1 - git push changes to git
2 - git pull in server
3 - save in server rute /repositories/rdv-web
4 - go to into /repositories/rdv-web/out/ and move all files to /public_html/
5 - update database
```

## General

```
Routes:
Local
WEB http://localhost:3000/
ADMIN http://localhost:3000/panel/login

Staging
WEB https://www.rondevenezuela.com
ADMIN https://www.rondevenezuela.com/panel/login.html

```

```
Roles
- ADMIN

Self Managed Panel Modules
- Nuestra Gente
  - Maestros Roneros
- Empresas
  - Productos
  - Premios
- Noticias
- Quienes Somos
- DOC
  - Regularizaciones
```
