import { prisma } from '../generated/prisma-client';
import { GraphQLServer } from 'graphql-yoga';
import ip from 'ip';
import chalk from 'chalk';

import resolvers from './resolvers';

const server = new GraphQLServer({
  typeDefs: './src/typeDefs/schema.graphql',
  resolvers,
  context: {
    prisma,
  }
});

const port = parseInt(process.env.PORT || '4000', 10);
server.start({ port }, () => {
  const divider = chalk.gray('-----------------------------------');
  const localhost = chalk.magenta(`http://localhost:${port}`);
  const lan = chalk.magenta(`http://${ip.address()}:${port}`);

  console.log(`
    Server Started!

    ${chalk.bold('Access URLs:')}
    ${divider}
      Localhost: ${localhost}
            LAN: ${lan}
    ${divider}
  `);
});