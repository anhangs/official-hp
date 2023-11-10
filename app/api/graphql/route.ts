import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';

import { Resolvers } from "@/apollo/__generated__/server/resolvers-types"
import typeDefs from "@/apollo/documents/schema.gql"
import { contact, getSkill } from '@/apollo/resolver/mutation';
import { introduction } from '@/apollo/resolver/query';
import { dateScalar } from '@/apollo/scalar/date';


const resolvers: Resolvers = {
  Query: {
    introduction : introduction
  },
  Mutation: {
    contact: contact,
    getSkill: getSkill
  },
  Date: dateScalar
};

const server = new ApolloServer<{}>({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export async function POST(request: NextRequest) {
  return handler(request);
}

export async function GET(request: NextRequest) {
  return handler(request);
}