import React, { Fragment } from 'react'
import ProfileHeader from '../../components/DoctorProfilePage/ProfileHeader/ProfileHeader'
import TimeTable from '../../components/DoctorProfilePage/TimeTable/TimeTable'


function DoctorProfilePage(){

    return(
        <Fragment>
        <ProfileHeader />
        <TimeTable />
        </Fragment>
    )

}

export default DoctorProfilePage