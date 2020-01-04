import React from 'react';
import './App.css';
import UserForm from "./components/UserForm";

function App() {
  return (
      <div className="main">
          <section className="signup">
              <div className="container">
                  <div className="signup-content">
                        <UserForm />
                  </div>
              </div>
          </section>
      </div>
  );
}

export default App;
