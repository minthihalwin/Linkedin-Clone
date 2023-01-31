import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
        //user is logged in
      } else {
        dispatch(logout());
        //user is logged out
      }
    });
  },[dispatch]);

  return (
    <div className="app">
      {/* Header */}
      <Header />
      {console.log(user)}
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
         
        </div>
      )}
    </div>
  );
}

export default App;
