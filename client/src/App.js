import logo from './logo.svg';
import './App.css';
import NavBar from './screens/navbar';
import Footer from './screens/footer';
import Dashboard from './screens/dashboard';
import Admin_Dashboard from './screens/Admin_Dashboard';
import Manage_Contents from './components/Admin/manage_web_content';

function App() {
  return (
    <>
      {/* <NavBar /> */}
      {/* <Admin_Dashboard /> */}
      <Manage_Contents />
      {/* <Dashboard /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
