var minimumRecolors = function(blocks, k) {
    let minW = Infinity;
    for (let i = 0; i <= blocks.length - k; i++) {
        let wCount = 0;
        for (let j = i; j < i + k; j++) {
            if (blocks[j] === 'W') wCount++;
        }
        minW = Math.min(minW, wCount);
    }

    return minW;
};
