import {
  ClientResponse,
  ProductSelection,
  ProductSelectionProductPagedQueryResponse,
} from "@commercetools/platform-sdk";
import { apiRoot } from "./client";

export const getProductSelectionByKey = (
  key: string
): Promise<ClientResponse<ProductSelection>> =>
  apiRoot.productSelections().withKey({ key }).get().execute();

export const createProductSelection = (
  key: string,
  name: string
): Promise<ClientResponse<ProductSelection>> =>
  apiRoot
    .productSelections()
    .post({
      body: {
        name: { en: name },
        key,
      },
    })
    .execute();

export const addProductsToProductSelection = async (
  productSelectionKey: string,
  arrayOfProductKeys: Array<string>
): Promise<ClientResponse<ProductSelection>> =>
  getProductSelectionByKey(productSelectionKey).then((productSelection) =>
    apiRoot
      .productSelections()
      .withKey({ key: productSelectionKey })
      .post({
        body: {
          version: productSelection.body.version,
          actions: arrayOfProductKeys.map((productKey) => ({
            action: "addProduct",
            active: true,
            product: {
              typeId: "product",
              key: productKey,
            },
          })),
        },
      })
      .execute()
  );

export const getProductsInProductSelection = (
  productSelectionKey: string
): Promise<ClientResponse<ProductSelectionProductPagedQueryResponse>> => {
  throw new Error("Function not implemented");
};
