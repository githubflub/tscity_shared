import gql from 'graphql-tag'
import { UserGroupFragments } from './UserGroupFragment'

export const UserFragments = {
   owner: gql`
      fragment UserOwner on User {
         id
         username
         display_name
         email
         email_verified
         phone_number
         phone_verified
         full_name
         given_name
         create_time
         groups {
            ...UserGroupMain
         }
         __typename
      }
      ${UserGroupFragments.main}
   `,
   public: gql`
      fragment UserPublic on User {
         id
         username
         display_name
         groups {
            ...UserGroupMain
         }
         __typename
      }
      ${UserGroupFragments.main}
   `
}