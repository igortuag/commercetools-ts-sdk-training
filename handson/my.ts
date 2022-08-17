import {
  ClientResponse,
  Customer,
  OrderPagedQueryResponse,
} from "@commercetools/platform-sdk";
import { myApiRoot } from "./client";

// TODO update client.ts file
// TODO: SPA api-client

export const getMe = (): Promise<ClientResponse<Customer>> =>
  myApiRoot.me().get().execute();

export const getMyOrders = (): Promise<
  ClientResponse<OrderPagedQueryResponse>
> => myApiRoot.orders().get().execute();
