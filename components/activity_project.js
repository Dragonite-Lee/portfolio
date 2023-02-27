import Image from "next/image"
import { useRef, useEffect } from "react"
import useScrollRedux from "../hooks/useScrollRedux";
import { dispatchActivity_Project } from "../store/modules/scroll";

const activity_arr = [
    {
        name: '언더패스 UIUX',
        content: 'UI/UX의 정의와 좋은 UI/UX에 대해 공부',
        date: '2021년 2월 1일 → 2021년 2월 28일',
        cdSrc: 'CD_언더패스', 
        id: 0,
    },
    {
        name: '패스트캠퍼스 프론트개발자 완주반',
        content: '프론트엔드의 전반적인 언어를 공부',
        date: '2021년 2월 21일 → 2021년 5월 23일',
        cdSrc: 'CD_패캠',
        id: 1,
    },
    {
        name: '흥부하우스',
        content: '한양대에리카 단기임대플랫폼 창업동아리',
        date: '2022년 8월 1일 → 현재진행중',
        cdSrc: 'CD_흥부',
        id: 2,
    }
]

export default function Activity_Project() {
    const [state, dispatch] = useScrollRedux();
    const scrollTopRef = useRef(null);
    const scrollanimation = useRef(null);
    const animationTarget = useRef(null);
    
    const distanceChildFromTop = () => {
        if(scrollTopRef.current) {
            let activity_projectTop = scrollTopRef.current.getBoundingClientRect().top + window.pageYOffset;
            // console.log("activity_project top", activity_project);
            dispatch(dispatchActivity_Project(activity_projectTop))
        }
    };
    // const scrollAnimation = () => {
    //     let a = scrollanimation.current.getBoundingClientRect().top + window.pageYOffset;
    //     let b = window.innerHeight;
    //     let height = window.scrollY;
    //     const uiTop = 60 / b * height - 60 * a / b + 50;
    //     const uiLeft = -45 / b * height + 45 * a / b + 50;
    //     const uiText = -4 / b * height + 4 * a / b + 7;
    //     if(animationTarget.current) {
    //         animationTarget.current.transition = 'all 500ms ease-in';
    //         animationTarget.current.style.top = `${uiTop}%`;
    //         animationTarget.current.style.left = `${uiLeft}%`;
    //         animationTarget.current.style.fontSize = `text-${uiText}`;
    //     }
    //     console.log(uiTop)
       
    // }

    useEffect(() => {
        window.addEventListener("scroll", distanceChildFromTop);
        // window.addEventListener("scroll", scrollAnimation);
    }, [distanceChildFromTop]);
    
    return (
        <div className="overflow-hidden relative w-full Pretendard-Bold h-[calc(100vh-4rem)] bg-[#1B2735]" ref={scrollTopRef}>
            <div >
                {/* <div className=" relative h-[calc(100vh-4rem)] text-left text-white py-12 pl-12" ref={scrollanimation}>
                    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[4.5rem]" ref={animationTarget}>ACTIVITY & PROJECT</div>
                </div> */}<div className="text-3xl text-left text-white py-12 pl-12">ACTIVITY & PROJECT</div>
                <div className="w-full">
                    {
                        activity_arr.map((data) => (
                            <div className="px-12 h-[calc(100vh-4rem)]" key={data.id}>
                                <div className={`absolute bottom-0 translate-y-[50%] rounded-[50%] transition duration-[400ms] ease-out
                                    hover:translate-y-[0%] hover:ease-in
                                    ${data.id === 0 ? '' : data.id === 1 ? 'translate-x-[25%]' : data.id === 2 ? 'translate-x-[50%]' : ''}
                                `}>
                                    <Image 
                                        src={require(`../src/${data.cdSrc}.png`)}
                                        alt="spinCD"
                                        className="w-[36vw] h-[36vw] hover:animate-[roundTurn_6s_linear_infinite]"
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
            
            
        </div>
    )
}
