let step=3

function boxSeq(step) {
    let box = 3;

    if (step != 0) {
        for (let i = 1; i < step; i++) {
            if (step % 3 == 0) {
                box = box - 1;
            } else box = box + 3
        }
    } else return 0

    boxSeq();
    return box
}