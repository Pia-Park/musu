import axios from "axios";

/**
 * Get products data from BASE
 * @return {[object]} the list of retrieved BASE product data
 */
export async function getBaseProducts(catedoryId) {
  return await axios.get(
    process.env.REACT_APP_AWS_BASE_ENDPOINT + "/base/items",
    {
      params: {
        categoryId: catedoryId,
      },
    }
  );
}
