import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AiFillFolderOpen, AiOutlinePoweroff ,AiFillFolder} from "react-icons/ai";


function EditMark() {
  const { id } = useParams();
  const navigate =useNavigate();

  const [data, setData] = useState({
    title: '',
    document: '',
  });

  const token = localStorage.getItem('token');

  const config = {
    headers: {
      'x-auth-token': token,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3150/md/edit/${id}`, config);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // 
  }, []); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleDocumentUpdate = async (e) => {
    e.preventDefault();

    try {
      const saveDoc = await axios.put(`http://localhost:3150/md/edit/${id}`, data, config);
      // You might want to use a toast library here to show a success message.
      console.log('Document Saved!', saveDoc.data);
      toast("Document Updated Successfully");
      navigate('/md/all')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row apphead">
        <div className="col-6 app-add float-start">Markdown Viewer</div>
        <div className="col-6">
          <Link to="/" className="logout float-end">
          <AiOutlinePoweroff/> LogOut
          </Link>
          <Link to="/md/all" className="viewdocs float-end">
            Saved Folder
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-6 app-heading">Markdown Text</div>
        <div className="col-6 app-heading">Html Preview</div>
      </div>
      <div className="row">
        <div className="col-6">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
              placeholder="Document Name"
              aria-label="Search"
            />
            <button className="btn btn-success upbtn" onClick={handleDocumentUpdate}>
              Update
            </button>
            <button className="btn btn-danger bckbtn" onClick={()=>{navigate('/md/all')}}>
              Back
            </button>
          </form>
          <textarea
            className="textarea form-control"
            name="document"
            value={data.document}
            onChange={handleChange}
          />
        </div>
        <div className="col-6">
          <input
            className="form-control me-2"
            type="text"
            name="title"
            value={data.title}
            placeholder="Document Name"
            aria-label="Search"
          />
          <ReactMarkdown className="textarea">{data.document}</ReactMarkdown>
        </div>
      </div>

      <p> </p>

      <div className="row">
        <div className="sticky-bottom copyright">© Copyright @ Markdown Viewer</div>
      </div>
    </div>
  );
}

export default EditMark;
