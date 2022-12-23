import { style } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from "../../styles/templete.module.scss"
export default function Template1() {
    const personalDetails = useSelector((state) => state.personalDetails.value);
    const employmentState = useSelector((state) => state.employment.value);
    const educationState = useSelector(state => state.education.value);
    const internshipState = useSelector(state => state.internship.value);
    const coursesState = useSelector(state => state.courses.value);
    const referencesState = useSelector(state => state.reference.value);
    const extraCurricState = useSelector(state => state.extracurrics.value);
    const languagesState = useSelector(state => state.languages.value);
    const linksState = useSelector(state => state.links.value);

    return (
        <div className={styles.container}>
            <p className={styles.name}>{personalDetails.firstName} {personalDetails.lastName}</p>
            <div className={styles.main}>
                <p className={styles.jobTitle}>{personalDetails.jobTitle}</p>
                <p className={styles.adress}>{personalDetails.address},{personalDetails.city},{personalDetails.postalCode},{personalDetails.country}</p>
                <p className={styles.phone}>{personalDetails.phone}</p>
                <p className={styles.email}>{personalDetails.email}</p>
                {/* <p>Id Proof:{personalDetails.idProof}</p>
                <p>PlaceOfBirth:{personalDetails.placeOfBirth}</p> */}
            </div>
            <div className={styles.profile}>
                <p className={styles.profileheading}>Profile</p>
                <p className={styles.professionalSummary}>{personalDetails.professionalSummary}</p>
            </div>
            <div className={styles.employmenthistory}>
                <p className={styles.Employmentheading}>Employment History</p>
                {employmentState.map((e) => {
                    return (
                        <div className={styles.empcontent}>
                            <p className={styles.employment1}>{e.jobTitle}................................................................................................................................{e.start}to{e.end}({e.city})</p>
                            <p className={styles.employment1}>EmployerName:{e.employer}</p>
                            <p className={styles.employment2}>{e.decs}</p>

                        </div>
                    )
                }
                )}
            </div>
            <div className={styles.educationhistory}>
                <p className={styles.Educationeading}>Employment History</p>
                {educationState.map((e) => {
                    return (
                        <div className={styles.educontent}>
                            <p className={styles.education1}>{e.school}...........................................................................................{e.start}to{e.end}({e.city})</p>
                            <p className={styles.education1}>{e.degree}</p>
                            <p className={styles.education2}>{e.decs}</p>
                        </div>


                    )

                })
                }



            </div>
            <div className={styles.skills}>
                <p className={styles.skillheading}>Skill-Set</p>
                <p className={styles.skillsset}>{personalDetails.skills}</p>
            </div>

            <div className={styles.internship}>
                <p className={styles.Educationeading}>Internship</p>
                {internshipState.map((e) => {
                    return (
                        <div className={styles.educontent}>
                            <p className={styles.employment1}>{e.internship}................................................................................................................................{e.start}to{e.end}({e.city})</p>
                            <p className={styles.employment1}>EmployerName:{e.employer}</p>
                            <p className={styles.employment2}>{e.decs}</p>
                        </div>


                    )

                })
                }


            </div>
            <div className={styles.languages}>
                <p className={styles.languagesHedaing}>Languages known</p>
                {languagesState.map((e) => {
                    return (
                        <div className={styles.educontent}>
                            <p className={styles.employment1}>{e.name}({e.proficiency})</p>
                        </div>


                    )

                })
                }


            </div>
            <div className={styles.reference}>
                <p className={styles.referenceheading}>References known</p>
                {referencesState.map((e) => {
                    return (
                        <div className={styles.educontent}>
                            <p className={styles.employment1}>{e.name} Ph:{e.phone} email:{e.email}</p>
                            <p className={styles.employment1}>{e.company}</p>

                        </div>


                    )

                })
                }


            </div>




        </div>
    )
}
