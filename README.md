### API

```
- gateway-service
    - POST /history (создаём запись истории, передаём userId и videoId)
    - GET /history?userId=&limit=  (получаем историю определённого юзера)
    http://127.0.0.1:3008
    http://127.0.0.1:3008/gateway/health

```

```
- history-service
- API:
    - POST /history (создаём запись истории, передаём userId и videoId)
    - GET /history?userId=&limit=  (получаем историю определённого юзера)
    GET: http://127.0.0.1:3008/history/health
    POST: http://127.0.0.1:3008/history
    body = {
        "userId": 1,
        "videoId": 1
    }

    GET: http://127.0.0.1:3008/history?userId=1&limit=2
```

```
- subscription-service
- API:
    - POST /subscriptions (создаём подписку)
    - GET /subscriptions?userId=&limit= (получаем подписки определённого юзера)
    - DELETE /subscriptions/:id (удаляем подписку)

    GET: http://127.0.0.1:3008/subscriptions/health
    POST: http://127.0.0.1:3008/subscriptions
    body = {
        "userId": 1,
        "subscriptionId": 1
    }
    GET: http://127.0.0.1:3008/subscriptions?userId=1&limit=2
    DELETE: http://127.0.0.1:3008/subscriptions?userId=1&id=1
```

```
- user-service
- API:
    - POST /users (создаём пользователя)
    - GET /users/:id (получаем пользователя, его подписки, видео и историю просмотров)
    - GET /users/:id/history (получаем историю просмотров пользователя)
    - GET /users/:id/subscriptions (получаем подписки пользователя)
    - GET /users/:id/videos (получаем видео пользователя)

    GET:
    POST: http://127.0.0.1:3008/users
    body = {
        "name": "alex",
        "email": "alex@i.ua"
    }
    GET: http://127.0.0.1:3008/users?id=1
    GET: http://127.0.0.1:3008/users/history?id=1
    GET: http://127.0.0.1:3008/users/subscriptions?id=1
    GET: http://127.0.0.1:3008/users/videos?id=1

```

```
- video-service
- API:
    - POST /videos (загружаем видео пользователя)
    - DELETE /videos/:id (удаляем определённое видео)
    - GET /videos?userId= (получаем видео определённого пользователя)
    - GET /videos/:id - отмечаем просмотр видео пользователем и (в случае выполнения домашки со * в потоках) запускаем стрим.

    GET: http://127.0.0.1:3008/videos/health
    POST: http://127.0.0.1:3008/videos
    body = file ('avi', 'mp4', 'mov')
    DELETE: http://127.0.0.1:3008/videos?id=1
    GET: http://127.0.0.1:3008/videos?id=1
    GET: http://127.0.0.1:3008/videos/video?id=1
```
