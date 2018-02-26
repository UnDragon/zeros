module.exports = function getZerosCount(number) {
    var fivescount = 0;
    while (number >= 5){
        if (number % 5){
            number--;
            continue;
        }
        fivescount += number /= 5;
    }
    return fivescount;
}

