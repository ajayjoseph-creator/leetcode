/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    const sumA = aliceSizes.reduce((a, b) => a + b, 0);
    const sumB = bobSizes.reduce((a, b) => a + b, 0);

    const diff = (sumA - sumB) / 2;

    const setB = new Set(bobSizes);

    for (let a of aliceSizes) {
        let b = a - diff;
        if (setB.has(b)) {
            return [a, b];
        }
    }
};
