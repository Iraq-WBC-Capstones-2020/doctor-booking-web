import { db, auth } from './Firebase';

export const firebaseFunctions = {
  //put your function reference here like:
  //functionName : function reference
  bookAppointment: bookAppointment,
};

//write your function here
function bookAppointment(appointmentInfo) {
  return db
    .collection('appointments')
    .doc()
    .set(appointmentInfo, { merge: true });
}
