import { db, auth } from './Firebase';
import { firestore } from 'firebase';

export const firebaseFunctions = {
  //put your function reference here like:
  //functionName : function reference
  signUp: signUp,
};

//write your function here
async function signUp(doctorInfo) {
  let user;
  await auth
    .createUserWithEmailAndPassword(doctorInfo.email, doctorInfo.password)
    .then((res) => (user = res.user))
    .catch((err) => console.log(err));

  const doctorData = {
    name: doctorInfo.name,
    province: doctorInfo.province,
    city: doctorInfo.city,
    reference: doctorInfo.reference,
    neighborhood: doctorInfo.neighborhood,
    location: new firestore.GeoPoint(
      doctorInfo.marker[0],
      doctorInfo.marker[1]
    ),
    phoneNumber: doctorInfo.phoneNumber,
    gender: doctorInfo.gender,
    speciality: doctorInfo.speciality,
    education: doctorInfo.education,
    experience: doctorInfo.experience,
    timeTable: doctorInfo.timeTable,
  };

  db.collection('doctors')
    .doc(user.uid)
    .set(doctorData, { merge: true })
    .then(() => console.log('document created and written'));
}
