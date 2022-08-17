import { TypeDraft } from "@commercetools/platform-sdk";
import { apiRoot } from "./handson/client";
import { log } from "./utils/logger";

const typeDraft: TypeDraft = {
  key: "it-allowed-to-place-orders",
  name: {
    de: "it allowed to place orders",
    en: "it allowed to place orders",
  },
  description: {
    de: "allow a customer to place orders",
    en: "allow a customer to place orders",
  },
  resourceTypeIds: ["customer"],
  fieldDefinitions: [
    {
      type: {
        name: "Boolean",
      },
      name: "allowed-to-place-orders",
      label: {
        de: "Allowed to place orders",
        en: "Allowed to place orders",
      },
      required: false,
    },
  ],
};

apiRoot.types().post({ body: typeDraft }).execute().then(log).catch(log);
