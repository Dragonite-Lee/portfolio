import Image from "next/image"
import { useRef, useEffect } from "react"
import useScrollRedux from "../hooks/useScrollRedux";
import { dispatchCertificate } from "../store/modules/scroll";

const certificate_arr = [
    { 
        name: 'CERTIFICATE',
        id: 0,
    },
    {
        name: '컴퓨터활용능력 1급',
        date: '2021년 2월 19일',
        id: 1,
        star: 'blue'
    },
    {
        name: 'GTQ 그래픽기술자격 1급',
        date: '2021년 9월 25일',
        id: 2,
        star: 'red'
    },
    {
        name: 'IoT지식능력검정',
        date: '2021년 12월 10일',
        id: 3,
        star: 'blue'
    },
    {
        name: 'SQLD',
        date: '2021년 12월 17일',
        id: 4,
        star: 'red'
    },
];

export default function Certificate() {
    const [state, dispatch] = useScrollRedux();
    const scrollTopRef = useRef(null);
    
    const distanceChildFromTop = () => {
        if(scrollTopRef.current) {
            let certificateTop = scrollTopRef.current.getBoundingClientRect().top + window.pageYOffset;;
            // console.log("certificateTop top", certificateTop);
            dispatch(dispatchCertificate(certificateTop))
        }
    };
    
    useEffect(() => {
        window.addEventListener("scroll", distanceChildFromTop);
    }, [distanceChildFromTop]);
    
    return (
        <div className="w-full NanumSquareNeo-Variable h-[calc(500vh-20rem)] bg-gradient-to-b from-[#1B2735] to-[#2A4982]" ref={scrollTopRef}>
            {/* <div className="h-[calc(100vh-4rem)]">
                <div className="sticky top-[4rem] text-3xl text-left text-white py-12 pl-12">CERTIFICATE</div>
            </div> */}
            {certificate_arr.map((data) => (
                <div key={data.id} className="sticky top-[12rem]">
                    {data.id === 0 ? (
                        <div>
                        <div className="translate-y-[-8rem] h-[calc(100vh-4rem)] text-3xl text-left text-white py-12 pl-12">{data.name}</div>
                    </div>
                    ) : (
                        <div className={`h-[calc(100vh-4rem)] ${data.id%2===1 ? '' : 'pt-64'} 
                            ${data.id%4===1 ? 'pl-12' : data.id%4===2 ? 'pl-[25vw]' : data.id%4===3 ? 'pl-[50vw]' : data.id%4===0 ? 'pl-[75vw]' : ''}
                        `}>
                            <Image 
                                src={require(`../src/snow_${data.star}.png`)}
                                alt="눈송이"
                                className="animate-[snowTurn_4s_linear_infinite]"
                            />
                            <div className="text-white Pretendard-Regular text-left">
                                <div className="text-2xl">
                                    {data.name}
                                </div>
                                <div className="text-xl">
                                    {data.date}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}