import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AiFillFolderOpen, AiOutlinePoweroff ,AiFillFolder} from "react-icons/ai";
import { HiLogout, HiPencilAlt,HiOutlineLogout,HiOutlinePlus,HiOutlineTrash } from 'react-icons/hi'
function AllMark() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'x-auth-token': token, // No need to interpolate the token here
    },
  };
  console.log(token);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3150/md/delete/${id}`, config)
      .then((r) => {
        toast('Markdown Deleted');
        alert("Data Will be deleted")
        window.location.reload(); // Use window.location.reload() to refresh the page
      })
      .catch((error) => {
        console.error('Error deleting markdown:', error);
      });
  };

 

  const [read, setRead] = useState([]);

  useEffect( () => {
     axios.get('http://localhost:3150/md/all', config)
      .then((response) => {
        setRead(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // You don't need to make the useEffect callback async
console.log(read);
  return (
    <div className="container-fluid">
      <div className="row apphead">
        <div className="col-6 app-add float-start">Markdown Viewer</div>
        <div className="col-6">
          <Link onClick={handleLogout} to="/" className="logout float-end">
           <AiOutlinePoweroff/> LogOut
          </Link>
          <Link to="/md/all" className=" viewdocs float-end">
            Saved Folder
          </Link>
          <Link to="/md/add" className="viewdocss float-end">
             + Add New
          </Link>
        </div>
      </div>

      <div className="container">
        <table className="table table-striped text-center ">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Title</th>
              <th scope="col">Document</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {read.map((e, i) => (
              <tr key={e._id}>
                <th scope="row">{i + 1}</th>
                <td>{e.title}</td>
                <td>
                  <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Data
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          {e.document}
                        </a>
                      </li>
                    </ul>
                  </div>
                   </td>
                <td>
                 
                    <Link to={`/md/edit/${e._id}`} type="button" className=" allmarik-btns">
                      <HiPencilAlt/>
                    </Link>
                    <Link type="button" onClick={()=>{handleDelete(e._id)}} className=" allmarik-btnss">
                      <HiOutlineTrash/>
                    </Link>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllMark;
