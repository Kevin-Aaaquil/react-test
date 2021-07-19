import { useEffect, useState, } from "react";


const useFetch = (url) => {  // custom hooks need to start with 'use'

    const [data,setData] = useState(null);
    const [isPending,setIsPending]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{

        const abortController = new AbortController();

        setTimeout(()=>{
            fetch(url,{signal:abortController.signal})
                .then((res)=>{
                    if(!res.ok){
                        throw Error ('kuch nahi hai')
                    }
                return res.json()
                })
                .then((data)=>{
                    setData(data)
                    setIsPending(false)
                    // console.log(data)
                })
                .catch(err=>{
                    if(err.name==='AbortError'){
                   return  console.log('fetch aborted')
                    }
                    setIsPending(false)
                    setError(err.message)
                })
        },1)
        return ()=>{
            abortController.abort();
        }
    },[url])

    return {data,isPending,error}
}
 
export default useFetch;