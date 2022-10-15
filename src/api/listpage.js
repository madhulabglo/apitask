import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import "../api/apitask.css"
import pin from "../image/pin.svg"

const ListPage = () => {
    const [apidata,setApidata] = useState({})
    const [btnshow,setBtnshow] = useState(false)
    const navigate = useNavigate()

    const userDetails = () => {
        axios.get("https://reqres.in/api/unknown?page=1")
        .then((response)=>setApidata(response.data))
        .catch((error)=>console.log(error))
    }

    const handleClick = (id) => {
        navigate(`/${id}`)
        console.log( navigate(`/${id}`))
    }

    const handleNextBtn = () => {
        axios.get("https://reqres.in/api/unknown?page=2")
        .then((response)=>setApidata(response.data))
        .catch((error)=>console.log(error))   
        setBtnshow((prevState)=>!prevState)
    }

    const handlePreviosBtn = () => {
      axios.get("https://reqres.in/api/unknown?page=1")
      .then((response)=>setApidata(response.data))
      .catch((error)=>console.log(error))   
      // setBtnshow((prevState)=>!prevState)
  }
    useEffect(()=>{
        userDetails()
    },[])
    return(
        <div>
            <center>
              {btnshow?<button onClick={handlePreviosBtn}>previous</button>:
              <button onClick={handleNextBtn}>next</button>
              }
            {apidata.data?.map((value,index)=>{
                return(
                    <div className="row">
                        <div className="column">
                            <div className="card">
                                <div className="image">
                    <p onClick={()=>handleClick(value.id)}><img src={pin} alt="pin" height="50px"/></p>    
                    <p>id:{value.id}</p>
                    <p>name:{value.name}</p>
                    <p>year:{value.year}</p>
                    <p>color:{value.color}</p>
                    <p>pantone_value:{value.pantone_value}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
          
          </center>
        </div>
    )
}
export default ListPage;