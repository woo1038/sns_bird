import React, { useCallback } from "react";
import { Avatar, Card, Button } from "antd";
import { useDispatch } from "react-redux";

import { logoutReQuestAction } from "../reducers/user";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(logoutReQuestAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          hello
          <br />
          {me.Posts.length}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {me.Followings.length}
        </div>,
        <div key="follower">
          팔로워
          <br />
          {me.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogOut} loading={logOutLoading}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
