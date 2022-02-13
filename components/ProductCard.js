import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatter } from '../utils/helpers'
export const ProductCard = ({ product }) => {
    const { handle, title } = product.node
    const { altText, originalSrc } = product.node.images.edges[0].node;
    const price = product.node.priceRange.maxVariantPrice.amount;
    return (
        <Link href={`/products/${handle}`}>
            <a className="group">
                <div className='w-full rounded-3xl bg-gray-200 overflow-hidden'>
                    <div className='relative group-hover:opacity-75 h-72'>
                        <Image src={originalSrc} alt={altText} layout="fill" objectFit='cover' />
                    </div>
                </div>
                <h3 className='mt-4 text-lg font-medium text-gray900'>{title}</h3>
                <p className='mt-1 text-sm text-gray-700'>{formatter.format(price)}</p>
            </a>
        </Link>
    )
}
