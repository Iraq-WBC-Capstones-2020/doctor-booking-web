import React, { createContext, useReducer } from 'react';

export const DoctorContext = createContext();

const initialState = {
  doctors: [],
  appoinment: [],
  timetable: [],
  isSignedIn: false,
  doctorInfo: {},
};

export const ACTIONS = {
  ADD_DOCTOR: 'ADD_DOCTOR',
  IS_SIGNED_IN: 'IS_SIGNED_IN',
  GET_DOCTORS: 'GET_DOCTORS',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.IS_SIGNED_IN:
      return { ...state, isSignedIn: action.isSignedIn };
    case ACTIONS.GET_DOCTORS:
      return { ...state, doctors: action.payload.doctors };
    case ACTIONS.ADD_DOCTOR:
      return { ...state, doctorInfo: action.doctorInfo };
    default:
      return state;
  }
}

function DoctorInfoProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DoctorContext.Provider value={[state, dispatch]}>
      {props.children}
    </DoctorContext.Provider>
  );
}

export default DoctorInfoProvider;
