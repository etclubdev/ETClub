/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.scss'
const Footer = () => {
    const handleClickScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div>
            <footer className="my-footer">

    <div onClick={handleClickScrollToTop } id='btnScrolltoTop'>
        <i className="fa-solid fa-arrow-up"></i>
    </div>

    <div className="container">
        <div className="row">

            <div class="footer-left col-12 col-lg-7">
                <div className="footer-left__img">
                    <img src="/img/ET 1.png" alt="Logo ET"/> <br/>
                </div>
                <span className="footer-left__name">CLB CÔNG NGHỆ KINH TẾ - ET CLUB</span>
                <span className="footer-left__info">Trực thuộc Liên Chi hội Sinh viên khoa Công nghệ thông tin kinh doanh</span>
                <span className="footer-left__info">Trực thuộc Hội Sinh viên trường Đại học Kinh tế TP. Hồ Chí Minh</span>
                <span className="footer-left__dev">Trang web được phát triển bởi Hội Sinh viên UEH và <a href="" target="_blank">Nhóm phát triển web</a></span>
                <hr/>
            </div>

            <div className="row footer-right col-12 col-lg-5">
                <div className="col-12 footer-right__contact">
                    <span>LIÊN HỆ</span>
                </div>
                <div className="col-6 col-sm-12 footer-right__other">
                    <i className="fas fa-envelope"></i>
                    <a className="footer__mobile" href="mailto:etclub.ueh@gmail.com">Email</a>
                    <a className="footer__tablet" href="mailto:etclub.ueh@gmail.com">etclub.ueh@gmail.com</a>
                </div>
                <div className="col-6 col-sm-12 footer-right__other">
                    <i className="fab fa-facebook"></i>
                    <a className="footer__mobile" href="https://www.facebook.com/ETClub.UEH" target="_blank" rel="noreferrer">Fanpage</a>
                    <a className="footer__tablet" href="https://www.facebook.com/ETClub.UEH" target="_blank" rel="noreferrer">Câu lạc bộ Công Nghệ Kinh Tế - ET Club</a>
                </div>
                <div className="col-6 col-sm-12 footer-right__other">
                    <i className="fab fa-tiktok"></i>
                    <a className="footer__mobile" target="_blank" href="https://www.tiktok.com/@etclub_ueh" rel="noreferrer">Tiktok</a>
                    <a className="footer__tablet" target="_blank" href="https://www.tiktok.com/@etclub_ueh" rel="noreferrer">etclub.ueh</a>
                </div>
                <div className="col-6 col-sm-12 footer-right__other">
                    <i className="fab fa-youtube"></i>
                    <a className="footer__mobile" target="_blank" href="https://www.youtube.com/c/C%C3%A2ul%E1%BA%A1cb%E1%BB%99C%C3%B4ngNgh%E1%BB%87KinhT%E1%BA%BF" rel="noreferrer">Youtube</a>
                    <a className="footer__tablet" target="_blank" href="https://www.youtube.com/c/C%C3%A2ul%E1%BA%A1cb%E1%BB%99C%C3%B4ngNgh%E1%BB%87KinhT%E1%BA%BF" rel="noreferrer">Câu lạc bộ Công Nghệ Kinh Tế</a>
                </div>
            </div>
        </div>
    </div>
</footer>
        </div>
    );
};

export default Footer;