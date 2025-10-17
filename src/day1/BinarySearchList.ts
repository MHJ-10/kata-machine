export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const midPoint = Math.floor(low + (high - low) / 2);
        const value = haystack[midPoint];

        if (needle === value) return true;

        if (needle > value) {
            low = midPoint + 1;
        }

        if (needle < value) {
            high = midPoint;
        }
    } while (low < high);

    return false;
}

// export const recursiveBinarySearch = (
//     arr: number[],
//     target: number,
//     low: number,
//     high: number,
// ): boolean => {
//     const mid = Math.floor(low + (high - low) / 2);
//     const val = arr[mid];

//     if (low < high) {
//         if (val === target) return true;

//         if (val > target) {
//             recursiveBinarySearch(arr, target, low, mid);
//         }

//         if (val < target) {
//             recursiveBinarySearch(arr, target, mid + 1, high);
//         }
//     }
//     return false;
// };
