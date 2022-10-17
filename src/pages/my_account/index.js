import React from "react";
import { Breadcrumb, Layout, Menu, Tabs, } from "antd";
import Orders from "./orders";
import Wishlist from "./wishList"
import PersonalInfo from "./personalInfo";
import Adresses from "./adresses";
import PaymentMethods from "./patmentMethods";
import  Promo from '../../components/Promo/Promo'
import  Head from '../../components/Header/Head'
import  Footer from '../../components/Footer/Footer'
import { NavLink, Outlet } from "react-router-dom";
import ProtectedRoute from "../../components/ProtectedRoute";

const { Content } = Layout;


function MyAccount() {
  const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
  return (
    <ProtectedRoute>
      <Promo/>
      <Head/>
      <Layout style={{ backgroundColor: "#fff" }}>
        <Content
          style={{
            padding: '0 50px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{
              padding: '24px 0',
              backgroundColor: "white"

            }}
          >
            <h1 style={{ textAlign: "center", fontSize: "32px", fontWeight: 700, marginBottom: "50px" }}>My Account</h1>
            {/* <Tabs            
              tabPosition={"left"}
              items={[{
                label: "Orders", key: "orders", children: <Orders />
              }, {
                label: "Wishlist", key: "wishlist", children: <Wishlist />
              }, {
                label: "Personal info", key: "personalinfo", children: <PersonalInfo />
              }, {
                label: "Adresses", key: "adresses", children: <Adresses />
              }, {
                label: "Payment Methods", key: "payment", children: <PaymentMethods />
              }, {
                label: "Logout", key: "logout", children: ""

              }
              ]}
            /> */}
            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"flex-start"}}>
              <nav style={{display:"flex",flexDirection:"column",alignItems:'flex-start',justifyContent:"flex-start",marginRight:"150px"}}>
                <NavLink style={{color:"rgb(31,31,31)",borderBottom:"1px solid rgb(229,229,229)",borderTop:"1px solid rgb(229,229,229)",display:"block",width:"100%",padding:"15px 0",fontSize:"16px"}} to='orders'>Orders</NavLink>
                <NavLink style={{color:"rgb(31,31,31)",borderBottom:"1px solid rgb(229,229,229)",borderTop:"1px solid rgb(229,229,229)",display:"block",width:"100%",padding:"15px 0",fontSize:"16px"}} to='wishlist'>Wishlist</NavLink>
                <NavLink style={{color:"rgb(31,31,31)",borderBottom:"1px solid rgb(229,229,229)",borderTop:"1px solid rgb(229,229,229)",display:"block",width:"100%",padding:"15px 0",fontSize:"16px"}} to='personalinfo'>Personal info</NavLink>
                <NavLink style={{color:"rgb(31,31,31)",borderBottom:"1px solid rgb(229,229,229)",borderTop:"1px solid rgb(229,229,229)",display:"block",width:"100%",padding:"15px 0",fontSize:"16px"}} to='adresses'>Addresses</NavLink>
                <NavLink style={{color:"rgb(31,31,31)",borderBottom:"1px solid rgb(229,229,229)",borderTop:"1px solid rgb(229,229,229)",display:"block",width:"100%",padding:"15px 0",fontSize:"16px"}} to='payment'>Payment Methods</NavLink>
                <NavLink style={{color:"rgb(31,31,31)",borderBottom:"1px solid rgb(229,229,229)",borderTop:"1px solid rgb(229,229,229)",display:"block",width:"100%",padding:"15px 0",fontSize:"16px"}} to='logout'>Logout</NavLink>
              </nav>
              <Outlet />
            </div>

          </Layout>
        </Content>
        <Footer/>
      </Layout>



    </ProtectedRoute>
  )
}
export default MyAccount