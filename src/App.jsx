import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import ContactPage from '../components/contact/ContactPage'
import LandingPage from '../components/landingPage/LandingPage'
function App() {

  return (
    <>
      <div>
        <h1>Homepage</h1>
        <nav>
          <ul>
            <li><Link to="/page1">Go to Contact Page</Link></li>
            <li><Link to="/page2">Go to Landing Page</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/page1" element={<ContactPage />} />
          <Route path="/page2" element={<LandingPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App


// export default App;


// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import ContactPage from '../components/contact/ContactPage'
// import LandingPage from '../components/landing/LandingPage'

// const App = () => {
//   return (
//     <div>
//       <h1>Homepage</h1>
//       <nav>
//         <ul>
//           <li><Link to="/page1">Go to Contact Page</Link></li>
//           <li><Link to="/page2">Go to Landing Page</Link></li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/page1" element={<ContactPage />} />
//         <Route path="/page2" element={<LandingPage />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;