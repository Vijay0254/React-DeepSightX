import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {

    //Getting Location
    const { pathname } = useLocation();

    //UseEffect to Scroll top everytime we click Link tag or Navigate function
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);
};

export default useScrollToTop;
