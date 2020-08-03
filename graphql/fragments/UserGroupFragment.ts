import gql from 'graphql-tag'

export const UserGroupFragments = {
   main: gql`
      fragment UserGroupMain on UserGroup {
         id
         context
         context_id
         group
         user_id
         __typename
      }
   `
}