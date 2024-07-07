class analyseArray {
    constructor(array) {

        this.array = array;

    }

    average(array) {

        let total = 0;
        let elements = this.length(array);

        for(let i = 0; i < array.length; i++){
            total += array[i];
        }

        return total / elements;
    }

    min(array) {

        let min = null;

        array.forEach(element => {
            if(min === null){
                min = element;
            } else if (element < min) {
                min = element;
            }
        });

        return min;

    }

    max(array) {
        let max = null;

        array.forEach(element => {
            if(max === null){
                max = element;
            } else if ( element > max){
                max = element;
            }
        })

        return max;
    }

    length(array) {

        let length = 0;

        array.forEach(element => {
            length ++;
        });

        return length;

    }

    analyze(array) {
        
        return ({
            average: this.average(array),
            min: this.min(array),
            max: this.max(array),
            length: this.length(array)
        })
    } 
}

module.exports = analyseArray;