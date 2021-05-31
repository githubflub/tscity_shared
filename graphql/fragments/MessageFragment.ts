import gql from 'graphql-tag'
import { UserGroupFragments } from './UserGroupFragment'

export const MessageFragment = {
   user: gql`
      fragment MessageUser on Message {
         id
         sender {
            id
            username
            display_name
            groups {
               ...UserGroupMain
            }
            __typename
         }
         thread_id
         send_time
         content
         type
         __typename
      }
      ${UserGroupFragments.main}
   `
}