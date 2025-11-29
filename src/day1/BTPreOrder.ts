type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};

const traversal = (tree: BinaryNode<number>,array:number[]) => {

    
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return [];
}

pre_order_search({
    value: 1,
    left: {
        value: 7,
        right: {
            value: 6,
            left: {
                value: 5,
                right: null,
                left: null,
            },
            right: {
                value: 11,
                left: null,
                right: null,
            },
        },
        left: {
            value: 2,
            left: null,
            right: null,
        },
    },
    right: {
        value: 9,
        left: null,
        right: {
            value: 12,
            left: {
                value: 4,
                left: null,
                right: null,
            },
            right: null,
        },
    },
});
