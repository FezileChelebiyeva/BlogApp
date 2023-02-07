import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Button, Form, Input, Select } from "antd";
const DetailsPage = () => {
  const input = useRef();
  const textarea = useRef();
  const select = useRef();
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

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Blog title:"
              name="blogTitle"
              rules={[
                {
                  required: true,
                  message: "Please input your blog title!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Blog body:"
              name="blogBody"
              rules={[
                {
                  required: true,
                  message: "Please input your blog body!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Blog author:"
              rules={[
                {
                  required: true,
                  message: "Please input your blog body!",
                },
              ]}
            >
              <Select>
                <Select.Option value="kenan">kenan</Select.Option>
                <Select.Option value="fezile">fezile</Select.Option>
                <Select.Option value="gurban">gurban</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : null}
    </div>
  );
};

export default DetailsPage;
