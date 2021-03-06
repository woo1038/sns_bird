import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { addPost } from "../reducers/post";
import useInput from "../hooks/useInput";

const PostForm = () => {
  const dispatch = useDispatch();
  const { imagePaths, addPostDone } = useSelector((state) => state.post);

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const [text, onChangeText, setText] = useInput("");
  /* 글작성후 지워주기 */
  useEffect(() => {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);

  const onSubmit = useCallback(() => {
    dispatch(addPost(text));
  }, [text]);

  return (
    <Form onFinish={onSubmit}>
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="오늘의 기분을 적어주세여"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          작성
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: "inline-block" }}>
            <img key={v} alt={v} style={{ display: "inline-block" }} />
            <div>제거</div>
          </div>
        ))}
      </div>
    </Form>
  );
};

PostForm.propTypes = {};

export default PostForm;
