'use client'
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Skeleton } from '@mui/material';


interface IUser {
    userId:number,
    id:number,
    title:string,
    body:string
  }

export function Component1 (){
    const [rows,setRows] = useState<IUser[]|[]>([]);
    const [loading,setloading] = useState(true)
    const columns: GridColDef<(typeof rows)[number]>[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'userId', headerName: 'UserId', width: 90 },
        {
         field: 'title',
         headerName: 'Title',
         width: 300,
         editable: true,
       },
       {
         field : 'body',
         headerName : 'Body',
         width:500,
         editable : true,
       }
     ];

    const fetchData =async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(response.ok){
          const data : IUser[] = await response.json();
          setRows(data);
        }
        setloading(false)
       }

       useEffect(()=>{
        fetchData()
       },[])
       
       if(loading){
        return (
                <Skeleton variant="rounded" width={1000} height={500} animation="wave"/>
        )

       }

    return (
        <div className=' max-w-5xl max-h-[80vh] overflow-y-scroll bg-white rounded-lg shadow-md p-4'>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
  
      </div>
    )
}