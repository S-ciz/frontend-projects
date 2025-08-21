
let counts = document.querySelectorAll('.stat-count');
let arr_counts = [1200, 1800, 3000]


counts.forEach((container, index)=>{

    incrementCounter( arr_counts[index], container)
})


function incrementCounter(maxCount, container) {

    let start = 0;
    let countintID = setInterval(() => {

        if (start < maxCount) {
            start += 10;
            container.textContent = start;
        } else {
            clearInterval(countintID);
        }
    }, 5);

}