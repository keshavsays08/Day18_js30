const timeNodes = Array.from(document.querySelectorAll("[data-time]"));
console.log(timeNodes);

const seconds = timeNodes
    .map(sec => sec.dataset.time)
    .map(timeCode=>{
        const [mins,secs]=timeCode.split(':').map(parseFloat);
        return (mins*60)+secs ;
    })
    .reduce((total,vidSecs)=> total+vidSecs );
console.log(seconds);

    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft/3600)
    secondsLeft = secondsLeft % 3600

    const minutes = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60


    
    console.log(hours,minutes,secondsLeft);
