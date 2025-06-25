# Product Recommendation System

A dynamic and responsive web application that allows users to post queries about products they wish to avoid and get product recommendations from other users. The platform promotes informed decision-making through community feedback and suggestions.

## 🌐 Live Site

[Visit Live site](https://query-nest-two.vercel.app/)

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

## 🛠️ Getting Started Locally

Follow these steps to run the project on your local machine:

---

### 🔽 Step 1: Clone the Repository

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

### 📦 Step 2: Install & Run the Client
- cd client
-npm install
-npm run dev

### ⚙️ Step 3: Install & Run the Server
-cd server
-npm install
-npm run start

### 🔐 Step 4: Environment Variables Setup
-client/.env
REACT_APP_API_URL=http://localhost:<SERVER_PORT>
# Other client-specific env variables like API keys

-server/.env
PORT=<SERVER_PORT>
DB_USER=<your_db_user>
DB_PASS=<your_db_password>
JWT_SECRET=<your_jwt_secret>
# Other server-specific secrets



## ✅ Deployment Checkpoints

- No CORS/404/504 issues
- Firebase domain authorization included
- Private routes protected with JWT
- Reload-safe route protection
- Fully working client and server on deployment

## 👨‍💻 Author

**Ashik Mahmud**  


