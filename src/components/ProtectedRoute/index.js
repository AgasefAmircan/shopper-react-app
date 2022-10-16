import React, { useEffect } from 'react'
import axios from 'axios';
function ProtectedRoute({children}) {
 useEffect(()=>{
    // (async ()=>{
    //     let data = await fetch('http://localhost:8080/me',{method:'GET',headers: {
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //       },credetials: 'include'}).then((res) => {
    //         console.log(res);
    //         return res.json();
    //       });
    //       console.log(data)

    // })();
    async function ax(){
      await axios.get('http://localhost:8080/me', {
        withCredentials: true,
        headers: { "Access-Control-Allow-Origin": "localhost:3000", withCredentials:true,'Access-Control-Allow-Credentials': true,'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' }
      }).then(r => r)
    }
    ax();
 },[]);
 return(children);
}

export default ProtectedRoute