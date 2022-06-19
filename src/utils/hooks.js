import { useEffect,  useState } from "react";

export const useWindowWidth = () => {
    const isWindowExist = typeof window !== "undefined",
        [width, setWidth] = useState(isWindowExist && window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(isWindowExist && window.innerWidth);
        isWindowExist && window.addEventListener("resize", handleResize);
        return () => {
            isWindowExist && window.removeEventListener("resize", handleResize);
        };
    });

    return width;
};

export const useWindowHeight = () => {
    const isWindowExist = typeof window !== "undefined",
        [height, setHeight] = useState(isWindowExist && window.innerHeight);

    useEffect(() => {
        const handleResize = () => setHeight(isWindowExist
            && window.innerHeight);
        isWindowExist && window.addEventListener("resize", handleResize);
        return () => {
            isWindowExist && window.removeEventListener("resize", handleResize);
        };
    });

    return height;
};

export const useScroll = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0),
        [bodyOffset, setBodyOffset] = useState(
            document.body.getBoundingClientRect(),
        ),
        [scrollY, setScrollY] = useState(bodyOffset.top),
        [scrollX, setScrollX] = useState(bodyOffset.left),
        [scrollDirection, setScrollDirection] = useState(),

        listener = e => {
            setBodyOffset(document.body.getBoundingClientRect());
            setScrollY(-bodyOffset.top);
            setScrollX(bodyOffset.left);
            setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
            setLastScrollTop(-bodyOffset.top);
        };

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    });

    return {
        scrollY,
        scrollX,
        scrollDirection,
    };
};