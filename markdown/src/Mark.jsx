import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { toast } from 'react-toastify';

import { AiFillFolderOpen, AiOutlinePoweroff ,AiFillFolder} from "react-icons/ai";

function Mark() {
  const handleLogout = () => {
    localStorage.removeItem("token");
  }

  const [data, setData] = useState({
    title: "",
    document: ""
  });

  const token = localStorage.getItem("token");
  //console.log(token);

  const config = {
    headers: {
      'x-auth-token': `${token}`,
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleDocumentSave = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      let saveDoc = await axios.post('http://localhost:3150/md/add', data, config);
      toast('Document Saved!');
      console.log(saveDoc.data); // Access the response data
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container-fluid'>
      <div className="row apphead">
        <div className="col-6 app-add float-start">Markdown Viewer</div>
        <div className="col-6 ">
          <Link to='/' onClick={handleLogout} className='logout float-end'><AiOutlinePoweroff/>LogOut</Link>
          <Link to='/md/all' className='viewdocs float-end'>Saved Folder</Link>
        </div>
      </div>
      <div className="row">
        <div className="col-6 app-heading">Markdown Text</div>
        <div className="col-6 app-heading">Html Preview</div>
      </div>
      <div className="row">
        <div className="col-6">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="text" name='title' value={data.title} onChange={handleChange} placeholder="Document Name" />
            <button className="btn btn-success" onClick={handleDocumentSave}>Save</button>
          </form>
          <textarea className='textarea form-control' name='document' value={data.document} onChange={handleChange}></textarea>
        </div>
        <div className="col-6">
        <input className="form-control me-2" type="text" name='title' value={data.title} onChange={handleChange} placeholder="Document Name"/>
          <ReactMarkdown className='textarea'>{data.document}</ReactMarkdown>
        </div>
      </div>
      <p> </p>
      <div className="row">
        <div className="sticky-bottom copyright">© Copyright @ Markdown Viewer</div>
      </div>
    </div>
  )
}

export default Mark;
