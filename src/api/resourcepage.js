import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import { useParams,Link } from "react-router-dom";

const ResourcePage = () => {
const [apidata,setApidata] = useState({})
const {id} = useParams();

const userDetails = () => {
    axios.get(`https://reqres.in/api/unknown/${id}`)
    .then((response)=>setApidata(response.data))
    .catch((error)=>console.log(error))
}
useEffect(()=>{
    userDetails()
},[])
    return(
        <div>
            <center>
            <p>id:{apidata.data?.id}</p>
            <p>name:{apidata.data?.name}</p>
            <p>year:{apidata.data?.year}</p>
            <p>color:{apidata.data?.color}</p>
            <p>pantone_value:{apidata.data?.pantone_value}</p>
            <Link to ={-1}>back</Link>
            </center>
        </div>
    )
}
export default ResourcePage;