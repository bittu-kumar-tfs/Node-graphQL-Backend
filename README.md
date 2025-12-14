# Node.js Authentication Backend (ESM)

A RESTful API backend built with Node.js, Express, and MongoDB for user authentication and management.

## Features

- ✅ User Registration & Login
- ✅ JWT-based Authentication
- ✅ HTTP-only Cookies for Token Storage
- ✅ Password Hashing with bcrypt
- ✅ Protected Routes with Middleware
- ✅ ES Modules (ESM) Support
- ✅ MongoDB Integration with Mongoose
- ✅ CORS Configuration

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **dotenv** - Environment variable management
- **cookie-parser** - Cookie parsing middleware
- **cors** - Cross-origin resource sharing

## Project Structure

```
├── config/
│   └── db.js                 # Database connection
├── controllers/
│   └── auth.controller.js    # Authentication logic
├── middleware/
│   └── auth.middleware.js    # Authentication middleware
├── models/
│   └── User.js              # User schema
├── routes/
│   └── auth.route.js        # API routes
├── utils/
│   └── jwt.js               # JWT utilities
├── .env                     # Environment variables
├── server.js                # Application entry point
└── package.json             # Dependencies
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Node-graphQL-Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=3000
   NODE_ENV=development
   CLIENT_URL=http://localhost:4200
   ```

4. **Start the server**
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`

## API Endpoints

### Public Routes

#### 1. **Test API**
```http
GET /api/test
```
**Response:**
```json
{
  "message": "Test API is working!",
  "timestamp": "2025-12-14T10:30:00.000Z"
}
```

#### 2. **Register User**
```http
POST /api/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```
**Response:**
```json
{
  "message": "User registered"
}
```

#### 3. **Login**
```http
POST /api/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```
**Response:**
```json
{
  "message": "Login successful"
}
```
*Sets HTTP-only cookie with JWT token*

#### 4. **Logout**
```http
POST /api/logout
```
**Response:**
```json
{
  "message": "Logged out"
}
```

### Protected Routes (Requires Authentication)

#### 5. **Dashboard**
```http
GET /api/dashboard
Cookie: token=<jwt_token>
```
**Response:**
```json
{
  "message": "Welcome to dashboard",
  "userId": "user_id_here"
}
```

#### 6. **Get All Users**
```http
GET /api/users
Cookie: token=<jwt_token>
```
**Response:**
```json
{
  "message": "Users retrieved successfully",
  "count": 5,
  "users": [
    {
      "_id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "createdAt": "2025-12-14T10:00:00.000Z",
      "updatedAt": "2025-12-14T10:00:00.000Z"
    }
  ]
}
```

## Authentication Flow

1. **Registration**: User creates account with name, email, and password
2. **Login**: User authenticates and receives JWT token in HTTP-only cookie
3. **Protected Access**: Token is automatically sent with subsequent requests
4. **Logout**: Cookie is cleared from client

## Security Features

- 🔒 Password hashing using bcrypt (10 rounds)
- 🔒 HTTP-only cookies to prevent XSS attacks
- 🔒 JWT token with 1-day expiration
- 🔒 Password fields excluded from user queries
- 🔒 Secure cookies in production environment
- 🔒 SameSite cookie policy

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/mydb` |
| `JWT_SECRET` | Secret key for JWT signing | `your_secret_key` |
| `PORT` | Server port number | `3000` |
| `NODE_ENV` | Environment mode | `development` or `production` |
| `CLIENT_URL` | Frontend URL for CORS | `http://localhost:4200` |

## Error Handling

- **401 Unauthorized**: Invalid credentials or missing token
- **500 Internal Server Error**: Database or server errors
- **201 Created**: Successful user registration
- **200 OK**: Successful operations

## Development

The project uses ES Modules (ESM). Make sure to:
- Use `.js` extension in all import statements
- Use `import/export` instead of `require/module.exports`
- `"type": "module"` is set in package.json

## License

ISC

## Author

Bittu Kumar

---

**Note**: This is a basic authentication system. For production use, consider adding:
- Input validation
- Rate limiting
- Refresh tokens
- Email verification
- Password reset functionality
- Request logging
- Error monitoring
