import client from "../client";
import { gql } from "@apollo/client";

const GET_PRODUCT_BY_ID_QUERY = gql`
  query GetProductById($id: ID!) {
    product(id: $id, channel: "default-channel") {
      id
      category {
        id
        name
      }
      name
      pricing {
        priceRange {
          start {
            gross {
              amount
              currency
            }
          }
        }
      }
      thumbnail {
        url
      }
    }
  }
`;

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const { data } = await client.query({
      query: GET_PRODUCT_BY_ID_QUERY,
      variables: {
        id,
      },
    });
    res.status(200).json(data.product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
