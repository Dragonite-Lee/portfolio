import Image from "next/image";
import ProHeader from "../../components/pro_header";

export default function Heungbu() {
    
    return (
        <div className="w-full NanumSquareNeo-Variable h-[calc(100vh)]">
            <ProHeader />
            <div>
                <div className="text-3xl text-left text-black pt-[96px] pb-12 pl-12 ">HEUNGBU HOUSE</div>
            </div>
            <div className="bg-[#94A9E0] p-20 Pretendard-Regular">
                <div className="text-3xl Pretendard-Bold pb-24">   
                    흥부하우스는 한양대학교 에리카 창업동아리이며, 단기 임대 플랫폼을 개발중이며, <br />
                    초기엔 백엔드 1명, 프론트엔드 1명이었고, 현재는 4명씩 팀을 이뤄 개발중입니다. <br />
                    <span className="text-4xl">Next.js</span>, <span className="text-4xl">Typescript</span>, <span className="text-4xl">Redux</span>와 <span className="text-4xl">Tailwind.css</span>를 사용했습니다. <br />
                    코드 관리는 <span className="text-4xl">Github</span>를 통해 진행중이며, 배포는 <span className="text-4xl">Vercel</span>을 사용했습니다.
                </div>  
                <div className="flex justify-evenly align-center pb-24">
                    <Image 
                        src={require('../../src/heungbu/roomRegister.png')}
                        alt="fastcampus"
                        className="w-[22vw] h-[30vw]"
                    />
                    <Image 
                        src={require('../../src/heungbu/reviewRegister.png')}
                        alt="fastcampus"
                        className="w-[22vw] h-[30vw]"
                    />
                    <div className="text-2xl">
                        Redux를 이용해 각각의 data를 관리했으며, <br />
                        formData를 이용해 백엔드와 소통했으며, <br />
                        보낸 data를 받아서 상세페이지를 제작했습니다.
                    </div>
                </div>
                <div className="flex justify-evenly align-center pb-24">
                    <div className="text-2xl">
                        페이지내에서 접었다 폈다 하거나, <br />
                        Tab을 통해 이동하는 UI를 구현했으며, <br />
                        로그인을 통해 myPage를 관리했으며, <br />
                        myPage에서 매물에 관한 여러가지 기능을 개발 중입니다.
                    </div>
                    <Image 
                        src={require('../../src/heungbu/contract.png')}
                        alt="fastcampus"
                        className="w-[22vw] h-[30vw]"
                    />
                    <Image 
                        src={require('../../src/heungbu/myPage.png')}
                        alt="fastcampus"
                        className="w-[22vw] h-[30vw]"
                    />
                </div>
                <div className="text-3xl Pretendard-Bold pb-24">   
                    현재는 팀원이 많아져서 카카오api를 통한 Map과 Login을 개발중이며, <br />
                    Chatting서비스도 개발중입니다.
                </div>  
            </div>
        </div>
    )
}