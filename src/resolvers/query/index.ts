import { Prisma } from '../../../generated/prisma-client';

const Query = {
  publishedPosts(root, args, context) {
    return context.prisma.posts({ where: { published: true } });
  },
  post(root, args, context: { prisma: Prisma }) {
    return context.prisma.post({ id: args.postId });
  },
  users(root, args, context: { prisma: Prisma }) {
    return context.prisma.users({
      where: {
        email_contains: '0.2',
      },
    });
  },
};

export default Query;
