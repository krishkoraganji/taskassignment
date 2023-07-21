import { useState,useEffect } from "react"
import './index.css'
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import axios from "axios"
import LogOut from "../logoutbutton"
import { useParams } from "react-router-dom"
function USERDETAILS() {
    const [person,setPerson]=useState([])
    const [error,setError]=useState('')
    const baseUrl='http://65.2.51.31:9001'
    const userId=useParams()
    const navigation=useNavigate()
    const token=Cookies.get('jwtToken')
    const getTheData=async()=>{
        try {
            
            const headers= {
                Authorization:`Token ${token}`,
            }      
            const response = await axios.get(`${baseUrl}/retrive_update_user/${userId.id}/`,{headers});
            //{{base_url}}/retrive_update_user/2/

            if (response){
            setPerson(response.data)

            }else{
                setError(response)
            }
        } catch (error) {
            console.error('Error submitting form:', error);
          }
     }

    useEffect(()=>{
        getTheData()
    },[])
if (token===undefined){
    navigation('/login')
}
    return (
      <div className="details">
        <h1>USER DETAILS</h1>
        <p>USERNAME:- {person.username}</p>
        <p>FirstName:- {person.first_name}</p>
        <p>LastName:- {person.last_name}</p>
      
      <div className="buttons-div">  <button onClick={()=>{
        navigation('/')
      }}>Home</button>
      <LogOut/>
      </div>
      </div>
    )
  }
  export default USERDETAILS