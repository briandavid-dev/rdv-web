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
# - It is build with the .env local
# - Make sure .env NODE_ENV=production before build
$ yarn build

# Deployment en prod
After build steps:
1 - git push changes to git
2 - git pull in server
CASE BACK:
3 - Restart application node js
CASE FRONT:
Go to file admin and:
3 - save in server rute /repositories/rdv-web
4 - go to into /repositories/rdv-web/out/ and move all files to /public_html/
CASE DATABASE:
5 - update database
CASE .htaccess
6 - save in server rute /repositories/rdv-web
7 - go to into /repositories/rdv-web/ and move only .htaccess file to /public_html/
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

```
