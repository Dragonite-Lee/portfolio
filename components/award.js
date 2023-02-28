import Image from "next/image"
import { useRef, useEffect } from "react"
import useScrollRedux from "../hooks/useScrollRedux";
import { dispatchAward } from "../store/modules/scroll";

const award_arr = [
    {
        name: '2022-2학기 SID Audition 원페이퍼',
        name2: '창업경진대회 수상',
        date: '2022년 11월 29일',
        id: 0,
    },
    {
        name: '제 3회 해동창업경진대회',
        name2: '금상',
        date: '2022년 10월 11일 ~ 2022년 12월 31일',
        id: 1,
    },
]

export default function Award() {
    const [state, dispatch] = useScrollRedux();
    const scrollTopRef = useRef(null);
    
    const distanceChildFromTop = () => {
        if(scrollTopRef.current) {
            let awardTop = scrollTopRef.current.getBoundingClientRect().top + window.pageYOffset-64;
            // console.log("awardTop top", awardTop);
            dispatch(dispatchAward(awardTop))
        }
    };
    
    useEffect(() => {
        window.addEventListener("scroll", distanceChildFromTop);
    }, [distanceChildFromTop]);
    
    return (
        <div className="relative w-full NanumSquareNeo-Variable h-[calc(100vh-4rem)] bg-[#1B2735]" ref={scrollTopRef}>
            <div className="text-3xl text-left text-white py-12 pl-12 ">AWARD</div>
            <div className="h-[calc(100vh-4rem-132px)]">
                <div className="absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]">
                    <Image 
                        src={require(`../src/spin.png`)}
                        alt="spinsnow"
                        className="animate-[roundTurn_10s_linear_infinite] w-[22vw] h-[22vw]"
                    />
                </div>
                {
                    award_arr.map((data) => (
                        <div key={data.id} className={`Pretendard-Regular text-white absolute 
                            ${data.id % 2 === 0 ? 'left-1/4 top-1/4 translate-x-[-40%] translate-y-[-50%]' : 'left-3/4 top-3/4 translate-x-[-60%] translate-y-[-50%]'}
                        `}>
                            <div className="text-2xl">{data.name}</div>
                            <div className="text-2xl">{data.name2}</div>
                            <div className="text-xl">{data.date}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
