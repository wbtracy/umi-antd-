import React, { useState } from 'react';
import { Layout, Menu, Icon, ConfigProvider } from 'antd';
import MenuConfig from '../config/menu';
import router from 'umi/router';
import styled from 'styled-components';
import zhCN from 'antd/es/locale/zh_CN';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const BasicLayout: React.FC = (props: any) => {

  const [collapsed, setCollapsed] = useState(false);


  return (
    <ConfigProvider locale={zhCN}>
      {
        props.location.pathname === '/login' ?
          props.children :
          <Layout style={{width: '100%', height: '100%'}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <Logo />
              <Menu theme="dark" mode="inline">
                {
                  MenuConfig.map((item: any, index: number) =>
                    <SubMenu
                      key={index.toString()}
                      title={<span>
                    <Icon type={item.svg || 'user'} />
                    <span>{item.name}</span>
                  </span>}
                    >
                      {
                        item.children.map((itemChild: any, indexChild: number) =>
                          <Menu.Item key={itemChild + '' + indexChild} onClick={() => router.push(item.path + itemChild.path)}>
                            <Icon type={itemChild.svg || 'user'}/>
                            <span>{itemChild.name}</span>
                          </Menu.Item>)
                      }
                    </SubMenu>)
                }
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon className="trigger"
                      type={collapsed ? 'menu-unfold' : 'menu-fold'}
                      onClick={() => setCollapsed(!collapsed)}/>
              </Header>
              <Content style={{ minHeight: 280 }}>
                {props.children}
              </Content>
            </Layout>
          </Layout>
      }
    </ConfigProvider>
  );
};

const Logo = styled.div`
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
`;

export default BasicLayout;
