import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - JS ToyHub`
    },[title])
};

export default useTitle;