import Image from "next/image"
import { useRef, useEffect } from "react"
import useScrollRedux from "../hooks/useScrollRedux";
import { dispatchCertificate } from "../store/modules/scroll";

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
       
    }, []);
    
    return (
        <div className="w-full NanumSquareNeo-Variable h-[calc(200vh-8rem)] bg-gradient-to-b from-[#1B2735] to-[#2A4982]" ref={scrollTopRef}>
            <div className="sticky top-[4rem] text-3xl text-left pt-12 text-white pl-12">CERTIFICATE</div>
            <div>
                <Image 
                    src={require("../src/snow_blue.png")}
                    alt="눈송이"
                    className=""
                />
            </div>
        </div>
    )
}