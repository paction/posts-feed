## posts Service

# Installation
```
npm install express mysql2 dotenv cors knex nanoid
```

# Running

Run the service with:
```
node server.js
```

The server will be running on 8071 port

---

To create migration run:
```
npx knex migrate:make create_posts_table
```

Run migrations:
```
npx knex migrate:latest
```
or
```
npx knex migrate:latest --env production
```


Rollback migration:
```
npx knex migrate:rollback
```


---
## Seeds
npx knex seed:make initial_seed
npx knex seed:run

---

## Create a new post example request
```
curl -X POST http://localhost:8071/api/posts \
-H "Content-Type: application/json" \
-d '{
  "owner_user_uuid": "V1StGXR8_Z5jdHi6B-myT",
  "company_id": "bMGJ4vsKbGrrdv-L8Qqmw",
  "type": 1,
  "title": "Sample post Title",
  "description": "This is a description for the sample post.",
  "poster": "https://example.com/poster.png",
  "poster_title": "Sample Poster",
  "category_id": 1,
  "category_model": "News",
  "published": true
}'
```
