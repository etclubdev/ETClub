/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./contentGlobal.scss";
import competitionApi from '../../api/competitionApi';
import { useWindowDimensions } from '../../hook/useWindowDimension';
import mileStoneApi from '../../api/milestone';
import { useParams } from 'react-router-dom';
const ContentGlobal = () => {
  const { isMobile } = useWindowDimensions();
  const [data, setData] = React.useState()
  const [dataTimeline, setDataTimeline] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const result = await competitionApi.getByCompetitionId(id)
        setData(result[0])
      }
      fetchData()
    }
  }, [id])

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await mileStoneApi.getAllMilestone({ competition_id: id })
      setDataTimeline(result.data)
    }
    fetchData()
  }, [id])



  return (
    <>
      {/* <div className="container__content-global"> */}
      <div className='max-sm:px-[15px] max-w-[1120px] mx-auto mb-[40px]'>
        {/* <div className="md:hidden content__first-global">
          <h1>
            Tháng 2/2020, CLB Công nghệ kinh tế - ET CLUB đã tổ chức cuộc thi
            GLOBAL TALENTS 2022 - Chuyển đổi số cho tương lai nhằm tạo cơ hội để
            sinh viên mở rộng kiến thức và thể hiện tài năng của mình trong việc
            nắm bắt công nghệ trong thời đại số. Lấy chủ đề “Chuyển đổi số cho
            tương lai”, cuộc thi mong muốn đem các bạn sinh viên gần hơn với xu
            thế công nghệ đang thịnh hành chính là “Chuyển đổi số” . . Đó là một
            trong những xu hướng thích ứng với công nghệ tiên phong hiện nay để
            hòa mình với sự phát triển của 4.0.
          </h1>
        </div>
        <div className="md:hidden row container__content-center-global">
          <div className="col-lg-6 col-container__content-global">
            <div className="content__center-global">
              <p>
                Chúng ta đang sống trong kỷ nguyên của sự bùng nổ cách mạng 4.0 -
                nơi mà những ứng dụng công nghệ được sử dụng và có tầm ảnh hưởng
                nhất định đến mọi lĩnh vực trong cuộc sống đặc biệt là nền kinh
                tế.
                <br /> <br />
                Công nghệ được xem như sản phẩm của não trái, nơi quyết định tư
                duy logic của một con người. Còn não phải với khả năng điều khiển
                tư duy cảm xúc chính là “ ngôi nhà” của sự sáng tạo. Công nghệ
                đang ngày một phát triển vậy tại sao chúng ta không tận dụng điều
                đó để phát huy tối đa sức sáng tạo của mình, để chúng ta có thể
                tiến lên phía trước và thậm chí là dẫn đầu.
                <br /> <br />
                Chính vì vậy, trong thời đại mà công nghệ thống trị mạnh mẽ hiện
                nay, kẻ mạnh có thể tồn tại được chính là kẻ có thể kết hợp được
                cả “hai bán cầu não” và có trang bị kiến thức cần thiết trong cả
                lĩnh vực kinh tế lẫn công nghệ. Nắm bắt được nhu cầu cũng như xu
                thế của thời đại, CLB Công nghệ kinh tế - ET Club đã ra đời và sẽ
                giúp bạn làm điều đó thông qua cuộc thi GLOBAL TALENTS 2020.
                <br /> <br />
                Lấy chủ đề “Chuyển đổi số cho tương lai”, cuộc thi mong muốn đem
                các bạn sinh viên gần hơn với xu thế công nghệ đang thịnh hành
                chính là “Chuyển đổi số” . . Đó là một trong những xu hướng thích
                ứng với công nghệ tiên phong hiện nay để hòa mình với sự phát
                triển của 4.0. Không những được trang bị thêm kiến thức mới lạ và
                bổ ích, người tham gia cuộc thi sẽ còn có cơ hội gặp gỡ, trao đổi
                trực tiếp những “ông lớn” trong nền công nghệ Việt Nam như . . Đó
                là một trong những xu hướng thích ứng với công nghệ tiên phong
                hiện nay để hòa mình với sự phát triển của 4.0. Không những được
                trang bị thêm kiến thức mới lạ và bổ ích, người tham gia cuộc thi
                sẽ còn có cơ hội gặp gỡ, trao đổi trực tiếp những “ông lớn” trong
                nền công nghệ Việt Nam như NashTech, Momo, Diginet,...
                <br /> <br />
              </p>
            </div>
          </div>
        </div> */}
        <div className="md: hidden content__img-global">
          <img src="/img/InfoContestPage/123.png" alt />
        </div>
        <div className='' dangerouslySetInnerHTML={{ __html: data?.content }}>

        </div>
      </div>
      <div className='container_timeline--competition flex gap-[15px] w-full px-[15px] xl:w-[1300px] mx-auto'>
        {dataTimeline && dataTimeline?.map((item, index) => {
          {/* timeline-up */ }
          if (index % 2 === 0) {
            return <div key={index} className='h-[200px] md:h-[390px] flex flex-col relative w-full'>
              <h3 className='mx-auto w-[80px] md:w-[140px] text-center font-bold text-sm md:text-xl'>{item?.start_date.substring(0, 5)} - {item?.end_date}</h3>
              <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[43%]'>
                {isMobile ? <img src="/img/timeline-mobile.png" alt /> : <img src="/img/InfoContestPage/resize-img.png" alt />}
              </div>
              <div className='h-[87px] md:h-[180px] border-b-[2px] xl:border-b-[5px] border-b-[#F5A623]'>

              </div>
              <div className='flex font-bold text-xs md:text-xl text-center flex-grow justify-center items-end'>
                {item.name}
              </div>
            </div>
          }
          {/* timeline-down */ }
          return <div key={index} className='h-[200px] md:h-[390px] flex flex-col relative w-full mt-[40px] md:mt-[55px]'>
            <h3 className='mx-auto w-[80px] md:w-[140px] text-center font-bold text-sm md:text-xl'>{item?.start_date.substring(0, 5)} - {item?.end_date}</h3>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%]'>
              {isMobile ? <img src="/img/timeline-mobile.png" alt /> : <img src="/img/InfoContestPage/resize-img.png" alt />}
            </div>
            <div className='h-[47px] md:h-[125px] border-b-[2px] xl:border-b-[5px] border-b-[#F5A623]'>

            </div>
            <div className='flex  font-bold text-xs md:text-xl text-center flex-grow justify-center items-end'>
              {item.name}
            </div>
          </div>
        })}



        {/* <div className='h-[200px] md:h-[390px] flex flex-col relative w-full mt-[40px] md:mt-[55px]'>
          <h3 className='mx-auto w-[80px] md:w-[140px] text-center font-bold text-sm md:text-xl'>01/10 - 15/10/2021</h3>
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%]'>
            {isMobile ? <img src="/img/timeline-mobile.png" alt /> : <img src="/img/InfoContestPage/resize-img.png" alt />}
          </div>
          <div className='h-[47px] md:h-[125px] border-b-[2px] xl:border-b-[5px] border-b-[#F5A623]'>

          </div>
          <div className='flex  font-bold text-xs md:text-xl text-center flex-grow justify-center items-end'>
            Vòng đấu loại + Training workshop
          </div>
        </div>
        <div className='h-[200px] md:h-[390px] flex flex-col relative w-full'>
          <h3 className='mx-auto w-[80px] md:w-[140px] text-center font-bold text-sm md:text-xl'>15/09 - 25/09/2021</h3>
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[43%]'>
            {isMobile ? <img src="/img/timeline-mobile.png" alt /> : <img src="/img/InfoContestPage/resize-img.png" alt />}
          </div>
          <div className='h-[87px] md:h-[180px] border-b-[2px] xl:border-b-[5px] border-b-[#F5A623]'>

          </div>
          <div className='flex font-bold text-xs md:text-xl text-center flex-grow justify-center items-end'>
            Dự án thực tế
          </div>
        </div>
        <div className='h-[200px] md:h-[390px] flex flex-col relative w-full mt-[40px] md:mt-[55px]'>
          <h3 className='mx-auto w-[80px] md:w-[140px] text-center font-bold text-sm md:text-xl'>01/10 - 15/10/2021</h3>
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%]'>
            {isMobile ? <img src="/img/timeline-mobile.png" alt /> : <img src="/img/InfoContestPage/resize-img.png" alt />}
          </div>
          <div className='h-[47px] md:h-[125px] border-b-[2px] xl:border-b-[5px] border-b-[#F5A623]'>

          </div>
          <div className='flex font-bold text-xs md:text-xl text-center flex-grow justify-center items-end'>
            Gala chung kết
          </div>
        </div> */}

      </div>
    </>
  );
};

export default ContentGlobal;
