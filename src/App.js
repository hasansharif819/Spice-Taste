import './App.css';
import {Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home/Home';
import Header from './Shared/Header/Header';
import ManageInventories from './components/ManageInventory/ManageInventories';
import Footer from './Shared/Footer/Footer';
import Login from './components/Login/Login/Login';
import Signup from './components/Login/Signup/Signup';
import Contact from './components/Contact/Contact';
import AllInventories from './components/AllInventories/AllInventories';
import InventoryDetails from './components/AllInventories/InventoryDetails';
import AddItem from './components/MyPage/AddItem';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import UserItem from './components/MyPage/UserItem';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Blogs from './components/Blog/Blogs';
import AddBlog from './components/Blog/AddBlog';
import UserMessage from './components/Contact/UserMessage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/allInventories' element={<AllInventories />}></Route>

        <Route path='/allinventories/:inventoryId' element={<RequireAuth>
          <InventoryDetails />
        </RequireAuth>}></Route>

        <Route path='/manageInventory' element={
          <RequireAuth><ManageInventories /></RequireAuth>
        }></Route>
        
        <Route path='/contact' element={
          <RequireAuth><Contact /></RequireAuth>
        }></Route>

        <Route path='/addItem' element={
        <RequireAuth><AddItem /></RequireAuth>
        }></Route>

        <Route path='/useritem' element={
        <RequireAuth><UserItem /></RequireAuth>
        }></Route>
        <Route path='/userMessage' element={
        <RequireAuth><UserMessage /></RequireAuth>
        }></Route>

        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/addBlog' element={<AddBlog />}></Route>


        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>

        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
