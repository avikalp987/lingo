"use client"

import { Admin, ListGuesser, Resource } from "react-admin"
import simpleRestProvider from "ra-data-simple-rest"
import { courseList } from "./course/list"
import { CourseCreate } from "./course/create"
import { CourseEdit } from "./course/edit"
import { UnitList } from "./unit/list"
import { UnitCreate } from "./unit/create"
import { UnitEdit } from "./unit/edit"
import { LessonList } from "./lesson/list"
import { LessonEdit } from "./lesson/edit"
import { LessonCreate } from "./lesson/create"
import { ChallengeList } from "./challenge/list"
import { ChallengeEdit } from "./challenge/edit"
import { ChallengeCreate } from "./challenge/create"
import { ChallengeOptionList } from "./challengeOption/list"
import { ChallengeOptionEdit } from "./challengeOption/edit"
import { ChallengeOptionCreate } from "./challengeOption/create"

const dataProvider = simpleRestProvider("/api")

const App = () => {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource
                name="courses"
                recordRepresentation={"title"}
                list={courseList}
                edit={CourseEdit}
                create={CourseCreate}
                options={{ label: "Courses"}}
            />

            <Resource
                name="units"
                recordRepresentation={"title"}
                list={UnitList}
                edit={UnitEdit}
                create={UnitCreate}
                options={{ label: "Units"}}
            />
            
            <Resource
                name="lessons"
                recordRepresentation={"title"}
                list={LessonList}
                edit={LessonEdit}
                create={LessonCreate}
                options={{ label: "Lessons"}}
            />            

            <Resource
                name="challenges"
                recordRepresentation={"question"}
                list={ChallengeList}
                edit={ChallengeEdit}
                create={ChallengeCreate}
                options={{ label: "Challenges"}}
            /> 

            <Resource
                name="challengeOptions"
                recordRepresentation={"text"}
                list={ChallengeOptionList}
                edit={ChallengeOptionEdit}
                create={ChallengeOptionCreate}
                options={{ label: "Challenge Options"}}
            />            

        </Admin>
    )
}

export default App