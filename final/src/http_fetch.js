import React, { useState, useEffect } from "react";

const Recommend = (answers) => {
    const url = 'http://localhost:5000/food/analyze/?p1='+String(answers[0])+'&p2='+String(answers[1])+'&p3='+String(answers[2])+'&p4='+String(answers[3]);
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