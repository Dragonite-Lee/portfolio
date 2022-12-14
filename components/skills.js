import Image from "next/image"
import Link from "next/link"

export default function Skills({skillsName}) {
    
    let scroll = window.screenTop;
    console.log(scroll)
    return(
        <div className="w-full NanumSquareNeo-Variable">
            <div className="text-2xl text-center pt-24 text-white">Skills</div>
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