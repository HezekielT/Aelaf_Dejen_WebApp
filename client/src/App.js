
// import NavBar from './screens/navbar';
// import Footer from './screens/footer';
// import Dashboard from './screens/dashboard';
// import Admin_Dashboard from './screens/Admin_Dashboard';
// import Manage_Contents from './components/Admin/manage_web_content';
// import Manage_Account from './components/Admin/Manage_Account';
// import Home from './components/Home';
// import ContactUs from './components/ContactUs';
import Navigator from './Navigator';
import { Outlet } from 'react-router-dom';
import { RefProvider } from './context/refProvider';

function App() {
  return (
    <RefProvider>
      <Navigator />
      {/* <NavBar /> */}
      {/* <Admin_Dashboard /> */}
      {/* <Manage_Contents /> */}
      {/* <Dashboard /> */}
      {/* <Manage_Account /> */}
      {/* <Footer /> */}
      {/* <Admin_Dashboard /> */}
    </RefProvider>
  );
}

export default App;
