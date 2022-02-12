module.exports = {
  reactStrictMode: true,
  // env is used to define the environment variables that are available to the app
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESTOKEN,
  },
  // shopify will use the public folder as a static root
  images: {
    domains: ["cdn.shopify.com"],
  },
};
