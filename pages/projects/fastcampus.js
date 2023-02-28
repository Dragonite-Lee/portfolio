import Image from "next/image";
import ProHeader from "../../components/pro_header";

export default function Fastcampus() {
    
    return (
        <div className="w-full NanumSquareNeo-Variable h-[calc(100vh)]">
            <ProHeader />
            <div>
                <div className="text-3xl text-left text-black pt-[96px] pb-12 pl-12 ">FastCampus FrontEnd</div>
            </div>
            <div className="bg-[#D9D9D9] p-20 Pretendard-Regular">
                <div className="text-3xl Pretendard-Bold pb-24">   
                    패스트캠퍼스 프론트엔드 반에서 기초적인 마크업 언어인 html, css에 대해 배웠으며, <br />
                    javascript와 react등 여러가지 언어와 프레임워크의 기초를 공부했습니다.
                </div>  
                <div className="flex justify-evenly align-center pb-24">
                    <Image 
                        src={require('../../src/fastcampus/landingpageCode.png')}
                        alt="fastcampus"
                        className="w-[22vw] h-[30vw]"
                    />
                    <Image 
                        src={require('../../src/fastcampus/landingpageImg.png')}
                        alt="fastcampus"
                        className="w-[22vw] h-[30vw]"
                    />
                </div>
                <div className="flex justify-evenly align-center pb-24">
                    <Image 
                        src={require('../../src/fastcampus/snsCode.png')}
                        alt="fastcampus"
                        className="w-[22vw] h-[30vw]"
                    />
                    <Image 
                        src={require('../../src/fastcampus/snsImg.png')}
                        alt="fastcampus"
                        className="w-[22vw] h-[30vw]"
                    />
                </div>
                <div className="flex justify-evenly align-center pb-24">
                    <Image 
                        src={require('../../src/fastcampus/adminCode.png')}
                        alt="fastcampus"
                        className="w-[22vw] h-[30vw]"
                    />
                    <Image 
                        src={require('../../src/fastcampus/adminImg.png')}
                        alt="fastcampus"
                        className="w-[22vw] h-[30vw]"
                    />
                </div>
                <div className="text-3xl Pretendard-Bold pb-24">   
                    위처럼 html과 css를 이용해서 반응형 페이지를 만드는 연습을 많이 했으며, <br />
                    github사용법, webpack, typescript 등등 여러가지 언어의 기초를 다지는 순간이였습니다.
                </div>  
            </div>
        </div>
    )
}