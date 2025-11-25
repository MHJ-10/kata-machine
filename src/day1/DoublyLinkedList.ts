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
            return;
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
        if (!this.head) {
            this.prepend(item);
            return;
        }

        const node: Node<T> = { value: item };
        this.length++;

        let current = this.head;

        for (let i = 0; i < this.length && current.next; i++) {
            current = current.next;
        }

        current.next = node;
        node.prev = current;
    }
    remove(item: T): T | undefined {
        if (!this.head) return undefined;

        let targetIndex: number = -1;
        let current = this.head;

        if (current.value !== item) {
            for (let i = 0; i < this.length; i++) {
                if (current.next) current = current.next;
                if (current.value === item) {
                    targetIndex = i + 1;
                    break;
                }
            }
        } else {
            targetIndex = 0;
        }

        if (targetIndex < 0) return undefined;

        this.removeAt(targetIndex);

        return item;
    }
    get(idx: number): T | undefined {
        if (idx === 0) return this.head?.value;
        if (idx >= this.length || !this.head) return undefined;

        let current = this.head;
        for (let i = 0; i < idx; i++) {
            if (current.next) {
                current = current.next;
            }
        }

        return current?.value;
    }
    removeAt(idx: number): T | undefined {
        if (idx >= this.length) return undefined;

        this.length--;

        let current: Node<T> | undefined = this.head;

        if (idx !== 0) {
            for (let i = 0; i < idx; i++) {
                current = current?.next;
            }
        }

        const currentPrev = current?.prev;
        const currentNext = current?.next;

        if (currentPrev && current && currentNext) {
            currentPrev.next = current?.next;
            current.next = undefined;

            currentNext.prev = currentPrev;
            current.prev = undefined;
        }

        if (idx === 0) {
            this.head = currentNext;
        }

        if (!this.length) this.head = undefined;

        return current?.value;
    }
}
