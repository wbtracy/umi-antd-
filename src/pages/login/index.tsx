import React, { useState } from 'react';
import { Input, Button, Modal } from 'antd';
import styled from 'styled-components';
import router from 'umi/router';

export default () => {

  const [register, setRegister] = useState(false);
  
  return <Container>
    <LoginContainer>
      <Column>
        <div>
          用户名：
        </div>
        <Input />
      </Column>
      <Column>
        <div>
          密码：
        </div>
        <Input type="password"/>
      </Column>
      <ButtonContainer>
        <Button type="primary" size="large" onClick={() => router.push('/')}>登录</Button>
        <Button size="large" onClick={() => setRegister(true)}>注册</Button>
      </ButtonContainer>
    </LoginContainer>
    <Modal
      visible={register}
      onCancel={() => setRegister(false)}
      title="注册"
    >
      请填写注册信息
    </Modal>
  </Container>
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #000000;
`;
const LoginContainer = styled.div`
  position: absolute;
  right: 700px;
  top: 400px;
  color: #FFFFFF;
  width: 250px;
`;
const Column = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  >div:nth-child(1) {
    font-size: 16px;
    text-align: right;
    width: 70px;
  }
  >input:nth-child(2) {
    width: calc(100% - 70px);
  }
`;
const ButtonContainer = styled.div`
  text-align: center;
  >button:nth-child(1) {
    margin-right: 20px;
  }
`;
