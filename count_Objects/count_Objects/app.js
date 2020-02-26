function getCount(objects) {
    let count = 0;
    for (let i = 0; i < objects.length; i++) {

        if (objects[i, i] - objects[i, i + 1] === 0) {
            count++;

        }
    }
    return count;
}

function main() {
    const n = +(readLine());
    let objects = [];

    for (let i = 0; i < n; i++) {
        const [a, b] =[1,1][3,3] ;

        objects.push({ x: +(a), y: +(b) });
    }

    console.log(getCount(objects));
}