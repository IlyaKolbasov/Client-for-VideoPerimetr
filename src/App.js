import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React, { useState } from "react";

const userFromStorage = localStorage.getItem('user')
const initialValue = userFromStorage !== null ? JSON.parse(userFromStorage) : {}

function App() {
  // const [user, setUser] = useState(initialValue);
    const [user, setUser] = useState(initialValue)
   console.log(user)
  return (
    <div className="App">
        <BrowserRouter>
            <Header user={user} setUser={setUser} />
            <AppRouter />
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
