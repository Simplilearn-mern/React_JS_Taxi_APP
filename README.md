🚕 Car Booking Application

A simple Car/Taxi Booking Application built using React.js and JSON Server. The application allows users to log in, book available cabs, view booking details, check booking history, and log out.

✨ Features

🔐 User/Admin Login

🚖 Book a Cab

🚗 Select Available Cab

👤 View User Details

👨‍✈️ View Driver Details

📋 View Booking History

🚪 Logout

⚡ React-based Frontend

🗄️ JSON Server Backend

🛠️ Technologies Used

React.js

JavaScript

HTML5

CSS3

JSON Server

Vite

📂 Project Structure
Car-Booking-Application/
│
├── backend/
│   └── db.json
│
├── taxi-booking/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
└── README.md

⚙️ Setup & Installation
1. Start Backend Server

Navigate to the backend folder:

cd backend


Start JSON Server:

json-server --watch db.json


Or, depending on your JSON Server version:

json-server db.json


The backend server will normally run at:

http://localhost:3000

2. Start Frontend

Open a new terminal and navigate to the React application:

cd taxi-booking


Install dependencies:

npm install


Start the React development server:

npm run dev


The application will normally be available at:

http://localhost:5173


Open the URL shown in your terminal in a web browser.

🔐 Login Credentials

Use the following credentials to log in:

Username: admin@gmail.com

Password: admin@123

After successful login, you will be redirected to the Dashboard.

Note: These credentials are for development/demo purposes only. Do not use hard-coded credentials in a production application.

🚖 Booking a Cab

Log in to the application.

Click on Book Cab.

Fill in the required details.

Select an available cab.

Confirm the booking.

After successful booking, you can view:

User details

Driver details

Booking information

📋 View Booking History

To view your bookings:

Navigate to My Bookings.

Review all your current and previous bookings.

View the details of each booking.

🚪 Logout

To log out of the application:

Click on Logout.

You will be redirected to the Login Page.

▶️ Running the Application

Run the backend and frontend in separate terminals.

Terminal 1 — Backend
cd backend
json-server --watch db.json

Terminal 2 — Frontend
cd taxi-booking
npm install
npm run dev


Then open the frontend URL provided by Vite.

📝 Important Notes

Make sure Node.js and npm are installed.

Make sure JSON Server is running before using the application.

Keep both frontend and backend servers running.

Make sure the API URL configured in the React application matches the JSON Server URL.

Run npm install before starting the frontend if dependencies are not installed.

👨‍💻 Author

Your Name : Gayatri Singh

