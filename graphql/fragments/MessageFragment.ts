import gql from 'graphql-tag'
import { UserGroupFragments } from './UserGroupFragment'

export const MessageFragment = {
   user: gql`
      fragment MessageUser on Message {
         id
         sender_id
         sender_username
         sender_display_name
         sender_groups {
            context
            context_id
            group
            user_id
         }
         origin_thread_id
         thread_ids
         targets {
            target_type
            user_id
            username
            user_display_name
            thread_id
            thread_internal_name
            thread_display_name
         }
         send_time
         content
         type
         __typename
      }
      ${UserGroupFragments.main}
   `
}