import { Prisma } from '../../../generated/prisma-client';

const Query = {
  publishedPosts(root, args, context) {
    return context.prisma.posts({ where: { published: true } });
  },
  post(root, args, context: { prisma: Prisma }) {
    return context.prisma.post({ id: args.postId });
  },
  users(root, args, context: { prisma: Prisma }) {
    return context.prisma.users().$fragment(`
      fragment UserWithPosts on User {
        id
        name
        email
        posts {
          title
          id
        }
      }
    `);
  },
  postsByUser(root, args, context: { prisma: Prisma }) {
    return context.prisma
      .user({
        id: args.userId,
      })
      .posts();
  },
};

export default Query;
