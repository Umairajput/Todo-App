import React, { useState } from "react";
import "./style.css"
import { BgColorsOutlined, DeleteOutlined } from "@ant-design/icons"
import swal from 'sweetalert';
import { EditOutlined } from "@ant-design/icons"

function Task() {
    const [data, setdata] = useState([])
    const [char, setChar] = useState("")
    const [indexValue, setIndexValue] = useState()
    const [value, setValue] = useState("")
    const [showUpdateButton, setshowUpdateButton] = useState("ok")
    const [hideDeleteButton, setHideDeleteButton] = useState("show")
    const TotalCharge = () => {
        if (char === "") {
            swal("please fill value")
        } else {
            let obj = {
                Charge: char,
            }
            setdata(data.concat([obj]))
            setChar("")
        }
    }
    // const ClearAll = () => {
    //     setdata([])
    //     setHideDeleteButton("show")
    //     setChar("")
    // }
    const Update = () => {
        data[indexValue].Charge = char
        setChar("")
        setshowUpdateButton("ok")
        setHideDeleteButton("show")
        swal("Your value is Update")
    }
    return (
        <>
            
                <h1 className="head">Todo-App</h1>
                <div className="main_div">
                    <div className="upper_div">
                        <div className="inner_div">
                            <input className="inp1" type="text" placeholder="Add your todo" value={char} onChange={(e) => { setChar(e.target.value) }} />
                        </div>
                    </div>
                {
                    showUpdateButton === "ok"
                        ?
                        <center><button className="button-85" onClick={TotalCharge}>Add</button></center>
                        :
                        <center><button className="button-85" onClick={Update}>Update Now</button></center>
                }
                {data.map((v, i) => {
                    return (
                        <div className="footer_div">
                            <table>
                                <tr>
                                    <td className="td_1">{v.Charge}</td>
                                    {hideDeleteButton === "show"
                                        ?
                                        <td>
                                            <button className="btn_bt" onClick={() => {
                                                let totalCharge = data[i].Charge
                                                setChar(totalCharge)
                                                setIndexValue(i)
                                                setshowUpdateButton("no")
                                                setHideDeleteButton("hide")
                                                setChar("")
                                            }}><EditOutlined /></button>
                                            <button className="btn_bt" onClick={() => {
                                                let deleteone = data.filter((value, index) => {
                                                    return i != index
                                                })
                                                setdata(deleteone)
                                                setshowUpdateButton("ok")
                                            }}> <DeleteOutlined /></button></td>
                                        : <td>
                                            <button className="btn_btdis"  ><DeleteOutlined /></button>
                                            <button className="btn_btdis" ><EditOutlined /></button></td>
                                    }
                                </tr>
                            </table>
                        </div>
                    )
                })
                }
                {/* {
                    value === ""
                    ?
                    null
                    :
                            <center><button className="click" onClick={ClearAll}>Clear All{value}</button></center>
                    } */}
            </div>
            </>
            
        
    )
}
export default Task