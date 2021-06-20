import axios from "axios";

/**
 * Get products data from BASE
 * @return {[object]} the list of retrieved BASE product data
 */
export async function getBaseProducts(baseToken) {
  return await axios.get(
    process.env.REACT_APP_BASE_BASE_ENDPOINT + "/1/items",
    {
      params: {
        visible: "1",
        order: "created",
        sort: "desc",
      },
    }
  );
}
