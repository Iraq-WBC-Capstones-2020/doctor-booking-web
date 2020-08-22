import React, { createContext, useReducer } from 'react';

export const DoctorContext = createContext();

const initialState = {
  doctors: [],
  appoinment: [],
  timetable: [],
  filterDoctors: [],
};

export const ACTIONS = {
  ADD_DOCTOR: 'add_doctor',
  add_appoinment: 'add_appoinment',
  FILTER_DOCTORS: 'filter_doctors',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_DOCTOR:
      return { ...state, doctors: action.payload.doctors };
    case ACTIONS.FILTER_DOCTORS:
      return { ...state, filterDoctors: action.payload.filterdoctors };
    default:
      return state;
  }
}

function DoctorInfoProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DoctorContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DoctorContext.Provider>
  );
}

export default DoctorInfoProvider;
