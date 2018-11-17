/**
 * && - AND Operator. Both sides need to be true
 * || - OR Operator. One side need to be true
 * 
 *  ! - NOT Operator. 
 * 
 */

 let isVerified = true
 let isLoggedIn = true
 let hasPaymentToken = true
 let isGuest = true

 if (isVerified && isLoggedIn && hasPaymentToken) {
     console.log('Grreting message to user');
     console.log('Grant Access ot Paid Courses');
 } else if (isVerified || isGuest) {
     console.log('Allow free previews');
 } else {
     console.log('Message : Please contact Admin');
 }