import './App.css';
import {Route,Routes,Link} from "react-router-dom"
import AdminLayout from './layout/Admin';
import WebLayout from './layout/Website';
import WebAbout from './pages/WebPage/About';
import WebHome from './pages/WebPage/Home';
import WebContact from "./pages/WebPage/Contact"
import AdminContact from './pages/AdminPages/Contact';
import AdminHome from './pages/AdminPages/Home';
import AdminProducts from './pages/AdminPages/Products';

function App() {
  return (
    <div className="App">
        <nav>
        <ul style={{display:"flex", listStyle:"none", justifyContent:"space-around", backgroundColor:"lightgrey"}}>
          <li>
            <Link className="link" to="/admin">
              Admin
            </Link>
          </li>
          <li>
            <Link className="link" to="/web">
              Web
            </Link>
          </li>
       
        </ul>
      </nav>
     <Routes>
   <Route path='/admin' element={<AdminLayout/>}></Route>
   <Route path='/web' element={<WebLayout/>}></Route>
   <Route path="/webcontact" element={<WebContact/>}/>
   <Route path="/webabout" element={<WebAbout/>}/>
   <Route path="/webhome" element={<WebHome/>}/> 
  
   <Route path="/admincontact" element={<AdminContact/>}/>
   <Route path="/adminhome" element={<AdminHome/>}/>
   <Route path="/adminproducts" element={<AdminProducts/>}/> 

     </Routes>
    </div>
  );
}

export default App;
