/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

// Import Swiper styles
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './style.scss'
import etNewsApi from '../../api/etNewsApi';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumb } from 'antd';
const DetailNews = () => {
    const [dataDetail, setDataDetail] = React.useState(undefined)
    const [topNews, setTopNews] = React.useState()
    const [otherNews, setOtherNews] = React.useState()
    const options = {
        nav: true,

        loop: true,
        margin: 20,
        autoplay: false,
        autoplayTimeout: 3000,
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
                items: 1,
                nav: false,
            },
            1000: {
                items: 3,
                nav: true,
            },
        },
    };
    const { id } = useParams()
    React.useEffect(() => {
        if (id) {
            const fetchData = async () => {
                const result = await etNewsApi.get(id)

                setDataDetail(result?.result)
            }
            fetchData()
        }
    }, [id])
    React.useEffect(() => {
        const fetchData = async () => {
            const result = await etNewsApi.getAll({ sort: 2 })

            setTopNews(result.result)
        }
        fetchData()
    }, [])
    React.useEffect(() => {
        if (dataDetail) {
            const fetchData = async () => {
                const result = await etNewsApi.getAll({ category: dataDetail?.category })
                setOtherNews(result.result)
            }

            fetchData()
        }

    }, [dataDetail])

    return (
        <div className='md:mt-[30px]'>
            <div className='mx-auto w-full xxl:w-[1300px] xxl:px-[30px]'>
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
                            breadcrumbName: 'Góc công nghệ',
                        },
                        {
                            path: '/tech-corner/ban-tin-ET',
                            breadcrumbName: 'Bản tin ET',
                        },
                        {
                            path: '/',
                            breadcrumbName: `${dataDetail?.name}`,
                        },

                    ]}
                />
            </div>
            <div className='max-w-[1192px] max-xl:px-[15px] xl:grid xl:grid-cols-3 mt-[20px] xl:gap-[20px] mx-auto'>

                <div className='md:col-span-2'>
                    <div className='text-4xl flex items-center justify-center max-sm:text-[25px] md:mb-[10px] font-bold'>
                        {dataDetail?.name}
                    </div>
                    <div className='detail_news text-justify' dangerouslySetInnerHTML={{ __html: dataDetail?.full_news }}>

                    </div>
                </div>
                {topNews?.data?.length > 0 && (
                    <div className="p-8 sticky max-lg:hidden h-fit border-[0.5px] border-[#D3D2D2] rounded-xl flex flex-col ">
                        <h2 className="text-4xl mb-[34px] text-[22px] font-semibold text-[#ffffff]">
                            Bản tin được xem nhiều nhất
                        </h2>
                        <div className="flex flex-col gap-y-9">
                            {topNews?.data?.filter((item) => item._id != id).slice(0, 5)?.map((item, index) => {
                                return (
                                    <Link
                                        to={`/tech-corner/ban-tin-ET/${item?._id}`}
                                        key={index}
                                        className="flex gap-3 items-center justify-between">
                                        <div
                                            style={{
                                                background:
                                                    'linear-gradient(90deg, #7496FF 0%, #5DD7D0 99.81%)',
                                            }}
                                            className="flex min-w-[52px] h-[52px] text-2xl font-semibold text-[#000000] rounded-xl items-center justify-center ">
                                            <h6>{index + 1}</h6>
                                        </div>
                                        <h3 className=" flex-1 text-base text-left line-clamp-2 font-medium text-[#ffffff] ">
                                            {item?.name}
                                        </h3>
                                    </Link>
                                );
                            })}
                        </div>

                    </div>
                )}

            </div>
            <div className='max-w-[1192px] max-xl:px-[15px] mx-auto mt-[30px] xl:mt-[50px]'>
                <h1 className='text-4xl font-bold mb-8'>Các bản tin liên quan</h1>
                <div className=''>
                    {otherNews?.data?.length > 0 && <OwlCarousel className='owl-theme owl-carousel-news ' {...options}>
                        {otherNews?.data?.filter((item) => item._id != id).map((item, index) => (
                            <div style={{ background: 'rgba(255, 255, 255, 0.1)' }} className='item md:w-[384px] flex flex-col h-[100%] rounded-lg overflow-hidden' key={index}>
                                <img
                                    src={`${item?.image}`}
                                    alt="Image"
                                    className=' h-[300px] object-cover rounded-lg'

                                />
                                <div className='py-4 px-2'>
                                    <h2 className='text-[#FFFFFF] mt-[5px] text-2xl font-semibold line-clamp-2'>
                                        {item.name}
                                    </h2>
                                </div>
                                <p></p>
                            </div>
                        ))}
                    </OwlCarousel>}
                </div>
            </div>



        </div>
    );
};

export default DetailNews;