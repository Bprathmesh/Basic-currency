function useCurrencyInfo(currency){
    //for customhooks return js so use .js syntax  always' use' as prefix as hooks 
    const [data,setData] = useState({});

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then(res=>res.json())
            .then(data=>setData(data[currency]))
            .then(console.log(data))
        },[currency])

    return data;
}
export default useCurrencyInfo;