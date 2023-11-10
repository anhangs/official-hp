import { MutationResolvers, Skill } from '@/apollo/__generated__/server/resolvers-types';

export const contact: MutationResolvers['contact'] = async (
  parent,
  args,
  context,
  info
): Promise<string> => {
  return `Dear Mr/Mrs ${args.input?.name}. Thank you for contact me!`;
};


export const getSkill: MutationResolvers['getSkill'] = async (
  parent,
  args,
  context,
  info
): Promise<Skill> => {
  return { title: args.title, description: "description" } as Skill;
};