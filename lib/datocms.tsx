// GraphQL
import { GraphQLClient } from "graphql-request"

export function request({ query, variables } : { query: any, variables: any}) : Promise<any> {
  const endpoint = "https://graphql.datocms.com/"

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
    },
  });
  
  const data : Promise<any> = client.request(query, variables);

  return data;
}