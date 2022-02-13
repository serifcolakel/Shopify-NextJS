import { useState, useContext } from "react";
import { formatter } from './../utils/helpers';
import ProductOptions from "./ProductOptions";
import { CartContext } from "../context/shopContext";
export default function ProductForm({ product }) {
    const { addToCart } = useContext(CartContext);

    const allVariantOptions = product.variants.edges?.map(

        variant => {
            const allOptions = {}
            variant.node.selectedOptions.map(item => {
                allOptions[item.name] = item.value
            })
            return {
                id: variant.node.id,
                title: product.title,
                handle: product.handle,
                image: variant.node.image?.originalSrc,
                options: allOptions,
                variantTitle: variant.node.title,
                variantPrice: variant.node.priceV2.amount,
                variantQuantity: 1,
            }
        }
    )
    const defaultValues = {}
    product.options.map(item => {
        defaultValues[item.name] = item.values[0]
    })
    const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])
    const [selectedOptions, setselectedOptions] = useState(defaultValues)

    function setOptions(name, value) {
        setselectedOptions(prevState => {
            return { ...prevState, [name]: value }
        })
        const selection = {
            ...selectedOptions,
            [name]: value
        }
        allVariantOptions.map(variant => {
            if (JSON.stringify(variant.options) === JSON.stringify(selection)) {
                setSelectedVariant(variant)
            }
        })
    }

    return (
        <div className="rounded-2xl p-4 shadow-lg flex flex-col w-full md:w-1/3">
            <h1 className="text-2xl font-bold">
                {product.title}
            </h1>
            <span className="pb-6">{formatter.format(product.variants.edges[0].node.priceV2.amount)}</span>
            {
                product.options.map(({ name, values }) => (
                    <ProductOptions
                        key={`key-${name}`}
                        name={name}
                        values={values}
                        selectedOptions={selectedOptions}
                        setOptions={setOptions}
                    />

                ))}
            <button
                onClick={() => {
                    addToCart(selectedVariant)
                }}
                className="bg-black rounded-lg text-white px-2 py-3 hover:bg-gray-800">
                Add to Card
            </button>
        </div>
    )
}
