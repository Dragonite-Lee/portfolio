import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect } from "react"
import useScrollRedux from "../hooks/useScrollRedux";
import { dispatchSkills } from "../store/modules/scroll";

export default function Skills({skillsName}) {
    const [state, dispatch] = useScrollRedux();
    
    const scrollTopRef = useRef(null);

    const distanceChildFromTop = () => {
        let skillsTop = scrollTopRef.current.getBoundingClientRect().top + window.pageYOffset;;
        console.log("skills top", skillsTop);
        dispatch(dispatchSkills(skillsTop))
    };

    useEffect(() => {
        window.addEventListener("scroll", distanceChildFromTop);
    }, []);
    
    console.log(state.Skills)
    return(
        <div className="w-full NanumSquareNeo-Variable">
            <div className="text-2xl text-center pt-24 text-white" ref={scrollTopRef}>Skills</div>
            <div>
                {/* *알약부분 */}
                <div className="flex align-center justify-center gap-2 mt-[48px] ">
                    {skillsName.map((data,index)=>(
                        <div key={index}
                            className="border"
                        >
                            {data}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                {/* *해당이모티콘과 간략설명 */}
            </div>
        </div>
    )
}