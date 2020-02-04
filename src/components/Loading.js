import React from 'react'

export default function Loading() {

    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", width: "100%"}} >
            <div className="lds-circle"></div>
        </div>
    )
}
