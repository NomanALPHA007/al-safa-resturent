const { gql, default: request } = require("graphql-request");

const MASTER_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

/**
 * Used to Make Get Category API request
 * @returns {Promise<Object>}
 */
const GetCategory = async () => {
  const query = gql`
    query Categories {
      categories(first: 50) {
        id
        slug
        name
        icon {
          url
        }
      }
    }
  `;
  return await request(MASTER_URL, query);
};

/**
 * Fetches businesses based on the category slug
 * @param {string} category - The category slug
 * @returns {Promise<Object>}
 */
const GetBusiness = async (category) => {
  const query = gql`
    query GetBusiness($categorySlug: String!) {
      restaurants(where: { categories_some: { slug: $categorySlug } }) {
        aboutUs
        address
        banner {
          url
        }
        categories {
          name
        }
        id
        name
        restroType
        slug
        workingHours
      }
    }
  `;
  return await request(MASTER_URL, query, { categorySlug: category });
};

// Apply similar changes to other functions using variables for dynamic values

export default {
  GetCategory,
  GetBusiness,
  GetBusinessDetail,
  AddToCart,
  GetUserCart,
  DisconnectRestroFromUserCartItem,
  DeleteItemFromCart,
  AddNewReview,
  getRestaurantReviews,
  CreateNewOrder,
  UpdateOrderToAddOrderItems,
  GetUserOrders,
};
