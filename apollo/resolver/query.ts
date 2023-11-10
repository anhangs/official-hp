import { Career, Introduction, Profile, QueryResolvers, Skill } from '@/apollo/__generated__/server/resolvers-types';
import { Gender } from '../__generated__/client/graphql';

export const introduction: QueryResolvers['introduction'] = async (
  parent,
  args,
  context,
  info
): Promise<Introduction> => {
  return { 
    fullName: "fullName",
    email: "test@gmail.com",
    dateOfBirth: new Date(1994, 7, 26),
    firstName: "firstName",
    lastName: "lastName",
    gender: ('male') as Gender,
    profile: {
      description: "description",
      career: [
        { title: "title", description: "description" , icon: "/icon.svg"},
      ],
      skill: [
        { title: "title", description: "description"  , icon: "/icon.svg"},
      ],
    } as Profile
  } as Introduction;
};
