import React from "react";

export default function List(){
    const list = [1,2,3,4,5];
    const listItems = list.map((number)=>{
        return <listItem key={number.toString()} value={number}/>
    })
    return (
        <ul>{listItems}</ul>

    );
}