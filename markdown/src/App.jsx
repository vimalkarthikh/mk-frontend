import Home from "./Home"
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Login from "./Login"
import Register from "./Register"
import Forgot from "./Forgot"
import Reset from "./Reset"
import Mark from "./Mark"
import EditMark from "./EditMark"
import AllMark from "./AllMark"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

function App() {
  return (
   <Router>
     <ToastContainer  
				position="top-right"
				 autoClose={5000}
				 hideProgressBar={false}
				 newestOnTop={false}
				 closeOnClick
				 rtl={false}
				 pauseOnFocusLoss
				 draggable
				 pauseOnHover />
   <Routes>
  
    <Route path="/" element={<Home></Home>}></Route>    
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/register" element={<Register></Register>}></Route>
    <Route path="/fp/forgotpassword" element={<Forgot></Forgot>}></Route>
    <Route path="/fp/reset/:token" element={<Reset></Reset>}></Route>
    <Route path="/md/add" element={<Mark></Mark>}></Route>
    <Route path="/md/edit/:id" element={<EditMark></EditMark>}></Route>
    <Route path="/md/all" element={<AllMark></AllMark>}></Route>
   </Routes>
   
   </Router>
  )
}

export default App
