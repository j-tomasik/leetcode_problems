const playlist = (songs) => {
    let array = new Array(60).fill(0);

    pairs = 0;

    for(let song of songs) {
        let current = song % 60;
        let otherPair = (60 - current) % 60;

        if(current) {
            pairs += array[otherPair];
        } else {
            pairs += array[current]
        }

        array[pairs] += 1;
    }

    return pairs
}