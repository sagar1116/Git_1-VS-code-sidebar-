import { useState } from "react";

export default function Folder({explorer}){
    console.log(explorer);
    const [File,setFile]=useState(false);

    if(explorer.isFolder){
     return(
        <div style={{marginTop:5}}>
            <div className="folder" onClick={()=>setFile(!File)}>
            <span>📁{explorer.name}</span>
            
            </div>
            <div style={{display: File ? "block": "none",paddingLeft:75}}>
                {explorer.items.map((a)=>{
                    return <Folder explorer={(a)}/>
                    })}
            </div>
        </div>
    );
}   else{
    return <span className="file">🗃️
    {explorer.name}</span>

    }
}