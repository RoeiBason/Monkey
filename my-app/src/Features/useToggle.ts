import { useCallback, useState } from "react";

export const useToggle = (initialValue: boolean) => {
    const [bool, setBool] = useState<boolean>(initialValue);
    //we use callback for not rendering the toggle function every time the components change
    const toggle = useCallback(() => {
        setBool((prevBool) => !prevBool)
    }, []);

    return { bool, toggle }
}