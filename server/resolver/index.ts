import { Password, Resolvers } from '../__generated/resolvers-types';

// TODO: replace by an actual Database
const store = {} as any;

const resolvers: Resolvers = {
    Query: {
      password: () => store?.password,
    },
    Mutation: {
      addPassword: (parent, args) => {
        const pwd = {
          email: args.email,
          pwd: args.pwd || '',
          domain: args.domain,
        };

        if (!store.password) {
          store.password = [pwd];
        } else {
          const alreadyExists = store.password.some((p: Password) => { 
            return p.email === pwd.email && p.pwd === pwd.pwd && p.domain === pwd.domain;
          });
          if (alreadyExists) {
            store.password.forEach((p:Password) => {
              if (p.email === pwd.email && p.pwd === pwd.pwd && p.domain === pwd.domain) {
                return pwd;
              } else {
                return p;
              }
            });
          } else {
            store.password.push(pwd);
          }
        }
        return pwd;
      }
    },
  };

  export default resolvers;