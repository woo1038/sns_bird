import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";
import styled from "styled-components";

import AppLayout from "../components/AppLayout";
import useInput from "../hooks/useInput";

const ErrorMessage = styled.div`
  color: red;
`;

const signup = ({ setIsLoggedIn }) => {
  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    
    if (!term) {
      return setTermError(true);
    }

    console.log(id, nickname, password);
  }, [password, passwordCheck, term]);

  return (
    <>
      <AppLayout>
        <Head>
          <title>회원가입 | sns</title>
        </Head>
        <Form onFinish={onSubmit}>
          <div>
            <label>아이디</label>
            <br />
            <Input name="user-id" value={id} required onChange={onChangeId} />
          </div>

          <div>
            <label>닉네임</label>
            <br />
            <Input
              name="user-nickname"
              value={nickname}
              required
              onChange={onChangeNickname}
            />
          </div>

          <div>
            <label>비밀번호</label>
            <br />
            <Input
              name="user-password"
              type="password"
              value={password}
              required
              onChange={onChangePassword}
            />
          </div>

          <div>
            <label>비밀번호 확인</label>
            <br />
            <Input
              name="user-password-check"
              type="password"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
          </div>
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              약관에 동의하시겠습니다.
            </Checkbox>
            {termError && (
              <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>
            )}
          </div>
          <div>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

signup.propTypes = {};

export default signup;