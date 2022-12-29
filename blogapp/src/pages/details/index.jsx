import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import axios from "axios";
import { Helmet } from "react-helmet";

const DetailsPage = () => {
  const input = useRef();
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});
  const [editStatus, setEditStatus] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/blogs/${id}`)
      .then((response) => setBlog(response.data));
  }, []);

  const handleDelete = (e) => {
    axios
      .delete(`http://localhost:8000/blogs/${e.target.id}`)
      .then((response) => setBlog(response.data))
      .then(() => navigate("/"));
  };
  const handleEdit = (e) => {
    editStatus ? setEditStatus(false) : setEditStatus(true);
  };

  return (
    <div id="details">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{blog.blogTitle}</title>
        <link rel="canonical" href="http://details.com" />
      </Helmet>

      <div className="detail-card">
        <h3>{blog.blogTitle}</h3>
        <p>{blog.blogBody}</p>
        <p>
          <i>Written {blog.blogAuthor}</i>
        </p>
        <div className="btn">
          <button
            id={blog.id}
            onClick={(e) => handleDelete(e)}
            className="deleteBtn"
          >
            Delete
          </button>
          <button
            id={blog.id}
            onClick={(e) => handleEdit(e)}
            className="deleteBtn"
          >
            Edit
          </button>
        </div>
      </div>
      {editStatus ? (
        <div>
          <div>
          <input value={blog.blogTitle} type="text" />
          </div>
          <div>
          <input type="text" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DetailsPage;
