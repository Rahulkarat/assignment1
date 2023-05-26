import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

        const Home = () => {
        var [datas,setDatas] = useState([]);
        useEffect(()=>{
          axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((res)=>{
            setDatas(res.data)
            console.log((res.data));
          })
          .catch((err)=>console.log(err))
        })

  return (
    <div>
        <TableContainer style={{paddingTop:'40px'}}>
            <Table>
                <TableHead>
                    <TableRow>
                      <TableCell style={{color:"red",fontFamily:"bold",fontSize:"30px"}}>Id</TableCell>
                      <TableCell style={{color:"skyblue",fontFamily:"bold",fontSize:"30px"}}>Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {datas.map((val,index) => {
                  return(
                    <TableRow key={index}>
                      <TableCell>{val.id}</TableCell>
                      <TableCell>{val.title}</TableCell>
                    </TableRow>
                  )
                })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Home