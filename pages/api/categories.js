import client from "./client";
import { gql } from "@apollo/client";

const MY_QUERY = gql`
  query Myquery {
    categories(first: 100) {
      edges {
        node {
          id
          name
          backgroundImage(format: ORIGINAL, size: 10) {
            alt
            url
          }
          slug
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
