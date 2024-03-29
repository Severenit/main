import AntdLayout, { Content, Footer, Header } from "antd/es/layout/layout";
import React, { FC, PropsWithChildren, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";

const RemoteHeader = lazy(() => import("header/Header"));

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <AntdLayout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header>
        <Suspense>
          <RemoteHeader />
        </Suspense>
      </Header>

      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "32px",
        }}
      >
        {children}
      </Content>

      <Footer style={{ textAlign: "center" }}>
        ONLINE-SHOP ©{new Date().getFullYear()}
      </Footer>
    </AntdLayout>
  );
};
