import React, { useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link } from "react-router-dom";
import { Alert, Space, Spin } from "antd";

const HomePage = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [spinStatus, setSpinStatus] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:8000/blogs")
      .then((response) => setBlogsData(response.data))
      .then(() => {
        setSpinStatus(false);
      });
  }, []);

  return (
    <div id="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://home.com" />
      </Helmet>
      {spinStatus ? (
        <div style={{ marginTop: "100px" }} className="spinner">
          <Spin tip="Loading">
            <div className="content" />
          </Spin>
        </div>
      ) : (
        <div className="blogs">
          {blogsData.map((element) => {
            return (
              <Link to={`/${element.id}`} key={element.id}>
                <div className="card">
                  <h3>{element.blogTitle}</h3>
                  <p className="title">{element.blogBody}</p>
                  <p className="author">written by {element.blogAuthor}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HomePage;
