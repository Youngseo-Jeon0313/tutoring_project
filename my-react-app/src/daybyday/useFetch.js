import { useEffect, useState}from 'react';

const useFetch = (callback, url) => {
    const [loading, setLoading] = useState(false);
    const fetchInitialData = async() => { //함수 ()이거 앞에 async 키워드를 추가해서 비동기 코드를 호출
        setLoading(true);
        const response = await fetch(url); //fetch 함수로 API 호출하기
        const initialData = await response.json(); //response값을 가져와 완료할 때까지 읽기 json은 그냥 그 막 :,:,이런 형식 얘기임
        if (typeof callback === 'function') {
        callback(initialData);} //todos리스트에 계속 넣어준다고 했던 함수에 이 인자를 주기!
        //이때 주의해야 할 것은 list.jsx에 가서 어떻게 key값 그리고 내용 값을 할당시킬 건지 결정을 시켜야 함@
        setLoading(false);
    }

useEffect( () => {
    fetchInitialData(); 
 }, [])

 return loading;

}

export default useFetch;

