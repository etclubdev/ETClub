import React from 'react';
import { useWindowDimensions } from '../../hook/useWindowDimension';
import { BoardMember } from '../../data/board-member';
import { Breadcrumb, Select } from 'antd';
import { Link } from 'react-router-dom';
import memberApi from '../../api/memberApi';


const DetailBoardMem = () => {
    const { isMobile } = useWindowDimensions();
    const [choosedValue, setChoosedValue] = React.useState(undefined);
    const [data, setData] = React.useState(undefined)
    const [dataDepartment, setDataDepartment] = React.useState(undefined)
    const [termData, setTermData] = React.useState(undefined)

    // function ToTenure(choosedValue) {
    //     switch (choosedValue) {
    //         case '2023':
    //             return BoardMemberV
    //         case '2022':
    //             return BoardMemberIV

    //         default:
    //             return 'no data'
    //     }
    // }

    // const data = ToTenure(choosedValue);

    React.useEffect(() => {

        const fetchData = async () => {
            try {
                const result = await memberApi.getAll({ department: 0, term: choosedValue })
                setData(result?.result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
        setDataDepartment(BoardMember)
        // setDataDepartment(ToDepartmentData(id))

    }, [choosedValue])
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await memberApi.getAllTerms()
                setTermData(result?.result)
                setChoosedValue(result?.result[0]._id)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
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
                            breadcrumbName: 'Ban chủ nhiệm',
                        },

                    ]}
                />
            </div>
            <h1 className='flex justify-center text-[30px] md:text-[45px] leading-[80px]  md:mt-[50px] font-extrabold'>{data?.name}</h1>
            <div className='px-[15px] mt-[20px] md:px-[115px] md:mt-[50px]'>
                <div className='select-custom flex justify-end' >
                    <Select
                        defaultValue="2023"
                        popupClassName='popup-select-custom'
                        value={choosedValue}
                        onChange={(value) => { setChoosedValue(value) }}
                        showArrow={false}
                        options={termData?.length > 0 ? termData.map((item) => {
                            return {
                                value: item._id,
                                label: item.name
                            }
                        }) : []}
                    />
                </div>
                {isMobile ? <div >
                    {data?.length > 0 && data?.filter(item => item.type.includes(3))?.map((item, index) => {
                        return <div className='flex '>

                            <div className='w-[100px] flex-shrink-0 h-[100px] p-[8px] rounded-full border-[3px] border-[#F5A623]'>
                                <img className='w-[80px] h-[80px] rounded-full' src={`${item?.image}`} />
                            </div>
                            <div className='flex flex-col items-center justify-center flex-1 text-[18px] md:text-[21px] leading-[29px] font-bold'>
                                <h2 className='text-center'>Chủ nhiệm</h2>
                                <h2>{item?.name || ''}</h2>
                            </div>
                        </div>
                    })}

                </div> : <div className='flex justify-end mb-[60px]'>
                    {data?.length > 0 && data?.filter(item => item.type.includes(3))?.map((item, index) => {
                        return <div className='w-[60%] flex ' key={index}>
                            <div className='relative max-xl:hidden  w-[236px] h-[230px]' style={{ backgroundImage: 'url(/img/Ellipse-187.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>

                                <div className='absolute border-[3px] border-[#F5A623] top-[8%] p-[8px] left-[8%] w-[200px] h-[200px] rounded-full'>
                                    <img className=' w-[180px] h-[180px] rounded-full object-cover' src={`${item?.image}`} alt="" />
                                </div>


                            </div>
                            <div className='xl:hidden'>
                                <div className=' border-[3px] border-[#F5A623] top-[8%] p-[8px] left-[8%] w-[200px] h-[200px] rounded-full'>
                                    <img className=' w-[180px] h-[180px] rounded-full object-cover' src={`${item?.image}`} alt="" />
                                </div>
                            </div>
                            <div className='flex items-center '>
                                <img className='-translate-y-[33%]' src="/img/Arrow-3.png" alt="" />
                            </div>
                            <div className='flex items-center'>
                                <div className='flex flex-col text-[27px] leading-[36px] font-bold -translate-y-[33%]'>
                                    <h2 className='text-center'>Chủ nhiệm</h2>
                                    <h2 className='text-center'>{item?.name}</h2>
                                </div>
                            </div>
                        </div>
                    })}

                </div>}
            </div>
            <div className='w-full flex items-center justify-center'>
                <div className='flex flex-wrap items-center justify-center md:justify-between md:w-[500px] max-sm:mt-[20px] md:mb-[90px]'>
                    {data?.length > 0 && data?.filter(item => item.type.includes(4))?.map((item, index) => {
                        return <div key={index} className='flex max-sm:w-[330px] md:flex-col max-sm:mb-[10px] items-center'>
                            <div className='max-sm:flex-shrink-0 max-sm:mr-2 w-[100px] md:w-[184px] h-[100px] md:h-[184px] p-[8px] rounded-full border-[3px] border-[#F5A623]'>
                                <img className='w-[80px] h-[80px] md:w-[164px] md:h-[164px] rounded-full' alt='' src={item.image} />
                            </div>
                            <div className='flex max-sm:flex-1 flex-col md:mt-[10px] text-[18px] md:text-[21px] leading-[29px] font-bold'>
                                <h2 className='text-center'>Phó chủ nhiệm</h2>
                                <h2 className='text-center'>{item.name}</h2>
                            </div>
                        </div>
                    })}




                </div>
            </div>

            <div className='w-full flex items-center justify-center'>
                <div className='flex flex-wrap items-center justify-center md:justify-between w-[800px]  mb-[50px] md:mb-[90px]'>
                    {data?.length > 0 && data?.filter(item => item.type.includes(5))?.map((item, index) => {
                        return <div key={index} className='flex max-sm:w-[330px] max-sm:mb-[10px] md:flex-col items-center'>
                            <div className='max-sm:flex-shrink-0 max-sm:mr-2 w-[100px] md:w-[184px] h-[100px] md:h-[184px] p-[8px] rounded-full border-[3px] border-[#F5A623]'>
                                <img className='w-[80px] h-[80px] md:w-[164px] md:h-[164px] rounded-full' alt='' src={item?.image} />
                            </div>
                            <div className='flex max-sm:flex-1 flex-col md:mt-[10px] text-[18px] md:text-[21px] leading-[29px] font-bold'>
                                <h2 className='text-center'>Thành viên chủ nhiệm</h2>
                                <h2 className='text-center'>{item?.name}</h2>
                            </div>
                        </div>
                    })}



                </div>
            </div>
            <div className='flex flex-col px-[15px] justify-center items-center'>
                <h1 className='text-[30px] leading-[50px] md:text-[40px] md:leading-[70px] font-bold text-[#F5A623]'>Giới thiệu cơ bản về ban</h1>
                <p className='text-base text-justify md:text-xl font-normal'>Ban chủ nhiệm là bộ phận tham gia quản lý và điều hành các hoạt động của câu lạc bộ. Đồng thời, ban còn giữ vai trò quan trọng trong việc đưa ra những định hướng, kế hoạch phù hợp để xây dựng và phát triển hình ảnh câu lạc bộ.
                </p>
            </div>
            <div className='flex max-sm:flex-col items-center justify-around mt-[40px]'>
                <div className='max-sm:w-[300px] '>
                    <img src='/img/BCN.png' alt='bcn' />
                </div>
                <div className='relative w-full h-[210px] md:w-[510px] md:h-[352px]'>
                    <img className='abosulte max-sm:hidden w-[calc(100%-30px)]  md:w-[510px] md:h-[352px] top-0 bottom-0' src="/img/Rectangle-2644.png" alt="" />
                    <div className=' w-[97%] md:w-[486px] md:h-[290px]  top-[14%] left-[1.5%]  absolute'>

                        <img className='w-full absolute max-sm:h-full' src="/img/Rectangle-2646.png" alt="" />
                        <div className='px-[8%] py-[6%] md:px-[6%] md:py-[10%]'>
                            <h1 className='text-[26px] md:text-[32px] leading-[30px] md:leading-[38px] font-bold text-[#F5A623]'>Công việc trong CLB</h1>
                            <div className='px-[20px] mt-[10px] md:mt-[25px]'>
                                <ul className='list-disc text-sm md:text-lg font-normal'>
                                    {dataDepartment?.job?.map((item, index) => {
                                        return <li key={index}>{item}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailBoardMem;