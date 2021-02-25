import React from "react"

const CallLogo = ({ src, alt }) => {
    return (
        <figure>
            <img
            src={src}
            width="40"
            height="40"
            alt={alt}
            />
        </figure>
    )
}

export default CallLogo