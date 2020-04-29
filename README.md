# Expat-Journal: Backend
## Pitch
```
```
 As an expat, I want to be able to show off the places I've been and remember them for myself. I have a lot of amazing pics and stories from around the world I'd like to share, but I need a site that is more personal than Instagram in order to do so.

**Product Proposal**
```
What problem does your app solve?
```
> - Expats need a page to post their travel pictures, users should be able to view multiple photos and post stories about their travels.
```

What is the mission statement?
```
> - To create a seamless web app where expats can share their experiences.

**Features**
```
What features are required for your minimum viable product?
```
> - 1. Users can register and login with their new account
> - 2. Users can create, read, upload, and delete photos and stories/blogs
> - 3. Users have the ability to view other peoples blogs


### ENDPOINTS

***Deployed Heroku App:*** `https://expat-journal-app.herokuapp.com/`

**REGISTER New User:** 
>   - POST: `/api/auth/register`

```
    {
        "fullname": "New User",
        "username": "newuser",
        "password": "password"
    }
```

- After a new user registers, this is how the data/token looks.

```
    {
        "id": 7,
        "fullname": "User Test",
        "username": "newuser",
        "password": "$2a$08$1I.ovnZaVLXeiu04U/KNDuapXRn8TfMnLyiFKp17V4eYBkvetpjJa"
    }
```

**LOGIN User:** 
>   - POST: `/api/auth/login`

```
    {
        "username": "newuser",
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
        "title": "TEST",  --> (required)
        "textbox": "TEST ",  --> (required)
        "created_at": "Apr 26 2020",   --> (required)
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
        "created_at": "Apr 26 2020",
        "img": "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "user_id": 1
    }

```

**DELETE - Remove specified blog post from user:**
>   - DELETE: `/api/users/:id/blogs/:blogid`

**DELETE - Remove User Account from Database:**
>   - DELETE: `/api/users/:id`









