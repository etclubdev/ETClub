/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import "./newestnew.scss";
import { Link } from 'react-router-dom';
import etNewsApi from '../../api/etNewsApi';
import dayjs from 'dayjs';

const NewestNew = () => {
  const [data, setData] = React.useState()
  useEffect(() => {
    const fetchData = async () => {
      const data = await etNewsApi.getAll({ sort: 1, pageSize: 1 })
      console.log(data)
      setData(data?.result?.data?.[0])
    }
    fetchData()
  }, [])

  return (
    <>
      <div style={{ "max-width": "1300px", margin: "0 auto" }}>
        <div className="news-title">
          <span className="news-title__highlight" />
          <span className="news-title__name">Bản tin mới nhất</span>
        </div>
        <Link to={`/tech-corner/ban-tin-ET/${data?._id}`} className="body">
          <div href="#" className="body-image">
            <img src={`${data?.image}`} alt="image" />
          </div>
          <div className="col-1" />
          <div className="body-info col-lg-5">
            <div className="body-info__datetime-1">
              <i id="calendar" className="far fa-calendar-alt" />
              <p className="time">{dayjs(data?.created_at).format('MM/YY') || '-'}</p>
            </div>
            <Link to={`/tech-corner/ban-tin-ET/${data?._id}`} className="body-info__title">
              {data?.name || '-'}
            </Link>
            <Link to={`/tech-corner/ban-tin-ET/${data?._id}`} className="body-info__content">
              {data?.tiny_desc}
            </Link>
            <div className="body-info__datetime-2">
              <i id="calendar" className="far fa-calendar-alt" />
              <p className="time">{dayjs(data?.created_at).format('MM/YY') || '-'}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NewestNew;
