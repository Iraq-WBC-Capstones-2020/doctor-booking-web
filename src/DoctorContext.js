import React, { createContext, useReducer } from 'react';

export const DoctorContext = createContext();

const initialState = {
  doctors: [],
  appoinment: [],
  timetable: [],
  doctorInfo: {},
};

export const ACTIONS = {
  ADD_DOCTOR: 'ADD_DOCTOR',
  add_appoinment: 'add_appoinment',
};

function reducer(state, action) {
  switch (action.type) {
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
