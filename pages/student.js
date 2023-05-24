import React, { useEffect, useState } from 'react'

export default function Student() {
    //2.1 hooks area
    const [students,setstudents]=useState([]);

    useEffect(()=>{
        fetch('api/students')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data.students)
            setstudents(data.students)
        })
        .catch((arror)=>{
            console.log(arror)
        })
    },[])

    //2.2 function definetin raea


    //2.3 return statment
  return (
    <>
    
        <h1>students Table</h1>
        <ol>
            {
                students.length > 0 && students.map((cv,idx,arr)=>{
                    return <li key={idx}>{cv.name} {cv.surname}</li>
                })
            }
            
            
        </ol>
    </>
  )
}
