// TODO: Change this unsecure way later to an API GET-Request

// (Nidrux) This is just a faster and cleaner way to do this.
const allowedEmails = ["jackob.dev@gmail.com", "system@mezomnmt.com"];
export default function checkEmail(emailToCheck) {
  return allowedEmails.includes(emailToCheck);
}
