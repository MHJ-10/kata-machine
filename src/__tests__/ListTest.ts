export function test_list(list: List<number>): void {
    list.append(10); // [10]
    list.prepend(5); // [5, 10]
    list.append(15); // [5, 10, 15]
    list.prepend(2); // [2, 5, 10, 15]

    expect(list.length).toBe(4);
    expect(list.get(0)).toBe(2);
    expect(list.get(3)).toBe(15);

    expect(list.removeAt(1)).toBe(5); // [2, 10, 15]
    expect(list.removeAt(1)).toBe(10); // [2, 15]

    expect(list.length).toBe(2);
    expect(list.get(0)).toBe(2);
    expect(list.get(1)).toBe(15);

    list.append(20); // [2, 15, 20]
    list.prepend(1); // [1, 2, 15, 20]
    list.append(25); // [1, 2, 15, 20, 25]

    expect(list.length).toBe(5);
    expect(list.get(2)).toBe(15);
    expect(list.get(4)).toBe(25);

    expect(list.remove(15)).toBe(15); // [1, 2, 20, 25]
    expect(list.remove(999)).toBeUndefined(); // not found

    expect(list.length).toBe(4);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBe(20);
    expect(list.get(3)).toBe(25);

    expect(list.removeAt(0)).toBe(1);
    expect(list.removeAt(0)).toBe(2);
    expect(list.removeAt(0)).toBe(20);
    expect(list.removeAt(0)).toBe(25);
    expect(list.length).toBe(0);
}
