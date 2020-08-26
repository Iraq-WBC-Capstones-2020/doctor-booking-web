import React, { createContext, useEffect, useState } from 'react';
import Avatar from './ProfileHeader/images/avatar1.svg';
import { useLocation } from 'react-router';
import { db, storage } from '../../Firebase';

export const InfoContext = createContext();

export function InfoProvider(props) {
  let location = useLocation();

  const [uid, setUid] = useState(location.pathname.split('/')[2].trim());
  const [doctor, setDocotr] = useState({});

  useEffect(() => {
    db.collection('doctors')
      .doc(uid)
      .get()
      .then((data) => setDocotr(data.data()));
  }, [uid]);

  //image url
  // storage
  //   .ref(`doctors/${uid}`)
  //   .getDownloadURL()
  //   .then((url) => console.log(url));

  const [DocInfo, setDocInfo] = [
    {
      fullName: doctor?.name,
      speciality: doctor?.speciality,
      experinces: doctor?.experience,
      educaton: doctor?.education,
      id: doctor?.uid,
      photo: Avatar,
      days: doctor?.timeTable,
    },
  ];

  return (
    <InfoContext.Provider value={[DocInfo, setDocInfo]}>
      {props.children}
    </InfoContext.Provider>
  );
}
