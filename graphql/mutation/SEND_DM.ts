import gql from 'graphql-tag'
import { UserFragments } from '../fragments/UserFragment'
import { MessageFragment } from '../fragments/MessageFragment'

// NEVER EVER ASK FOR MESSAGES HERE OR U WILL BREAK THE SITE
export const SEND_DM = gql`
   mutation SendDM($target_user_id: Int!, $content: String!) {
      sendDM(target_user_id: $target_user_id, content: $content)
      {
         thread {
            id
            access_users
            users {
               ...UserPublic
            }
            __typename
         }
         message {
            ...MessageUser
         }
      }
   }
   ${MessageFragment.user}
   ${UserFragments.public}
`