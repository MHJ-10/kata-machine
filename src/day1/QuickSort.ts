function sort(arr: number[], low: number, high: number): void {
    if (low >= high) {
        return;
    }

    const pivotIndex = partition(arr, low, high);

    sort(arr, low, pivotIndex - 1);
    sort(arr, pivotIndex + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let index = low - 1;
    let temp: number;

    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            index++;
            temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
        }
    }

    index++;
    temp = arr[index];
    arr[index] = pivot;
    arr[high] = temp;

    return index;
}

export default function quick_sort(arr: number[]): void {
    sort(arr, 0, arr.length - 1);
}

quick_sort([8, 7, 6, 4, 5]);
