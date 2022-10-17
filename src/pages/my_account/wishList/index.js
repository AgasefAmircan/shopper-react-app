import React, { useState } from "react";
import { Card, Modal, Radio, InputNumber, Space } from "antd";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { AiOutlineInfoCircle } from "react-icons/ai"
import {BsCart2} from "react-icons/bs"
const { Meta } = Card
function Wishlist() {
    const [color, setColor] = useState("white");
    const [size, setSize] = useState("6")
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };



    const handleCancel = (e) => {
        console.log(e.currentTarget)
        setOpen(false);
    };
    return (
        <>
            <div style={{ width: "70%" }}>
                <Card
                    onMouseOver={(e) => {
                        e.currentTarget.firstElementChild.firstElementChild.lastElementChild.style.opacity = "1";
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.firstElementChild.firstElementChild.lastElementChild.style.opacity = "0"
                    }}
                    hoverable
                    style={{
                        width: 240,
                        cursor: "default"
                    }}
                    cover={<div style={{ position: "relative", width: "240px", height: "300px", backgroundSize: "cover", backgroundImage: "url('https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png')" }}>
                        <button style={{ position: "absolute", left: "185px", width: "35px", height: "35px", cursor: "pointer", border: "none", borderRadius: "50%", backgroundColor: "white", marginTop: "20px", marginRight: "20px" }}
                            onMouseOver={(e) => {
                                e.target.style.color = "#fff";
                                e.target.style.backgroundColor = "rgb(255,111,97)"
                            }}
                            onMouseOut={(e) => {
                                e.target.style.color = "black";
                                e.target.style.backgroundColor = "white"
                            }}
                            onClick={() => {

                            }}
                        >
                            X
                        </button>
                        <button onClick={showModal} style={{ width: "100%", backgroundColor: "black", color: "white", boxSizing: "border-box", opacity: "0", transitionDelay: "0s", transitionDuration: "0.3s", cursor: "pointer", transitionTimingFunction: "ease", transitionProperty: "opacity", padding: "8px", position: "absolute", bottom: "0" }}>
                            <FontAwesomeIcon icon={faEye} style={{ color: 'white', marginRight: "10px" }} />
                            Quick view
                        </button>
                    </div>}
                >
                    <Meta title={<a style={{ color: "black" }} href="#">{`product name`}</a>} description="Product cost" style={{ textAlign: "center", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }} />
                </Card>
            </div>
            <Modal
                centered
                width={1000}
                open={open}
                onCancel={handleCancel}
                footer={null}
                bodyStyle={{ padding: "0px" }}
            >
                <div style={{ height: "600px", display: "flex", alignItems: "flex-start", justifyContent: "flex-start" }}>
                    <div style={{ width: "40%", flexShrink: "0", height: "100%", backgroundColor: "rgb(100,100,100)", position: "relative" }}>
                        <button
                            style={{ position: "absolute", bottom: 0, width: "100%", cursor: "pointer", padding: "13px 24px", textAlign: "center", backgroundColor: "rgb(255,111,97)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", border: "none", color: "white", fontWeight: 500 }}
                            onMouseOver={(e) => {
                                e.currentTarget.backgroundColor = "#e66457"
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.backgroundColor = "#ff6f61"
                            }}>
                            More Product Info <AiOutlineInfoCircle style={{ color: "white", marginLeft: "8px" }} />
                        </button>
                    </div>
                    <form action="#" style={{padding:"50px 40px"}}>
                        <h3 style={{fontWeight:"500",fontSize:"28px",marginBottom:"1px"}}>Product name</h3>
                        <h4 style={{fontWeight:"500",fontSize:"24px",marginBottom:"32px"}} > $Price <span style={{fontSize:"15px",fontWeight:"400"}}> (In Stock) </span></h4>
                        <h5 style={{fontSize:"16px",marginBottom:"24px", }}> Color:<strong style={{marginLeft:"6px"}}>{color}</strong></h5>
                        <Radio.Group onChange={(e) => { setColor(e.target.value); }} defaultValue="White" style={{marginBottom:"40px"}}>
                            <Radio.Button value="White" style={{ width: "50px", height: "50px", padding: "0px", margin: "0px", backgroundColor: "white", marginRight: "5px" }}></Radio.Button>
                            <Radio.Button value="Black" style={{ width: "50px", height: "50px", padding: "0px", margin: "0px", backgroundColor: "black", marginRight: "5px" }}></Radio.Button>
                        </Radio.Group>
                        <h5 style={{fontSize:"16px",marginBottom:"24px", }}> Size:<strong style={{marginLeft:"6px"}}>{size} US</strong></h5>
                        <Radio.Group onChange={(e) => { setSize(e.target.value); }} defaultValue="White" style={{marginBottom:"24px"}}>
                            <Radio.Button value="6" style={{ height:"45px",verticalAlign:"center",fontSize: "16px", marginRight: "5px", marginBottom: "10px", width: "65px", textAlign: "center" }}>6</Radio.Button>
                            <Radio.Button value="6.5" style={{ height:"45px",verticalAlign:"center",fontSize: "16px", marginRight: "5px", marginBottom: "10px", width: "65px", textAlign: "center" }}>6.5</Radio.Button>
                            <Radio.Button value="7" style={{ height:"45px",verticalAlign:"center",fontSize: "16px", marginRight: "5px", marginBottom: "10px", width: "65px", textAlign: "center" }}>7</Radio.Button>
                            <Radio.Button value="7.5" style={{ height:"45px",verticalAlign:"center",fontSize: "16px", marginRight: "5px", marginBottom: "10px", width: "65px", textAlign: "center" }}>7.5</Radio.Button>
                            <Radio.Button value="8" style={{ height:"45px",verticalAlign:"center",fontSize: "16px", marginRight: "5px", marginBottom: "10px", width: "65px", textAlign: "center" }}>8</Radio.Button>
                            <Radio.Button value="8.5" style={{ height:"45px",verticalAlign:"center",fontSize: "16px", marginRight: "5px", marginBottom: "10px", width: "65px", textAlign: "center" }}>8.5</Radio.Button>
                            <Radio.Button value="9" style={{ height:"45px",verticalAlign:"center",fontSize: "16px", marginRight: "5px", marginBottom: "10px", width: "65px", textAlign: "center" }}>9</Radio.Button>
                            <Radio.Button value="9.5" style={{ height:"45px",verticalAlign:"center",fontSize: "16px", marginRight: "5px", marginBottom: "10px", width: "65px", textAlign: "center" }}>9.5</Radio.Button>
                            <Radio.Button value="10" style={{ height:"45px",verticalAlign:"center",fontSize: "16px", marginRight: "5px", marginBottom: "10px", width: "65px", textAlign: "center" }}>10</Radio.Button>
                            <Radio.Button value="10.5" style={{ height:"45px",verticalAlign:"center",fontSize: "16px", marginRight: "5px", marginBottom: "10px", width: "65px", textAlign: "center" }}>10.5</Radio.Button>
                            <Radio.Button value="11" style={{ height:"45px",verticalAlign:"center",fontSize: "16px", marginRight: "5px", marginBottom: "10px", width: "65px", textAlign: "center" }}>11</Radio.Button>
                            <Radio.Button value="12" style={{ height:"45px",verticalAlign:"center",fontSize: "16px", marginRight: "5px", marginBottom: "10px", width: "65px", textAlign: "center" }}>12</Radio.Button>
                            <Radio.Button value="13" style={{ height:"45px",verticalAlign:"center",fontSize: "16px", marginRight: "5px", marginBottom: "10px", width: "65px", textAlign: "center" }}>13</Radio.Button>
                            <Radio.Button value="14" style={{ height:"45px",verticalAlign:"center",fontSize: "16px", marginRight: "5px", marginBottom: "10px", width: "65px", textAlign: "center" }}>14</Radio.Button>
                        </Radio.Group>
                        <div style={{display:"flex",alignItems:"center", justifyContent:"flex-start"}}>
                        <Space >
                            <InputNumber style={{padding:"8.5px"}} min={1} max={20} defaultValue={1} onChange={()=>{}} />
                        </Space>
                        <button onClick={()=>{}} style={{marginLeft:"39px",display:"inline-flex",alignItems:"center",justifyContent:"center" ,width: "300px", backgroundColor: "black", color: "white", boxSizing: "border-box",  padding: "12px",cursor:"pointer" }}>
                            Add To Cart
                            <BsCart2 style={{fontSize:"18px",marginLeft:"5px"}}/>
                        </button>

                        </div>
                    </form>
                </div>

            </Modal>
        </>
    )
}
export default Wishlist;