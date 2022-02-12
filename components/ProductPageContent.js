import React from 'react'

export default function ProductPageContent({ product }) {
    console.log("---->", product);
    return (
        <div>{product.title}</div>
    )
}
