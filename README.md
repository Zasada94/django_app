<p align="center">
    <img src="./frontend/src/assets/django.svg" height="64"/>
    <img src="https://www.python.org/static/img/python-logo.png" height="64"/>
    <img src="./frontend/public/vite.svg" height="64"/>
    <img src="./frontend/src/assets/react.svg" height="64"/>
</p>

<h1 align="center">Full-stack Blog App</h1>

<p align="center">Full-stack Blog Web App written using:</p>
<p align="center" style="margin: 0;">• React.js, CSS as a front-end</p>
<p align="center">• Django & Python as a back-end</p>

## Table of contents

- [Technologies](#technologies)
- [Features](#features)
- [How to install](#how-to-install)
- [Screenshots](#screenshots)

## Technologies

Used technologies:

- Python
- Django
- React.js

Front-end part of this project was created with tool named:

- Vite

Used also:

- axios
- react-router-dom
- jwt-decode

## Features
- Making notes for logged in user
- Login and Register with users database
- Posts database
- deleting, editing, adding posts
- admin panel with users and posts

## How to install

- _Firstly clone this project to your local IDE_

Type:

```bash
git clone https://github.com/Zasada94/django_app
```

- _Secondly run back-end_

Type:

```bash
python3 -m venv venv
venv/Scripts/activate (if doesnt work on windows: Set-ExecutionPolicy Unrestricted -Scope Process)
cd backend
pip install -r requirements.txt
```

Remember to make migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

start backend:

```bash
python manage.py runserver
```

Development server will run at:

```bash
http://127.0.0.1:8000/
```

- _Thirdly, split terminal, change direction to frontend and run the front-end part using commands below_

Type:

```bash
cd frontend
```

After it install all packages, typing:

```bash
npm i
```

Now you can run your front-end part typing:

```bash
npm run dev
```

and go to development server:

```bash
http://localhost:5173/
```

## Screenshots:
![screenshot](./screens/1.png)
![screenshot](./screens/2.png)
![screenshot](./screens/3.png)
![screenshot](./screens/4.png)
