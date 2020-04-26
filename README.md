# Expat-Journal-BE


### Endpoints

***Deployed Heroku App:*** `https://expat-journal-app.herokuapp.com/`

**REGISTER New User:** 
>   - POST: `/api/auth/register`

```
    {
        "fullname": "User Test",
        "username": "user2",
        "password": "password"
    }
```

- After a new user registers, this is how the data/token looks.

```
    {
        "id": 2,
        "fullname": "User Test",
        "username": "user2",
        "password": "$2a$08$1I.ovnZaVLXeiu04U/KNDuapXRn8TfMnLyiFKp17V4eYBkvetpjJa"
    }
```

**LOGIN User:** 
>   - POST: `/api/auth/login`

```
    {
        "username": "user2",
        "password": "password"
    }
```

**GET - Retrieve All Users:**
>   - GET: `/api/users`

**GET - Retrieve User By Id:**
>   - GET: `/api/users/:id`

**GET - Retrieve ALL Blogs:**
>   - GET: `/api/blogs`

**GET - Retrieve Blog posts for specific user:**
>   - GET: `/api/users/:id/blogs`

**POST - Create new blog post for user:**
>   - POST: `/api/users/:id/blogs`

```
    {
        "title": "TEST",
        "textbox": "TEST ",
        "created_at": "Apr 26 2020",
        "img": "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    }

```
**PUT - Update blog post for user:**
>   - PUT: `/api/users/:id/blogs/:blogid`

```
    {
        "id": 3,
        "title": "TEST",
        "textbox": "TESSTTT ",
        "created_at": "2020-04-26",
        "img": "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "user_id": 1
    }

```

**DELETE - Remove specified blog post from user:**
>   - DELETE: `/api/users/:id/blogs/:blogid`

**DELETE - Remove User Account from Database:**
>   - DELETE: `/api/users/:id`









