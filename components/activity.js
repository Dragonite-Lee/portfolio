import Image from "next/image"
import { useRef, useEffect } from "react"
import useScrollRedux from "../hooks/useScrollRedux";
import { dispatchActivity } from "../store/modules/scroll";

const activity_arr = [
    {
        name: '언더패스 UIUX',
        content: 'UI/UX의 정의와 좋은 UI/UX에 대해 공부',
        date: '2021년 2월 1일 → 2021년 2월 28일',
        id: 0,
    },
    {
        name: '패스트캠퍼스 프론트개발자 완주반',
        content: '프론트엔드의 전반적인 언어를 공부',
        date: '2021년 2월 21일 → 2021년 5월 23일',
        id: 1,
    },
    {
        name: '흥부하우스',
        content: '한양대에리카 단기임대플랫폼 창업동아리',
        date: '2022년 8월 1일 → 현재진행중',
        id: 2,
    }
]

export default function Activity() {
    const [state, dispatch] = useScrollRedux();
    const scrollTopRef = useRef(null);
    
    const distanceChildFromTop = () => {
        if(scrollTopRef.current) {
            let activityTop = scrollTopRef.current.getBoundingClientRect().top + window.pageYOffset;;
            // console.log("activityTop top", activityTop);
            dispatch(dispatchActivity(activityTop))
        }
    };
    
    useEffect(() => {
        window.addEventListener("scroll", distanceChildFromTop);
    }, [distanceChildFromTop]);
    
    return (
        <div className="overflow-hidden relative w-full NanumSquareNeo-Variable h-[calc(100vh-4rem)] bg-[#1B2735]" ref={scrollTopRef}>
            <div className="text-3xl text-left text-white py-12 pl-12">ACTIVITY</div>
            <div className="px-12">
                <div className="absolute bottom-0 translate-y-[50%] w-[24vw] h-[24vw] rounded-[50%] bg-[#D6DBC7] transition duration-[400ms]
                    hover:translate-y-[0%] hover:ease-in hover:animate-[roundTurn_6s_linear_infinite]
                ">
                    <div className="origin-center absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] w-[7vw] h-[7vw] rounded-[50%] bg-white"></div>
                    <div className="absolute left-1/4 top-1/4">이준영</div>
                </div>
            </div>
        </div>
    )
}
