import React, { createContext, useReducer } from 'react';

export const DoctorContext = createContext();

const initialState = {
  doctors: [],
  appoinment: [],
  timetable: [],
};

export const ACTIONS = {
  ADD_DOCTOR: 'add_doctor',
  add_appoinment: 'add_appoinment',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.ADD_DOCTOR:
      return state;
    default:
      return state;
  }
}

function DoctorInfoProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DoctorContext.Provider value={'hello'}>
      {props.children}
    </DoctorContext.Provider>
  );
}

export default DoctorInfoProvider;
