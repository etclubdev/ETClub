/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./MaybeInterested.scss";
import { Link } from 'react-router-dom';
import etNewsApi from '../../api/etNewsApi';
import dayjs from 'dayjs';
const MaybeInterested = () => {
  const [data, setData] = React.useState()
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await etNewsApi.getAll({ category: 3 })

      setData(result?.result)
    }
    fetchData()
  }, [])

  return (
    <>
      <div style={{ "max-width": "1300px", margin: "0 auto" }}>
        <div className="news-title">
          <span className="news-title__highlight" />
          <span className="news-title__name">Có thể bạn sẽ quan tâm</span>
        </div>
        <div className="body-2">
          <Link to={`/tech-corner/ban-tin-ET/${data?.data?.[0]?._id}`} className="left-side col-md-6 col-sm-12">
            <div href="#" className="body-2-image max-sm:flex-shrink-0">
              <img src={`${data?.data?.[0]?.image}`} alt="image" />
            </div>
            <div className="body-2-info">
              <div className="body-2-info__datetime-1">
                <i id="calendar" className="far fa-calendar-alt" />
                <p className="time">{dayjs(data?.data?.[0]?.created_at).format('MM/YY') || '-'}</p>
              </div>
              <Link to={`/tech-corner/ban-tin-ET/${data?.data?.[0]?.id}`} className="body-2-info__title ">
                {data?.data?.[0]?.name}
              </Link>
              <Link to={`/tech-corner/ban-tin-ET/${data?.data?.[0]?.id}`} className="body-2-info__content">
                {data?.data?.[0]?.tiny_desc}
              </Link>
              <div className="body-2-info__datetime-2">
                <i id="calendar" className="far fa-calendar-alt" />
                <p className="time">{dayjs(data?.data?.[0]?.created_at).format('MM/YY') || '-'}</p>
              </div>
              <Link to={`/tech-corner/ban-tin-ET/${data?.data?.[0]?.id}`} className="body-2-info__detail">
                Xem chi tiết
              </Link>
            </div>
          </Link>
          <Link to={`/tech-corner/ban-tin-ET/${data?.data?.[1]?._id}`} className="right-side col-md-6 col-sm-12">
            <Link to={`/tech-corner/ban-tin-ET/${data?.data?.[1]?._id}`} className="body-2-image max-sm:flex-shrink-0">
              <img src={`${data?.data?.[1]?.image}`} alt="image" />
            </Link>
            <div className="body-2-info">
              <div className="body-2-info__datetime-1">
                <i id="calendar" className="far fa-calendar-alt" />
                <p className="time">{dayjs(data?.data?.[1]?.created_at).format('MM/YY') || '-'}</p>
              </div>
              <Link to={`/tech-corner/ban-tin-ET/${data?.data?.[1]?._id}`} className="body-2-info__title">
                {data?.data?.[1]?.name}
              </Link>
              <Link to={`/tech-corner/ban-tin-ET/${data?.data?.[1]?._id}`} className="body-2-info__content">
                {data?.data?.[1]?.tiny_desc}
              </Link>
              <div className="body-2-info__datetime-2">
                <i id="calendar" className="far fa-calendar-alt" />
                <p className="time">{dayjs(data?.data?.[1]?.created_at).format('MM/YY') || '-'}</p>
              </div>
              <Link to={`/tech-corner/ban-tin-ET/${data?.data?.[1]?._id}`} className="body-2-info__detail">
                Xem chi tiết
              </Link>
            </div>
            <Link to={`/tech-corner/ban-tin-ET/${data?.data?.[1]?._id}`} className="continue-button">
              Đọc tiếp...
            </Link>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MaybeInterested;
