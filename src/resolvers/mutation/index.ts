const Mutation = {
  createDraft(root, args, context) {
    return context.prisma.createPost(
      {
        title: args.title,
        author: {
          connect: { id: args.userId }
        }
      },
    )
  },
  createUser: {
    name: 'asdasd',
  }
};

export default Mutation;