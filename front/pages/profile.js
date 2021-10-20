import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import { useSelector } from "react-redux";

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const profile = () => {
  const { me } = useSelector((state) => state.user);

  if (!me) {
    return null;
  }

  return (
    <>
      <Head>
        <title>내 프로필 | sns</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={me.Followings} />
        <FollowList header="팔로워 목록" data={me.Followers} />
      </AppLayout>
      ;
    </>
  );
};

profile.propTypes = {};

export default profile;
