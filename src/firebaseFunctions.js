import { db, auth } from './Firebase';

export const firebaseFunctions = {
  //put your function reference here like:
  //functionName : function reference
  signIn: signIn,
};

//write your function here
async function signIn(email, password) {
  await auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res.user);
    })
    .catch((err) => {
      alert(err.message);
    });
}
