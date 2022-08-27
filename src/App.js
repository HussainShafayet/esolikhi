import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import Home from './components/pages/Home';
import Posts from './components/pages/Posts';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="posts" element={<Posts />} />
              <Route exact path="signin" element={<SignIn />} />
              <Route exact path="signup" element={<SignUp />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
