import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const LogOut=()=>{

    const navigation=useNavigate()
    const baseUrl='http://65.2.51.31:9001'
    const handleLogout = async (e) => {
      e.preventDefault();
      // You can add your login logic here, such as sending data to a server for authentication.
      // For this example, we'll just print the username and password to the console.
      const token=Cookies.remove('jwtToken')
      navigation('/login') 
      
    };
    return(
        <button onClick={handleLogout}>LogOut</button>
    )
}
export default LogOut