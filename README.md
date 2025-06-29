# Product Recommendation System

A dynamic and responsive web application that allows users to post queries about products they wish to avoid and get product recommendations from other users. The platform promotes informed decision-making through community feedback and suggestions.

## 🌐 Live Site

[Visit Live Website](https://query-nest-a854a.web.app/)

## 🚀 Project Purpose

The Product Recommendation System helps users to:
- Post queries about products they are not satisfied with.
- Get better product alternatives through recommendations.
- Interact with community queries.
- Manage personal queries and recommendations with full CRUD functionality.

## ✨ Key Features

### Authentication
- Firebase Authentication with Email/Password and Google Login.
- JWT-based authentication to secure private routes.
- User state maintained on route reloads using cookies and JWT.

### Core Functionality
- **Add Query**: Authenticated users can submit queries about unsatisfactory products.
- **My Queries**: Users can view, update, and delete their own queries.
- **All Queries**: View all user queries with search and layout toggle features.
- **Query Details**: See query details and user information, and add/view recommendations.
- **Add Recommendations**: Suggest better alternatives with reasons and media.
- **My Recommendations**: View and delete personal recommendations.
- **Recommendations For Me**: View recommendations made by others for your queries.

### Extra Home Page Components
- **TrendingDiscussions**: Highlights popular discussions.
- **WhyChooseUs**: Emphasizes the platform's value and vision.

### UI/UX
- Beautiful, responsive design for mobile, tablet, and desktop.
- 404 error page for invalid routes.
- Navbar and footer with dynamic rendering based on login status.
- Conditional rendering of routes and components.

### Security
- Firebase config and MongoDB URI stored securely using `.env` files.
- JWT token stored in cookies for authentication.
- Protected backend routes with token verification middleware.

### Tools & Technologies

**Client Side**
- React
- React Router
- Firebase Authentication
- Tailwind CSS
- Axios
- React Hot Toast
- React Icons
- SweetAlert2

**Server Side**
- Node.js
- Express.js
- MongoDB
- CORS
- JWT
- dotenv

## 📦 NPM Packages Used

**Frontend**
- axios
- react-router-dom
- react-hot-toast
- sweetalert2
- react-icons
- firebase

**Backend**
- express
- cors
- jsonwebtoken
- mongodb
- dotenv
- cookie-parser

## 📁 Folder Structure Highlights

- `/client`
  - `components/` – Reusable UI components
  - `pages/` – Route-based components (Home, Queries, Login, etc.)
  - `hooks/` – Custom hooks like useAuth
- `/server`
  - `routes/` – Query and recommendation APIs
  - `middlewares/` – JWT and Firebase verification
  - `models/` – MongoDB collections and schema logic

## 📜 Functional Requirements Covered

- Firebase & JWT authentication
- Add, update, delete queries
- Add and delete recommendations
- Personal and global view of recommendations
- Recommendation count increment/decrement
- Responsive UI
- Search and layout toggle on All Queries
- 404 error handling
- Environment variable security
- Deployment with CORS and route reload support

## 🛠️ Local Installation and Setup

## 1. Clone the repository


## 2. Setup the Client
- cd client
- npm install

- Create a .env file inside the /client folder with:
- REACT_APP_API_URL=http://localhost:5000
- REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
- REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
- REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
- REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
- REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
- REACT_APP_FIREBASE_APP_ID=your_firebase_app_id

- Start the React client:
- npm run dev

## 3. Setup the Server
- cd ../server
- npm install

- Create a .env file inside the /server folder with:
- PORT=5000
- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret
- FIREBASE_SERVICE_ACCOUNT=your_firebase_service_account_json_as_string_or_path

- Start the server:
- npm run start

 - Open in Browser
 - Go to http://localhost:3000 to use the application locally.
- 

## ✅ Deployment Checkpoints

- No CORS/404/504 issues
- Firebase domain authorization included
- Private routes protected with JWT
- Reload-safe route protection
- Fully working client and server on deployment

## 👨‍💻 Author

**Ashik Mahmud**  

