# Expat-Journal-BE


### Endpoints

*Expat Journal Backend:* `https://expat-journal-app.herokuapp.com/`

**REGISTER New User:** 
>   - POST: `/api/auth/register`

```
    {
        "fullname": "User Test2",
        "username": "user2",
        "password": "password"
    }
```

- After a new user registers, this is how the data and token are returned.

```
    {
        "id": 2,
        "fullname": "User Test2",
        "username": "user2",
        "password": "$2a$08$1I.ovnZaVLXeiu04U/KNDuapXRn8TfMnLyiFKp17V4eYBkvetpjJa"
    }
```
**LOGIN User:** 
>   - POST: `/api/auth/login`

```
    {
        "username": "user1",
        "password": "password"
    }
```