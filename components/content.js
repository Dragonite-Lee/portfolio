import WhoAmI from "./whoAmI"
import Skills from "./skills"
import Certificate from "./certificate"
import Award from "./award"
import Activity_Project from "./activity_project"

export default function Content({skillsName}) {

    return (
        <div className="w-full h-full NanumSquareNeo-Variable absolute z-10">
            <WhoAmI />
            <Skills skillsName={skillsName} />
            <Certificate />
            <Award />
            <Activity_Project />
        </div>
    )
}

