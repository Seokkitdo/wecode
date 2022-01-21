const getEven = (num = 50) => {
    let EvenArr = []
    for(let i = 1; i <= num; i++) {
        if(i % 2 === 0) {
            EvenArr.push(i)
        }
    }
    return EvenArr;
}