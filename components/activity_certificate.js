// import { useRef, useEffect } from "react";
// import useScrollRedux from "../hooks/useScrollRedux";
// import { dispatchActivity_Certificate } from "../store/modules/scroll";

// const certificate_arr = [
//     {
//         name: '컴퓨터활용능력 1급',
//         date: '2021년 2월 19일',
//         id: 0,
//     },
//     {
//         name: 'GTQ 그래픽기술자격 1급',
//         date: '2021년 9월 25일',
//         id: 1,
//     },
//     {
//         name: 'IoT지식능력검정',
//         date: '2021년 12월 10일',
//         id: 2,
//     },
//     {
//         name: 'SQLD',
//         date: '2021년 12월 17일',
//         id: 3,
//     },
// ];
// const award_arr = [
//     {
//         name: '2022-2학기 SID Audition 원페이퍼 창업경진대회 수상',
//         date: '2022년 11월 29일',
//         id: 0,
//     },
//     {
//         name: '제 3회 해동창업경진대회 금상',
//         date: '2022년 10월 11일 ~ 2022년 12월 31일',
//         id: 1,
//     },
// ]

// const activity_arr = [
//     {
//         name: '언더패스 UIUX',
//         content: 'UI/UX의 정의와 좋은 UI/UX에 대해 공부',
//         id: 0,
//     },
//     {
//         name: '패스트캠퍼스 프론트개발자 완주반',
//         content: '프론트엔드의 전반적인 언어를 공부',
//         id: 1,
//     },
//     {
//         name: '흥부하우스',
//         content: '한양대에리카 단기임대플랫폼 창업동아리',
//         id: 2,
//     }
// ]

// export default function Activity_Certificate() {
//     const [state, dispatch] = useScrollRedux();
//     const scrollTopRef = useRef(null);
//     const scrollCertificateRef = useRef([]);
//     const scrollAwardRef = useRef([]);
//     const scrollActivityRef = useRef([]);
    
//     const distanceChildFromTop = () => {
//         if(scrollTopRef.current) {
//             let activity_certificateTop = scrollTopRef.current.getBoundingClientRect().top + window.pageYOffset;
//             // console.log("activity&certificate top", activity_certificateTop);
//             dispatch(dispatchActivity_Certificate(activity_certificateTop))
//         }
//     };
    
//     const scrollUIfunction = () => {
//         const height = window.pageYOffset;
//         console.log(height)
//         const cy0 = -1/200 * height + 23/2;
//         const cy1 = -1/200 * height + 25/2;
//         const cy2 = -1/200 * height + 27/2;
//         const cy3 = -1/200 * height + 29/2;
//         const cy_arr = [cy0,cy1,cy2,cy3];
//         const awy0 = -1/200 * height + 315/20;
//         const awy1 = -1/200 * height + 335/20;
//         const awy_arr = [awy0,awy1];
//         const acy0 = -1/200 * height + 37/2;
//         const acy1 = -1/200 * height + 39/2;
//         const acy2 = -1/200 * height + 41/2;
//         const acy_arr = [acy0,acy1,acy2];
//         for(let i = 0; i < certificate_arr.length; i++) {
//             scrollCertificateRef.current[i].style.opacity = cy_arr[i]
//         };
//         for(let i = 0; i < award_arr.length; i++) {
//             scrollAwardRef.current[i].style.opacity = awy_arr[i]
//         };
//         for(let i = 0; i < activity_arr.length; i++) {
//             scrollActivityRef.current[i].style.opacity = acy_arr[i]
//         };
//     }
    
//     useEffect(() => {
//         window.addEventListener("scroll", distanceChildFromTop);
//         window.addEventListener("scroll", scrollUIfunction)
//     }, []);

//     return(
//         <div className="w-full NanumSquareNeo-Variable">
//             <div className="text-2xl text-center pt-24 text-white " ref={scrollTopRef}>Activity & Certificate</div>
//             <div className="text-2xl text-white mt-24 w-[396px] text-center mx-auto ">
//                 <div>
//                     <div className="sticky top-24 mb-24 text-left">Certificate</div>
//                     {certificate_arr.map((data) => (
//                         <div key={data.id} className="text-left sticky top-48" ref={(element) => (scrollCertificateRef.current[data.id] = element)}>
//                             <div className="h-48">
//                                 <div className="text-2xl mb-[5px]">{data.name}</div>
//                                 <div className="text-xl">{data.date}</div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div>
//                     <div className="sticky top-24 mb-24 text-right">Award</div>
//                     {award_arr.map((data) => (
//                         <div key={data.id} className="text-left sticky top-48" ref={(element) => (scrollAwardRef.current[data.id] = element)}>
//                         <div className="h-48">
//                             <div className="text-2xl mb-[5px]">{data.name}</div>
//                             <div className="text-xl">{data.date}</div>
//                         </div>
//                     </div>
//                     ))}
//                 </div>
//                 <div>
//                     <div className="sticky top-24 mb-24 text-left">Activity</div>
//                     {activity_arr.map((data) => (
//                         <div key={data.id} className="text-left sticky top-48" ref={(element) => (scrollActivityRef.current[data.id] = element)}>
//                         <div className="h-48">
//                             <div className="text-2xl mb-[5px]">{data.name}</div>
//                             <div className="text-xl">{data.content}</div>
//                         </div>
//                     </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }