import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './index.scss'
import { Link, useParams } from 'react-router-dom';
import { ToDepartment, ToDepartmentData, ToDepartmentName } from '../../utils';
import { useWindowDimensions } from '../../hook/useWindowDimension';
import { Breadcrumb } from 'antd';
import memberApi from '../../api/memberApi';
const DetailDepartment = () => {
    const { department } = useParams();

    const id = ToDepartment(department)
    console.log('id', id)
    const [data, setData] = React.useState(undefined)
    const [dataDepartment, setDataDepartment] = React.useState(undefined)
    const { isMobile } = useWindowDimensions();

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
                dot: false,
                dotsEach: false,
            },
            600: {
                margin: 30,
                stagePadding: 0,
                nav: false,
                dot: false,
                dotsEach: false,
            },
            1200: {
                stagePadding: 175,
                dotsEach: true,

                // margin: -1,
            },
        },
    };
    React.useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const result = await memberApi.getAll({ department: id })
                    setData(result?.result)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchData()
            console.log('id', id)
            setDataDepartment(ToDepartmentData(id))
        }
    }, [id])
    console.log('data department', dataDepartment)

    return (
        <div className='w-full max-w-[1300px] mx-auto flex flex-col justify-center'>
            <div className='mx-auto max-sm:p-2 w-full xxl:w-[1300px] xxl:px-[30px] mt-[30px]'>
                <Breadcrumb
                    separator=">"

                    itemRender={(route, _, routes) => {
                        const last = routes.indexOf(route) === routes.length - 1;
                        return last ? (
                            <span className='breadcrumb-active  max-sm:text-[14px] text-[18px] font-bold'>{route.breadcrumbName}</span>
                        ) : (
                            <Link className='max-sm:text-[14px] text-[18px] cursor-pointer font-bold text-white ' to={route.path}>{route.breadcrumbName}</Link>
                        );
                    }}
                    routes={[
                        {
                            path: '/',
                            breadcrumbName: 'Trang chủ',
                        },
                        {
                            path: '/',
                            breadcrumbName: 'Giới thiệu',
                        },
                        {
                            path: '/introduce/cocaunhansu',
                            breadcrumbName: 'Cơ cấu tổ chức',
                        },
                        {
                            path: '/introduce/cocaunhansu/ban-chu-nhiem',
                            breadcrumbName: `${id && ToDepartmentName(id)}`,
                        },

                    ]}
                />
            </div>
            <h1 className='flex justify-center text-[30px] md:text-[45px] leading-[80px] mt-[20px] font-extrabold'>{id ? ToDepartmentName(id) : '-'}</h1>
            <div className='px-[15px] mt-[20px] md:px-[115px] md:mt-[70px]'>
                {isMobile ? <div >

                    {data?.length > 0 && data?.filter(item => item.type.includes(0))?.map((lead, index) => {
                        return <div className='flex ' key={index}>
                            <div className='w-[100px] flex-shrink-0 h-[100px] p-[8px] rounded-full border-[3px] border-[#F5A623]'>
                                <img className='w-[80px] h-[80px] rounded-full' src={`${lead?.image}`} />
                            </div>
                            <div className='flex flex-col items-center justify-center flex-1 text-[18px] md:text-[21px] leading-[29px] font-bold'>
                                <h2 className='text-center'>Trưởng ban</h2>
                                <h2>{lead?.name ?? '-'}</h2>
                            </div>
                        </div>
                    })}
                </div> : <div className='flex justify-end mb-[60px]'>
                    {data?.length > 0 && data?.filter(item => item.type.includes(0))?.map((lead, index) => {
                        return <div className='w-[60%] flex ' key={index}>
                            <div className='relative w-[236px] h-[230px]' style={{ backgroundImage: 'url(/img/Ellipse-187.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>

                                <div className='absolute border-[3px] border-[#F5A623] top-[8%] p-[8px] left-[8%] w-[200px] h-[200px] rounded-full'>
                                    <img className=' w-[180px] h-[180px] rounded-full object-cover' src={`${lead?.image}`} alt="" />
                                </div>


                            </div>
                            <div className='flex items-center '>
                                <img className='-translate-y-[33%]' src="/img/Arrow-3.png" alt="" />
                            </div>
                            <div className='flex items-center'>
                                <div className='flex flex-col text-[27px] leading-[36px] font-bold -translate-y-[33%]'>
                                    <h2 className='text-center'>Trưởng ban</h2>
                                    <h2 className='text-center'>{lead?.name ?? '-'}</h2>
                                </div>
                            </div>

                        </div>
                    })}


                </div>}

                <div className='flex flex-wrap items-center justify-center gap-[50px] max-sm:mt-[20px] mb-[50px] md:mb-[90px]'>
                    {data?.length > 0 && data?.filter(item => item.type.includes(1) || item.type.includes(2))?.map((item, index) => {
                        return <div key={index} className='flex max-sm:w-[330px] md:flex-col items-center'>
                            <div className='max-sm:flex-shrink-0 max-sm:mr-2 w-[100px] md:w-[184px] h-[100px] md:h-[184px] p-[8px] rounded-full border-[3px] border-[#F5A623]'>
                                <img className='w-[80px] h-[80px] md:w-[164px] md:h-[164px] rounded-full' alt='' src={item?.image} />
                            </div>
                            <div className='flex max-sm:flex-1 flex-col text-[18px] md:text-[21px] leading-[29px] font-bold'>
                                <h2 className='text-center'>{item?.type.includes(1) ? 'Phó ban' : 'Thành viên'}</h2>
                                <h2 className='max-sm:text-center'>{item?.name}</h2>
                            </div>
                        </div>
                    })}


                </div>

            </div>
            <div className='flex flex-col max-sm:px-[15px] justify-center items-center'>
                <h1 className='text-[30px] leading-[50px] md:text-[40px] md:leading-[70px] font-bold text-[#F5A623]'>Giới thiệu cơ bản về ban</h1>
                <p className='text-base text-justify md:text-xl font-normal'>{dataDepartment?.introduce ?? '-'}</p>
            </div>
            <div className='flex flex-col max-sm:px-[15px] md:flex-row md:gap-x-[66px] items-baseline mt-[25px] md:mt-[45px]'>
                <div className='relative w-full h-[210px] md:w-[510px] md:h-[352px]'>
                    <img className='abosulte max-sm:hidden w-[calc(100%-30px)]  md:w-[510px] md:h-[352px] top-0 bottom-0' src="/img/Rectangle-2644.png" alt="" />
                    <div className=' w-[97%] md:w-[486px] md:h-[290px]  top-[14%] left-[1.5%]  absolute'>

                        <img className='w-full absolute max-sm:h-full' src="/img/Rectangle-2646.png" alt="" />
                        <div className='px-[8%] py-[6%] md:px-[6%] md:py-[10%]'>
                            <h1 className='text-[26px] md:text-[32px] leading-[30px] md:leading-[38px] font-bold text-[#F5A623]'>Công việc trong CLB</h1>
                            <div className='px-[20px] mt-[10px] md:mt-[25px]'>
                                <ul className='list-disc text-sm md:text-lg font-normal'>
                                    {dataDepartment?.job?.map((item, i) => {
                                        return <li key={i}>{item}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {isMobile && <div className='relative w-full h-[320px] md:w-[510px] md:h-[352px]'>
                    <img className='abosulte max-sm:hidden w-[calc(100%-30px)]  md:w-[510px] md:h-[352px] top-0 bottom-0' src="/img/Rectangle-2644.png" alt="" />
                    <div className=' w-[97%] md:w-[486px] md:h-[290px]  top-[14%] left-[1.5%]  absolute'>

                        <img className=' absolute max-sm:h-full' src="/img/Rectangle-2646.png" alt="" />
                        <div className='px-[8%] py-[6%] md:px-[6%] md:py-[10%]'>
                            <h1 className='text-[26px] md:text-[32px] leading-[30px] md:leading-[38px] font-bold text-[#F5A623]'>Yêu cầu vị trí</h1>
                            <div className='px-[20px] mt-[10px] md:mt-[25px]'>
                                <ul className='list-disc text-sm md:text-lg font-normal'>
                                    {dataDepartment?.requirement?.map((item, i) => {
                                        return <li key={i}>{item}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>}
                <div className='relative max-sm:hidden w-full md:w-[724px] h-[379px]'>
                    <img className='w-[97%]' src='/img/Rectangle-2645.png' alt='' />
                    <div className='absolute top-0 px-[8%] py-[6%] md:py-[40px] md:px-[30px]'>
                        <h1 className='text-[26px] md:text-[32px] leading-[30px] md:leading-[38px] font-bold text-[#F5A623]'>Yêu cầu vị trí</h1>
                        <div className='px-[20px] mt-[10px] md:mt-[25px]'>
                            <ul className='list-disc text-sm md:text-lg font-normal'>
                                {dataDepartment?.requirement?.map((item, i) => {
                                    return <li key={i}>{item}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-[calc(100%-45px)] max-sm:mx-auto md:w-full border-[3px] border-[#F5A623] px-[30px] py-[25px] md:py-[40px] flex flex-col md:flex-row gap-x-[60px] mt-[45px]'>
                <div>
                    <h1 className='text-[26px] md:text-[32px] leading-[30px] md:leading-[38px] font-bold text-[#F5A623]'>Quyền lợi</h1>
                    <div className='px-[20px] mt-[10px] md:mt-[25px]'>
                        <ul className='list-disc text-base md:text-lg font-normal'>
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
            <div className='w-full flex flex-col items-center justify-center mt-[40px] md:mt-[70px] '>
                <h1 className='text-[30px] md:text-[45px] leading-[80px] font-extrabold mb-[20px] md:mb-[40px]'>HÌNH ẢNH HOẠT ĐỘNG</h1>
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
            <div className='w-full flex flex-col justify-center items-center md:mt-[70px]'>
                <div className='mb-[40px] flex flex-col items-center'>
                    <h1 className='text-[30px] md:text-[45px] leading-[50px] md:leading-[80px] font-extrabold '>TÍNH ĐẾN NAY,</h1>
                    <h1 className='text-[30px] md:text-[45px] leading-[50px] md:leading-[80px] font-extrabold '> {id ? ToDepartmentName(id).toUpperCase() : '-'} CÓ</h1>
                </div>
                <div className='flex flex-row justify-between w-full px-[15px] md:px-[50px]'>
                    <div className='flex flex-col items-center text-gradient'>
                        <img src="/img/member.png" alt="" />
                        <p className='text-[30px] md:text-[55px] leading-[50px] font-bold'>25</p>
                        <h2 className='text-[18px] md:text-[38px] leading-[50px] font-normal'>Thành viên</h2>
                    </div>
                    <div className='flex flex-col items-center text-gradient'>
                        <img src="/img/oldmember.png" alt="" />
                        <p className='text-[30px] md:text-[55px] leading-[50px] font-bold'>120+</p>
                        <h2 className='text-[18px] md:text-[38px] leading-[50px] font-normal'>Cựu thành viên</h2>
                    </div>
                    <div className='flex flex-col items-center text-gradient'>
                        <img src="/img/member.png" alt="" />
                        <p className='text-[30px] md:text-[55px] leading-[50px] font-bold'>25</p>
                        <h2 className='text-[18px] md:text-[38px] leading-[50px] font-normal'>Cộng tác viên</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailDepartment;