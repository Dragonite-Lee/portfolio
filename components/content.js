import WhoAmI from "./whoAmI"
import Skills from "./skills"


export default function Content({skillsName}) {

    return (
        <div className="w-full h-full NanumSquareNeo-Variable absolute z-10">
            <WhoAmI />
            <Skills skillsName={skillsName} />
        </div>
    )
}

