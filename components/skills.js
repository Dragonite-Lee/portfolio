import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect, useState, use } from "react"
import useScrollRedux from "../hooks/useScrollRedux";
import { dispatchSkills } from "../store/modules/scroll";

export default function Skills({skillsName}) {
    const [state, dispatch] = useScrollRedux();
    const [top, setTop] = useState(0);
    const [skill1, setSkills1] = useState(0);
    const [skill2, setSkills2] = useState(0);
    const [skill3, setSkills3] = useState(0);
    const [skill4, setSkills4] = useState(0);
    
    const scrollTopRef = useRef(null);
    const skillTopRef1 = useRef(null);
    const skillTopRef2 = useRef(null);
    const skillTopRef3 = useRef(null);
    const skillTopRef4 = useRef(null);

    const distanceChildFromTop = () => {
        if(scrollTopRef.current) {
            let skillsTop = scrollTopRef.current.getBoundingClientRect().top + window.pageYOffset;
            let skill1Top = skillTopRef1.current.getBoundingClientRect().top + window.pageYOffset;
            let skill2Top = skillTopRef2.current.getBoundingClientRect().top + window.pageYOffset;
            let skill3Top = skillTopRef3.current.getBoundingClientRect().top + window.pageYOffset;
            let skill4Top = skillTopRef4.current.getBoundingClientRect().top + window.pageYOffset;
            // console.log("skills top", skillsTop);
            dispatch(dispatchSkills(skillsTop));
            setTop(window.pageYOffset + window.innerHeight);
            setSkills1(skill1Top);
            setSkills2(skill2Top);
            setSkills3(skill3Top);
            setSkills4(skill4Top);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", distanceChildFromTop);
    }, []);
    
    
    return(
        <div className="w-full NanumSquareNeo-Variable">
            <div className="text-2xl text-center pt-24 text-white" ref={scrollTopRef}>Skills</div>
            <div>
                {/* *알약부분 */}
                <div className="flex align-center justify-center flex-wrap gap-2 mt-[48px] px-12 ">
                    {skillsName.map((data,index)=>(
                        <div key={index}
                            className="bg-black py-2 px-4 opacity-80 text-white rounded-[30px]"
                        >
                            {data}
                        </div>
                    ))}
                </div>
            </div>
            <div className="duration-1000 px-12 pt-24 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* *강점들과 간략설명 */}
                {/* *html css/scss javascript react git&github */}
                <div ref={skillTopRef1} className={`duration-1000 border text-white p-10 relative rounded-[15px]
                    ${skill1 < top-20 ? null : 'my-rotate-y-180 '} 
                `}>
                    <div className="absolute top-[-20px] left-[-20px] bg-[#1b2735] p-3 text-3xl z-10 -rotate-12 border-4 border-[#835419]">
                        html & css
                    </div>
                    <ul className="mt-6 leading-loose">
                        <li>HTML 웹 표준을 지키려 노력합니다.</li>
                        <li>styled component & css-module를 사용할 수 있습니다.</li>
                        <li>scss를 사용할 수 있습니다.</li>
                        <li>Tailwind, bootstrap 등 라이브러리를 사용할 수 있습니다.</li>
                        <li>keyframe으로 애니메이션을 활용할 수 있습니다.</li>
                        <li>크로스 브라우징 작업을 할 수 있습니다.</li>
                    </ul>
                </div>
                <div ref={skillTopRef2} className={`duration-1000 border text-white p-10 relative rounded-[15px]
                    ${skill2 < top-20 ? null : 'my-rotate-y-180 '} 
                `}>
                    <div className="absolute top-[-20px] right-[-20px] bg-[#1b2735] p-3 text-3xl z-10 rotate-12 border-4 border-[#835419]">
                        javascript
                    </div>
                    <ul className="mt-6 leading-loose">
                        <li>Javascript ES6 문법에 익숙합니다.</li>
                        <li>Typescript를 사용할 수 있습니다.</li>
                        <li>Webpack과 gulp같은 번들러를 사용할 수 있습니다.</li>
                        <li>DOM과 같이 웹 브라우저의 구동방식에 대해 이해하고 있습니다.</li>
                    </ul>
                </div>
                <div ref={skillTopRef3} className={`duration-1000 border text-white p-10 relative rounded-[15px]
                    ${skill3 < top-20 ? null : 'my-rotate-y-180 '} 
                `}>
                    <div className="absolute top-[-20px] left-[-20px] bg-[#1b2735] p-3 text-3xl z-10 -rotate-12 border-4 border-[#835419]">
                        react
                    </div>
                    <ul className="mt-6 leading-loose">
                        <li>Virtual DOM을 이해하고 있습니다.</li>
                        <li>Redux, Redux saga와 같은 상태관리 라이브러리를 사용할 수 있습니다.</li>
                        <li>Next.js를 이용한 SSR개발 경험이 있습니다.</li>
                        <li>React의 Hooks을 사용할 수 있습니다.</li>
                        <li>Graphql을 사용할 수 있습니다.</li>
                    </ul>
                </div>
                <div ref={skillTopRef4} className={`duration-1000 border text-white p-10 relative rounded-[15px]
                    ${skill4 < top-20 ? null : 'my-rotate-y-180 '} 
                `}>
                    <div className="absolute top-[-20px] right-[-20px] bg-[#1b2735] p-3 text-3xl z-10 rotate-12 border-4 border-[#835419]">
                        git & github
                    </div>
                    <ul className="mt-6 leading-loose">
                        <li>Git flow를 이해하고, main-develop-기능별 브랜치를 이용한 개발 경험이 있습니다.</li>
                        <li>Github Pull request를 이용해 코드 리뷰를 진행한 협력경험이 있습니다.</li>
                        <li>Github Actions으로 workflow를 자동화한 경험이 있습니다.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}