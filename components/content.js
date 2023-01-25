import WhoAmI from "./whoAmI"
import Skills from "./skills"
import Activity_Certificate from "./activity_certificate"

export default function Content({skillsName}) {

    return (
        <div className="w-full h-full NanumSquareNeo-Variable absolute z-10">
            <WhoAmI />
            <Skills skillsName={skillsName} />
            <Activity_Certificate />
        </div>
    )
}

