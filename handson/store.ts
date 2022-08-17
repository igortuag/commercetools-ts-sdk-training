import {
  Cart,
  ClientResponse,
  Customer,
  CustomerPagedQueryResponse,
  ProductsInStorePagedQueryResponse,
  Store,
} from "@commercetools/platform-sdk";
import { apiRoot, storeApiRoot } from "./client";

//TODO: update client.ts file

export const getStoreByKey = (key: string): Promise<ClientResponse<Store>> =>
  apiRoot.stores().withKey({ key }).get().execute();

export const getCustomersInStore = (
  storeKey: string
): Promise<ClientResponse<CustomerPagedQueryResponse>> => {
  throw new Error("Function not implemented");
};

export const addProductSelectionToStore = (
  storeKey: string,
  productSelectionKey: string
): Promise<ClientResponse<Store>> => {
  throw new Error("Function not implemented");
};

export const getProductsInStore = (
  storeKey: string
): Promise<ClientResponse<ProductsInStorePagedQueryResponse>> => {
  throw new Error("Function not implemented");
};

export const createInStoreCart = (
  storeKey: string,
  customer: ClientResponse<Customer>
): Promise<ClientResponse<Cart>> =>
  storeApiRoot
    .carts()
    .post({
      body: {
        customerId: customer.body.id,
        customerEmail: customer.body.email,
        currency: "EUR",
      },
    })
    .execute();
