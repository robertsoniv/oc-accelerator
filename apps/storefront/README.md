# OrderCloud Accelerator Storefront

## What is Sitecore Commerce OrderCloud?
[OrderCloud](https://ordercloud.io/discover/platform-overview) is a B2B, B2C, B2X commerce and marketplace development platform.
OrderCloud delivers cloud-based, API-first, headless eCommerce architecture. Limitless customizations and endless freedom for growth to support your complete commerce strategy.

## What is the Accelerator Storefront App?
A buyer experience application that provides simple and reusable components that comes with a variety of pre-built checkout options that are made to support the default integrations available in the [Accelerator .NET Functions repository](https://github.com/ordercloud-api/oc-accelerator.dotnet-functions). The OrderCloud SDK is also used to facilitate authentication and authorization. The Accelerator Storefront app follows the same development styles as the Accelerator Admin and it was created to speed up the solution development process. Technologies include:

* React
* Vite
* Typescript
* Chakra UI
* React Hook Form
* Tanstack React Query and React Table

## What you can do with this app?
Out of the box functionality for:

* faceted product lists
* product detail with spec forms
* cart
* checkout

Developers can decide whether or not they want to support anonymous shopping by changing the `ALLOW_ANONYMOUS` environment variable, assuming the selected `CLIENT_ID` supports it.

## Features

### Product List
Uses the `useOcResourceListWithFacets()` hook from the `@ordercloud/react-sdk` library to retrieve product data.

* Search: A debounced search input for searching for a specific item using the OrderCloud API
* Product Faceting: A dynamic filter tool for filtering the product list using (OrderCloud ProductFacets)[https://ordercloud.io/knowledge-base/faceted-navigation].
* Pagination: A shared component that works directly with [OrderCloud Product List Meta data](https://ordercloud.io/api-reference/product-catalogs/products/list#response-body).
* Category Navigation: A basic example of browsing products by category has also been included. We have plans on improving this in the future.

### Product Detail
Dynamically generates Product Spec forms from the [OrderCloud Product's Spec](https://ordercloud.io/api-reference/product-catalogs/products/list-specs) definitions. Includes out of the box validation with `Yup`. 

### Application Constants
The `./src/constants` directory contains various constants for configuring or customizing the storefront accelerator. Many of these constants are set up to digest information from the environment variables, something we'll discuss next.

## Working locally
1. Running the accelerator from the /infrastructure directory generates `.env.local` files for the admin and storefront applications.  Verify your admin `.env.local` contians the following variables:

```bash
VITE_APP_ORDERCLOUD_BASE_API_URL="https://sandboxapi.ordercloud.io"
VITE_APP_ORDERCLOUD_CLIENT_ID="********-****-****-****-************"
VITE_APP_NAME="OrderCloud Storefront Application"
```
| Variable                            | Description                                                                                                       |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `VITE_APP_ORDERCLOUD_BASE_API_URL`  | Base OrderCloud API URL                                          |
| `VITE_APP_ORDERCLOUD_CLIENT_ID`     | Buyer Client ID                                                                                                   |
| `VITE_APP_NAME`                     | Name of the application title                                                                                     |

2. Run Vite in development mode
```bash
npm install
npm run dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)!

## Roadmap

Milestone 2 will expand OrderCloud API coverage and add assignment functionality.

## References
- [OrderCloud Javascript SDK](https://www.npmjs.com/package/ordercloud-javascript-sdk)
- [OrderCloud React SDK](https://www.npmjs.com/package/@ordercloud/react-sdk)
- [OrderCloud API Reference](https://ordercloud.io/api-reference)
- [React Hook Form](https://react-hook-form.com/)
- [Tanstack React Table](https://tanstack.com/table)
- [Tanstack React Query](https://tanstack.com/query)
- [Vite Documentation](https://vitejs.dev/)
- [Chakra UI](https://chakra-ui.com)
- [TypeScript](https://www.typescriptlang.org)