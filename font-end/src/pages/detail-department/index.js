import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './index.scss'
import { useParams } from 'react-router-dom';
import { ToDepartment } from '../../utils';
const DetailDepartment = () => {
    const { department } = useParams();
    const data = ToDepartment(department)

    const options = {
        nav: true,
        items: 1,
        loop: true,
        responsiveClass: true,
        margin: 0,
        dotsEach: 3,
        dot: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        navSpeed: 2000,
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>",
        ],
        stagePadding: 0,
        responsive: {
            0: {
                margin: 30,
                nav: false,
            },
            600: {
                margin: 30,
                stagePadding: 0,
                nav: false,
            },
            1200: {
                stagePadding: 175,
                dotsEach: true,
                // margin: -1,
            },
        },
    };
    return (
        <div className='w-full max-w-[1300px] mx-auto flex flex-col justify-center'>
            <h1 className='flex justify-center text-[45px] leading-[80px] font-extrabold'>{data?.name ?? '-'}</h1>
            <div className='px-[115px] mt-[70px]'>
                <div className='flex justify-end mb-[60px]'>
                    <div className='w-[60%] flex '>
                        <div className='relative w-[236px] h-[230px]' style={{ backgroundImage: 'url(/img/Ellipse-187.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>

                            <div className='absolute border-[3px] border-[#F5A623] top-[8%] p-[8px] left-[8%] w-[200px] h-[200px] rounded-full'>
                                <img className=' w-[180px] h-[180px] rounded-full object-cover' src="/img/Circle - L.png" alt="" />
                            </div>


                        </div>
                        <div className='flex items-center '>
                            <img className='-translate-y-[33%]' src="/img/Arrow-3.png" alt="" />
                        </div>
                        <div className='flex items-center'>
                            <div className='flex flex-col text-[27px] leading-[36px] font-bold -translate-y-[33%]'>
                                <h2 className='text-center'>Trưởng ban</h2>
                                <h2 className='text-center'>{data?.lead ?? '-'}</h2>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex flex-wrap items-center justify-center gap-[50px] mb-[90px]'>
                    {data?.members?.map((item, index) => {
                        return <div key={index} className='flex flex-col items-center'>
                            <div className='w-[184px] h-[184px] p-[8px] rounded-full border-[3px] border-[#F5A623]'>
                                <img className='w-[164px] h-[164px] rounded-full' src={item.image} />
                            </div>
                            <div className='flex flex-col text-[21px] leading-[29px] font-bold'>
                                <h2 className='text-center'>Thành viên</h2>
                                <h2>{item.name}</h2>
                            </div>
                        </div>
                    })}


                </div>

            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-[40px] leading-[70px] font-bold text-[#F5A623]'>Giới thiệu cơ bản về ban</h1>
                <p className='text-xl font-normal'>{data?.introduce ?? '-'}</p>
            </div>
            <div className='flex flex-row gap-x-[66px] items-baseline mt-[45px]'>
                <div className='relative w-[510px] h-[352px]'>
                    <img className='abosulte w-[510px] h-[352px] top-0 bottom-0' src="/img/Rectangle-2644.png" alt="" />
                    <div className='w-[486px] h-[290px] top-[14%] left-[1.5%]  absolute'>

                        <img className=' absolute' src="/img/Rectangle-2646.png" alt="" />
                        <div className='px-[6%] py-[10%]'>
                            <h1 className='text-[32px] leading-[38px] font-bold text-[#F5A623]'>Công việc trong CLB</h1>
                            <div className='px-[20px] mt-[25px]'>
                                <ul className='list-disc text-lg font-normal'>
                                    {data?.job?.map((item, i) => {
                                        return <li key={i}>{item}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative w-[724px] h-[379px]'>
                    <img className='' src='/img/Rectangle-2645.png' alt='' />
                    <div className='absolute top-0 py-[40px] px-[30px]'>
                        <h1 className='text-[32px] leading-[38px] font-bold text-[#F5A623]'>Yêu cầu vị trí</h1>
                        <div className='px-[20px] mt-[25px]'>
                            <ul className='list-disc text-lg font-normal'>
                                {data?.requirement?.map((item, i) => {
                                    return <li key={i}>{item}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-full border-[3px] border-[#F5A623] px-[30px] py-[40px] flex flex-row gap-x-[60px] mt-[45px]'>
                <div>
                    <h1 className='text-[32px] leading-[38px] font-bold text-[#F5A623]'>Quyền lợi</h1>
                    <div className='px-[20px] mt-[25px]'>
                        <ul className='list-disc text-lg font-normal'>
                            <li>Rèn luyện và nâng cao được các kỹ năng mềm quan trọng phục vụ môi trường công việc thực tế trong tương lai</li>
                            <div className='px-[25px]'>
                                <ul className='list-disc'>
                                    <li>Khả năng quản lý nhân sự, tổ chức bộ máy một cách chặt chẽ, logic.</li>
                                    <li>Khả năng giao tiếp.</li>
                                    <li>Kỹ năng quản lý tài chính.</li>
                                    <li>Kỹ năng làm việc nhóm.</li>
                                    <li>Kỹ năng quản lý thời gian Kỹ năng tổ chức sự kiện</li>

                                </ul>
                            </div>
                            <li>Có khả năng gắn kết các thành viên.</li>
                            <li>Chỉn chu, cẩn thận.</li>
                            <li>Cầu tiến, ham học hỏi, không ngại tiếp thu.</li>
                            <li>Có kỹ năng sử dụng cơ bản một số công cụ Google để hỗ trợ công việc.</li>
                            <li>Khả năng tổ chức, quản lý và sắp xếp nhân sự.</li>
                            <li>Khả năng quản lý thời gian.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img src="/img/charac2-5.png" alt="" />
                </div>
            </div>
            <div className='w-full flex flex-col items-center justify-center mt-[70px] '>
                <h1 className='text-[45px] leading-[80px] font-extrabold mb-[40px]'>HÌNH ẢNH HOẠT ĐỘNG</h1>
                <div className='competition__detail-container'>
                    <OwlCarousel
                        className='owl-theme owl-carousel__competition'
                        {...options}
                    >

                        <div className='item'>
                            <img
                                src={`/img/unsplash_QBpZGqEMsKg.png`}
                                alt=''
                            />
                        </div>
                        <div className='item'>
                            <img
                                src={`/img/unsplash_QBpZGqEMsKg.png`}
                                alt=''
                            />
                        </div>
                        <div className='item'>
                            <img
                                src={`/img/unsplash_QBpZGqEMsKg.png`}
                                alt=''
                            />
                        </div>

                    </OwlCarousel>
                </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center mt-[70px]'>
                <div className='mb-[40px] flex flex-col items-center'>
                    <h1 className='text-[45px] leading-[80px] font-extrabold '>TÍNH ĐẾN NAY,</h1>
                    <h1 className='text-[45px] leading-[80px] font-extrabold '> {data?.name ?? '-'} CÓ</h1>
                </div>
                <div className='flex flex-row justify-between w-full px-[50px]'>
                    <div className='flex flex-col items-center text-gradient'>
                        <img src="/img/member.png" alt="" />
                        <p className='text-[55px] leading-[50px] font-bold'>25</p>
                        <h2 className='text-[38px] leading-[50px] font-normal'>Thành viên</h2>
                    </div>
                    <div className='flex flex-col items-center text-gradient'>
                        <img src="/img/oldmember.png" alt="" />
                        <p className='text-[55px] leading-[50px] font-bold'>120+</p>
                        <h2 className='text-[38px] leading-[50px] font-normal'>Cựu thành viên</h2>
                    </div>
                    <div className='flex flex-col items-center text-gradient'>
                        <img src="/img/member.png" alt="" />
                        <p className='text-[55px] leading-[50px] font-bold'>25</p>
                        <h2 className='text-[38px] leading-[50px] font-normal'>Cộng tác viên</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailDepartment;