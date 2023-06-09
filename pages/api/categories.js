import client from "./client";
import { gql } from "@apollo/client";

const MY_QUERY = gql`
query Myquery {
  categories(first: 100) {
    edges {
      node {
        slug
        products(channel: "default-channel", first: 100) {
          edges {
            node {
              channel
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
              images {
                url
              }
            }
          }
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

  res.status(200).json(data.categories.edges);
}
