import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const profile = () => {
  const followingList = [{nickname: 'hello'}, {nickname: '컴퓨터'}, {nickname: '바보'}]
  const followerList = [{nickname: 'hello'}, {nickname: '컴퓨터'}, {nickname: '바보'}]

  return (
    <>
      <Head>
        <title>내 프로필 | sns</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
      ;
    </>
  );
};

profile.propTypes = {};

export default profile;
