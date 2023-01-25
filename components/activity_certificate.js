import { useRef, useEffect } from "react";
import useScrollRedux from "../hooks/useScrollRedux";
import { dispatchActivity_Certificate } from "../store/modules/scroll";

const award_certificate_arr = [
    {
        name: 'IoT지식능력검정',
        date: '2021년 12월 10일'
    },
    {
        name: 'GTQ 그래픽기술자격 1급',
        date: '2021년 9월 25일'
    },
    {
        name: 'SQLD',
        date: '2021년 12월 17일'
    },
    {
        name: '컴퓨터활용능력 1급',
        date: '2021년 2월 19일'
    },
    {
        name: '2022-2학기 SID Audition 원페이퍼 창업경진대회 수상',
        date: '2022년 11월 29일'
    },
    {
        name: '제 3회 해동창업경진대회 금상',
        date: '2022년 10월 11일 ~ 2022년 12월 31일'
    },
];

const activity_arr = [
    {
        name: '언더패스 UIUX',
        content: 'UI/UX의 정의와 좋은 UI/UX에 대해 공부'
    },
    {
        name: '페스트캠퍼스 프론트개발자 완주반',
        content: '프론트엔드의 전반적인 언어를 공부'
    },
    {
        name: '흥부하우스',
        content: '한양대에리카 단기임대플랫폼 창업동아리'
    }
]

export default function Activity_Certificate() {
    const [state, dispatch] = useScrollRedux();
    const scrollTopRef = useRef(null);
    
    const distanceChildFromTop = () => {
        if(scrollTopRef.current) {
            let activity_certificateTop = scrollTopRef.current.getBoundingClientRect().top + window.pageYOffset;
            console.log("activity&certificate top", activity_certificateTop);
            dispatch(dispatchActivity_Certificate(activity_certificateTop))
        }
    };
    
    useEffect(() => {
        window.addEventListener("scroll", distanceChildFromTop);
    }, []);

    console.log(award_certificate_arr)
    return(
        <div className="w-full NanumSquareNeo-Variable">
            <div className="text-2xl text-center pt-24 text-white" ref={scrollTopRef}>Activity & Certificate</div>
            <div className="text-white px-12 pt-24">
                {award_certificate_arr.map((data,index) => (
                    <div key={index}>
                        {data.name}
                    </div>
                ))}
            </div>
        </div>
    )
}