import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Disney Walt`;
    }, [title])
};

export default useTitle;