# Expat-Journal-BE


### Endpoints

**Expat Journal Backend:** `https://expat-journal-app.herokuapp.com/`

**Register New User:** 
    - POST: `/api/auth/register`
    {
        "fullname": "User Test2",
        "username": "user2",
        "password": "password"
    }

**Login User:** 
    - POST: `/api/auth/login`
    {
        "username": "user1",
        "password": "password"
    }