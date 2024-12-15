import React from "react";
import productContext from "./productContext";

const productState = (props) =>{
    return (
        <productContext.Provider>
            {props.c}
        </productContext.Provider>
    )
}