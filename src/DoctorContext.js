import React, { createContext, useReducer } from 'react';

export const DoctorContext = createContext();

const initialState = {
  doctors: [],
  appoinment: [],
  timetable: [],
  isSignedIn: false,
};

export const ACTIONS = {
  ADD_DOCTOR: 'add_doctor',
  add_appoinment: 'add_appoinment',
  IS_SIGNED_IN: 'IS_SIGNED_IN',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.IS_SIGNED_IN:
      return { ...state, isSignedIn: action.isSignedIn };
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
