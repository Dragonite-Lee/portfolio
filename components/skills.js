import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect, useState, use } from "react"
import useScrollRedux from "../hooks/useScrollRedux";
import { dispatchSkills } from "../store/modules/scroll";

export default function Skills({skillsName}) {
    const [state, dispatch] = useScrollRedux();
    const [top, setTop] = useState(0);
    const scrollTopRef = useRef(null);

    const distanceChildFromTop = () => {
        if(scrollTopRef.current) {
            let skillsTop = scrollTopRef.current.getBoundingClientRect().top + window.pageYOffset;
            
            // console.log("skills top", skillsTop);
            dispatch(dispatchSkills(skillsTop));
            setTop(window.pageYOffset + window.innerHeight);
            
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", distanceChildFromTop);
    }, []);
    
    
    return(
        <div className="w-full NanumSquareNeo-Variable h-[calc(400vh-16rem)] flex relative" ref={scrollTopRef}>
            <div className="sticky top-[4rem] bg-[#1B2735] w-full h-[calc(100vh-4rem)] flex">
                <div className="w-1/2">
                    <div className="text-3xl text-left pt-12 text-white pl-12">SKILLS</div>
                    <div>
                        {/* *알약부분 */}
                        <div className="flex align-center justify-left flex-wrap gap-2 mt-[30px] px-12">
                            {skillsName.map((data,index)=>(
                                <div key={index}
                                    className="bg-black py-2 px-4 opacity-80 text-white rounded-[30px]"
                                >
                                    {data}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Image 
                    src={require("../src/snowTree.png")}
                    alt="나무이미지"
                    className="absolute right-6 top-0 w-1/2 h-full"
                />
            </div>
            <div className="absolute right-0 Pretendard-Regular w-1/2 h-[calc(100vh-4rem)]">
                <div>
                    <div className="sticky top-[10rem] mx-16 mt-24 pl-6 pt-12 w-5/6 h-[calc(100vh-16rem)] text-black bg-[#D7E9FF] rounded-[30px]">
                        <div className="text-3xl text-[#502924]">
                            html & css
                        </div>
                        <ul className="text-xl mt-6 leading-loose text-[#161F29]">
                            <li>HTML 웹 표준을 지키려 노력합니다.</li>
                            <li>styled component & css-module를 사용할 수 있습니다.</li>
                            <li>scss를 사용할 수 있습니다.</li>
                            <li>Tailwind, bootstrap 등 라이브러리를 사용할 수 있습니다.</li>
                            <li>keyframe으로 애니메이션을 활용할 수 있습니다.</li>
                            <li>크로스 브라우징 작업을 할 수 있습니다.</li>
                        </ul>
                    </div>
                    <div className="sticky top-[10rem] mx-16 mt-[12rem] pl-6 pt-12 w-5/6 h-[calc(100vh-16rem)] text-black bg-[#94A9E0] rounded-[30px]">
                        <div className="text-3xl text-[#502924]">
                            javascript
                        </div>
                        <ul className="text-xl mt-6 leading-loose text-[#161F29]">
                            <li>Javascript ES6 문법에 익숙합니다.</li>
                            <li>Typescript를 사용할 수 있습니다.</li>
                            <li>Webpack과 gulp같은 번들러를 사용할 수 있습니다.</li>
                            <li>DOM과 같이 웹 브라우저의 구동방식에 대해 이해하고 있습니다.</li>
                        </ul>
                    </div>
                    <div className="sticky top-[10rem] mx-16 mt-[12rem] pl-6 pt-12 w-5/6 h-[calc(100vh-16rem)] text-black bg-[#2A4982] rounded-[30px]">
                        <div className="text-3xl text-[#C4CDD1]">
                            react
                        </div>
                        <ul className="text-xl mt-6 leading-loose text-[#ffffff]">
                            <li>Virtual DOM을 이해하고 있습니다.</li>
                            <li>Redux, Redux saga와 같은 상태관리 라이브러리를 사용할 수 있습니다.</li>
                            <li>Next.js를 이용한 SSR개발 경험이 있습니다.</li>
                            <li>React의 Hooks을 사용할 수 있습니다.</li>
                            <li>Graphql을 사용할 수 있습니다.</li>
                        </ul>
                    </div>
                    <div className="sticky top-[10rem] mx-16 mt-[12rem] pl-6 pt-12 w-5/6 h-[calc(100vh-16rem)] text-black bg-[#334D6D] rounded-[30px]">
                        <div className="text-3xl text-[#C4CDD1]">
                            git & github
                        </div>
                        <ul className="text-xl mt-6 leading-loose text-[#ffffff]">
                            <li>Git flow를 이해하고, main-develop-기능별 브랜치를 이용한 개발 경험이 있습니다.</li>
                            <li>Github Pull request를 이용해 코드 리뷰를 진행한 협력경험이 있습니다.</li>
                            <li>Github Actions으로 workflow를 자동화한 경험이 있습니다.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}