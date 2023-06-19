import React from 'react';



export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = React.useState({
        width: 1200,
        height: 800,
        isDesktop: true,
        isTablet: false,
        isMobile: false,
    });

    React.useEffect(() => {
        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    const handleWindowSizeChange = () => {
        const width = document.body.clientWidth;
        const height = document.body.clientHeight;
        const isDesktop = width > 768;
        const isTablet = width > 480 && width <= 768;
        const isMobile = width <= 480;
        setWindowDimensions({ width, height, isDesktop, isTablet, isMobile });
    };

    return windowDimensions;
};

// export default useWindowDimensions;
