// Find the Majority Element in an Array (Element that occurs more than n/2 times)

function findMajorityElement(arr){
    let map = new Map();

    for (let element of arr){
        if (map.has(element)){
            map.set(element, map.get(element) + 1);
        } else {
            map.set(element, 1);
        }
    }

    for (let [element, frequency] of map){
        if (frequency > Math.floor(arr.length / 2)){
            return element;
        }
    }
}

console.log(findMajorityElement([1, 2, 1, 2, 1]));  // 1
console.log(findMajorityElement([1, 2, 1, 2, 1, 2]));  // undefined