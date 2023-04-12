import './datatable.scss'
import React, { useEffect, useState } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../dummydata/mockData";
import { Link } from "react-router-dom";
import { 
  query,  
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot
} from "firebase/firestore";
import { db } from '../../firebase';


const Datatable = () => {

    const [data, setData] = useState([])

    //fetching the user data  in (live (real time)) from the firestore using the useEffect.
    useEffect(() => {
      const unsub = onSnapshot(collection(db, "users"),(snapShot) => { 
          let list = [];
          snapShot.docs.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
          });
          setData(list);
        },
        (error) => {
          console.log(error);
        }
      );
      return () => { // unsuscribe titme to time to prevent memory leak.
        unsub();
      };
      
    }, [])


    //deleting the rows from user table.
    const handleDelete = async (id) => {
      try { 
        await deleteDoc(doc(db, "users", id))
        setData(data.filter((item) => item.id !== id )) // deleting the data from database.
      } catch(err) {
        console.log(err)
      }

    }

    //for concating extra column .
    const actionsColumn = [{ field: 'action' , headerName: 'Action', width: 200, renderCell: (params) => {
      return (
            <div className='cellaction'>
                <Link to="/users/test" style={{textDecoration: "none"}}>  
                  <div className='viewbutton'> View</div>
                </Link>
                <div className='deletebutton' onClick={() => handleDelete(params.row.id)}> Delete</div>
            </div>
        )
    }}]
    
  return (
    <div className='datatable' >
      <div className="datatable-title">
        Add New User
        <Link to="/users/new" style={{textDecoration: "none"}} className='adduserbutton'>  
          Add New
        </Link>  
      </div>
      {/* boiler plate imported from material ui*/}
      <DataGrid
          className='datagrid'
          rows={data} // mock data imported from dummydata, later on use data from firebase
          columns={userColumns.concat(actionsColumn)} // add one more column to the remaining data
          pageSize={9}
          rowsPerPageOptions={[5,10,25]}
          checkboxSelection
      />
    </div>
  )
}

export default Datatable