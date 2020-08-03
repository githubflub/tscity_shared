export function validateMessage(message) {
   let submit_value = message;
   let block_submission = false;

   if (typeof submit_value !== 'string') {
      block_submission = true
   }

   submit_value = submit_value.trim()

   if (!submit_value) {
      block_submission = true
   }

   if (block_submission) {
      throw new Error('Invalid input')
   }
   else {
      return submit_value;
   }
}