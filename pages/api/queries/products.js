import client from "../client";
import { gql } from "@apollo/client";


const MY_QUERY = gql`
  query Myquery {
    products(channel: "default-channel", first: 100) {
      edges {
        node {
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
    }
  }
`;

export default async function handler(req, res) {
  const { data } = await client.query({
    query: MY_QUERY,
  });

  res.status(200).json(data.products.edges);
}