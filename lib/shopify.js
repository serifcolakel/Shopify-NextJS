const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storeFrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESTOKEN;

async function ShopifyData(query) {
    const URL = `${domain}/api/2022-01/graphql.json`;

    const options = {
        endpoint: URL,
        method: "POST",
        headers: {
            "X-Shopify-Storefront-Access-Token": storeFrontAccessToken,
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    };
    try {
        const data = await fetch(URL, options).then(response => {
            return response.json()
        })
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Products not fetched")
    }
}

export async function getProductsInCollection() {
    const query = `
    {
        collectionByHandle(handle: "frontpage") {
          title
          products(first: 25) {
            edges {
              node {
                id
                title
                handle
                priceRange {
                  minVariantPrice {
                    amount
                  }
                }
                images(first: 5) {
                  edges {
                    node {
                      originalSrc
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }`

    const response = await ShopifyData(query);
    //console.log("---->", response)
    const allProducts = response.data.collectionByHandle.products.edges ? response.data.collectionByHandle.products.edges : [];

    return allProducts;
}

export async function getAllProducts() {
    const query = `{
        products(first: 25) {
          edges {
            node {
              handle
              id
            }
          }
        }
      }`
    const response = await ShopifyData(query);
    const slugs = response.data.products.edges ? response.data.products.edges : [];
    return slugs;
}

export async function getProduct(handle) {
    const query = `{
        productByHandle(handle: "${handle}") {
          id
          title
          handle
          description
          images(first: 5) {
            edges {
              node {
                altText
                originalSrc
              }
            }
          }
          options {
            name
            values
            id
          }
          variants(first: 25) {
            edges {
              node {
                selectedOptions {
                  name
                  value
                }
                image {
                  altText
                  originalSrc
                }
                title
                id
                priceV2 {
                  amount
                }
              }
            }
          }
        }
      }`
    const response = await ShopifyData(query);

    const product = response.data.productByHandle ?
        response.data.productByHandle : [];
    return product;
}