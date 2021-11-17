import React, { useState, useEffect } from "react";

const Recommend = (answers) => {
    const key1 = Object.values(answers)[0][0];
    const key2 = Object.values(answers)[0][1];
    const key3 = Object.values(answers)[0][2];
    const key4 = Object.values(answers)[0][3];

    const url = 'http://localhost:5000/food/analyze/?p1='+key1+'&p2='+key2+'&p3='+key3+'&p4='+key4;
    const [recommend, setRecommend] = useState(null);
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        fetch(url, {method: 'get'})
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setRecommend(data)
        })
    }, []);
    console.log(recommend)
    return (
        "1"
     );
}
 
export default Recommend;