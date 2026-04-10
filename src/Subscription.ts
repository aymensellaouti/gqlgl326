import { pubSub } from "./main";

export const Subscription = {
    newUser: {
    subscribe: (parent, args, { db }) => {
       return pubSub.subscribe("newUser");
    },
    resolve: (payload) => { 
        console.log(payload);
        return payload.user;
    },
 },

}