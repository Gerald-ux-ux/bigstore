import client from "./client";
import { gql } from "@apollo/client";

const REGISTER_MUTATION = gql`
  mutation MYmutation($input: AccountRegisterInput!) {
    accountRegister(input: $input) {
      requiresConfirmation
    }
  }
`;

export default async function handler(req, res) {
  const { email, password, firstName, confirmPassword, redirectUrl } = req.body;

  try {
    const { data } = await client.mutate({
      mutation: REGISTER_MUTATION,
      variables: {
        input: {
          email,
          password,
          firstName,
          confirmPassword,
          redirectUrl,
        },
      },
    });

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
}
