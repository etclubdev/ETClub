/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./contentGlobal.scss";
import competitionApi from '../../api/competitionApi';
import { useWindowDimensions } from '../../hook/useWindowDimension';
import mileStoneApi from '../../api/milestone';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
const ContentGlobal = () => {
  const { isMobile } = useWindowDimensions();
  const [data, setData] = React.useState()
  const [dataTimeline, setDataTimeline] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const result = await competitionApi.getByCompetitionId(id)
        setData(result?.result)
      }
      fetchData()
    }
  }, [id])

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await mileStoneApi.getAllMilestone({ competition_id: id })

      setDataTimeline(result.result)
    }
    fetchData()
  }, [id])



  return (
    <>
      {/* <div className="container__content-global"> */}
      <div className='max-sm:px-[15px] max-w-[1120px] mx-auto mb-[40px]'>

        <div className="md:hidden content__img-global">
          <img src="/img/InfoContestPage/123.png" alt />
        </div>

        <div className='' dangerouslySetInnerHTML={{ __html: data?.content }}>

        </div>
      </div>
      <div className='container_timeline--competition flex items-stretch gap-[15px] w-full px-[15px] xl:w-[1300px] mx-auto'>
        {dataTimeline && dataTimeline?.map((item, index) => {

          {/* timeline-up */ }
          if (index % 2 === 0) {

            return <div key={index} className='h-[200px] md:h-[390px] flex flex-col relative w-full mt-[50px]'>
              <h3 className='mx-auto w-[80px] h-[56px] md:w-[140px] text-center font-bold text-sm md:text-xl'>{item?.end_date ? dayjs(item?.start_date).format('DD/MM/YYYY').substring(0, 5) : dayjs(item?.start_date).format('DD/MM/YYYY')}  {item?.end_date ? "-" + dayjs(item?.end_date).format('DD/MM/YYYY') : ""}</h3>
              <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[43%]'>
                {isMobile ? <img src="/img/timeline-mobile.png" alt /> : <img src="/img/InfoContestPage/resize-img.png" alt />}
              </div>
              <div className='h-[47px] md:h-[130px] border-b-[2px] xl:border-b-[5px] border-b-[#F5A623]'>

              </div>
              <div className='flex font-bold text-xs md:text-xl text-center flex-grow justify-center items-end'>
                {item.name}
              </div>
            </div>
          }
          {/* timeline-down */ }
          return <div key={index} className='h-[200px] md:h-[390px] flex flex-col relative w-full '>
            <h3 className='mx-auto w-[80px] md:w-[140px] h-[56px] text-center font-bold text-sm md:text-xl'>{item?.end_date ? dayjs(item?.start_date).format('DD/MM/YYYY').substring(0, 5) : dayjs(item?.start_date).format('DD/MM/YYYY')} {item?.end_date ? "- " + dayjs(item?.end_date).format('DD/MM/YYYY') : ""} </h3>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%]'>
              {isMobile ? <img src="/img/timeline-mobile.png" alt /> : <img src="/img/InfoContestPage/resize-img.png" alt />}
            </div>
            <div className='h-[87px] md:h-[180px] border-b-[2px] xl:border-b-[5px] border-b-[#F5A623]'>

            </div>
            <div className='flex  font-bold text-xs md:text-xl text-center flex-grow justify-center items-end'>
              {item.name}
            </div>
          </div>
        })}


      </div>
    </>
  );
};

export default ContentGlobal;
