const walk = (curr: BinaryNode<number>, path: number[]) => {
    if (curr.left) walk(curr.left, path);
    if (curr.right) walk(curr.right, path);
    path.push(curr.value);

    return path;
};

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
