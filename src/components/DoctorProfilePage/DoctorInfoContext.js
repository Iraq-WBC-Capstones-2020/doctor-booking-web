import React, { createContext, useEffect, useState } from 'react';
import Avatar from './ProfileHeader/images/avatar1.svg';
import { useParams } from 'react-router';
import { db, storage } from '../../Firebase';

export const InfoContext = createContext();

export function InfoProvider(props) {
  const { id } = useParams();
  const [doctor, setDocotr] = useState({});

  useEffect(() => {
    db.collection('doctors')
      .doc(id?.trim())
      .get()
      .then((data) => setDocotr(data.data()));
  }, [id?.trim()]);

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
      location: doctor.location,
    },
  ];

  return (
    <InfoContext.Provider value={[DocInfo, setDocInfo]}>
      {props.children}
    </InfoContext.Provider>
  );
}
