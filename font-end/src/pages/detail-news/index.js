import React from 'react';

// Import Swiper styles
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './style.scss'
import etNewsApi from '../../api/etNewsApi';
import { useParams } from 'react-router-dom';
const DetailNews = () => {
    const [dataDetail, setDataDetail] = React.useState()
    const options = {
        nav: true,
        items: 3,
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
                nav: false,
            },
            1000: {
                nav: true,
            },
        },
    };
    const { id } = useParams()
    React.useEffect(() => {
        if (id) {
            const fetchData = async () => {
                const result = await etNewsApi.get(id)

                setDataDetail(result[0])
            }
            fetchData()
        }
    }, [])


    return (
        <div className='px-[70px]'>
            <div className='text-4xl flex items-center justify-center'>
                {dataDetail?.name}
            </div>
            <div className='detail_news' dangerouslySetInnerHTML={{ __html: dataDetail?.full_news }}>

            </div>
            <h1 className='text-4xl font-bold mb-8'>Các bản tin liên quan</h1>
            <div>
                <OwlCarousel className='owl-theme owl-carousel-news' {...options}>
                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                        <div className='item' key={index}>
                            <img
                                src={`https://plus.unsplash.com/premium_photo-1661775045365-7240b4aaf48e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`}
                                className=' h-[300px] object-cover'
                                alt={`Banner ${index + 1}`}
                            />
                            <h2 className='text-[#FFFFFF] text-2xl font-semibold line-clamp-2'>
                                NFT và những cơ hội mới NFT và những cơ hội mới
                            </h2>
                            <p></p>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default DetailNews;