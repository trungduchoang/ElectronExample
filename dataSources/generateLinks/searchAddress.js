import { prefIds } from "../idList/prefIds.js";

const searchAddress = "search/address";
export const searchAddressPref = prefIds.map(
  (id) => `${searchAddress}/pref/${id}`
);
