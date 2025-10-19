# Auth-API ExpressJs & MongoDB

API simple pour l'authentification avec Node.js, Express et MongoDB. <br>
Architechture **MVC** respecté avec **routes/ , middlewares/ , controllers/ , models/** <br>
Elle propose trois endpoints : inscription, connexion et accueil (route protégée).

---

## Cloner le projet

```bash
git clone https://github.com/Sunu-byte-1/auth-api.git
cd auth-api
npm install
```

Avant de lancer le server avec nodemon creer un ficher **.env** et remplir avec
```.env
MONGO_URI = <ton_url_mongodb>
JWT_SECRET = <ton_secret_pour_jwt>
PORT = <le_port_sur_lequel_lancer_le_serveur>
```
------------------------------------------------------------

# endpoints

## Register - ***POST /auth/register*** 
Sur **POSTMAN** par exemple sur le body, mettez par exemple
```json
{
  "username": "monUser",
  "password": "monPassword"
}
```
Crée un nouvel utilisateur.


## Login - POST /auth/login
Toujours dans le body
```json
{
  "username": "monUser",
  "password": "monPassword"
}
```
Connecte l'utilisateur et retourne un token

## accueil - GET /auth/accueil
```headers
Authorization: Bearer <votre_token_jwt>
```
et resultat
```json
{
  "message": "Bienvenue sur la route protégée !"
}
```

