interface Node<T> {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
}

export default class DoublyLinkedList<T> {
    public length: number;
    public head?: Node<T>;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        const node: Node<T> = { value: item };

        this.length++;
        if (!this.head) {
            this.head = node;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx === 0 || !this.length) {
            this.prepend(item);
        } else if (idx === this.length) {
            this.append(item);
        } else if (idx > this.length) {
            throw new Error("idx is greater than list length");
        } else {
            this.length++;
            const node: Node<T> = { value: item };
            let current = this.head;
            for (let i = 0; current && i < idx; i++) {
                current = current?.next;
            }

            if (current?.prev) {
                const currentPrev = current.prev;
                currentPrev.next = node;
                node.prev = currentPrev;
                node.next = current;
                current.prev = node;
            }
        }
    }
    append(item: T): void {
        const node: Node<T> = { value: item };

        if (!this.head) {
            this.prepend(item);
        }

        this.length++;

        let current = this.head;

        for (let i = 0; i < this.length; i++) {
            current = current?.next;
        }

        if (current?.next) {
            current.next = node;
            node.prev = current;
        }
    }
    // remove(item: T): T | undefined {}
    // get(idx: number): T | undefined {

    // }
    // removeAt(idx: number): T | undefined {}
}

const list = new DoublyLinkedList<number>();

for (let i = 10; i >= 1; i--) {
    list.prepend(i);
}
