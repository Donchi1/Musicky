import React from 'react'
import { css } from "@emotion/core"
import {  BarLoader } from 'react-spinners'
function Loading() {
    const loaderStyle = {
           display: "flex",
           justifyContent: "center",
           alignItems : "center",
           flexDirection: "column",
            minHeight: "100vh",
            LineHeight: "100vh"
    }
    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  return (
    <div style={loaderStyle}>
      <h1 style={{ fontSize: '3rem', color: 'rgb(187, 165, 66)' }}>
        D'PARAMOUNTS
      </h1>
      
        <BarLoader css={override} 
        color = "black"
        width="80%"
        size={300}
        


        />
     
    </div>
  )
}

export default Loading
