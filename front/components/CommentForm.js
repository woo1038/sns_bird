import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Form, Input } from "antd";
import useInput from "../hooks/useInput";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ADD_COMMENT_REQUEST } from "../reducers/post";

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const { addCommentDone } = useSelector((state) => state.post);

  const [commentText, onSubmitCommentText, setCommentText] = useInput("");

  /* 글작성후 지워주기 */
  useEffect(() => {
    if (addCommentDone) {
      setCommentText("");
    }
  }, [addCommentDone]);

  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, postId: post.id, userId: id },
    });
  }, [commentText, id]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: "reletive", margin: 0 }}>
        <Input.TextArea
          value={commentText}
          onChange={onSubmitCommentText}
          rows={4}
        />
        <Button
          style={{
            position: "absolute",
            right: 0,
            bottom: -40,
            cursor: "pointer",
            zIndex: 10,
          }}
          type="primary"
          htmlType="submit"
        >
          작성
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
