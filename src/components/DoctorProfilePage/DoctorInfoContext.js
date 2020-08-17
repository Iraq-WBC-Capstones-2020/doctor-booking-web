import React, { createContext, useState } from 'react';
import Avatar from './ProfileHeader/images/avatar1.svg';

export const InfoContext = createContext();

export function InfoProvider(props) {
  const [DocInfo, setDocInfo] = [
    {
      fullName: 'Salah Mohammed',
      speciality: 'Children doctor',
      experinces:
        "Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.",
      educaton:
        "Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.",
      photo: Avatar,
      days: [
        { day: 'sunday', date: '11 - 5' },
        { day: 'monday', date: '11 - 3' },
        { day: 'tuseday', date: '12 - 4' },
        { day: 'wedensday', date: '9 - 1' },
        { day: 'thirsday', date: '11 - 5' },
        { day: 'friday', date: 'off day' },
        { day: 'saturday', date: 'off day' },
      ],
    },
  ];

  return (
    <InfoContext.Provider value={[DocInfo, setDocInfo]}>
      {props.children}
    </InfoContext.Provider>
  );
}
