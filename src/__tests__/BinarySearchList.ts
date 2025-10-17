import binary_fn from "@code/BinarySearchList";

const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];

test("binary search array", function () {
    expect(binary_fn(foo, 69)).toEqual(true);
    expect(binary_fn(foo, 1336)).toEqual(false);
    expect(binary_fn(foo, 69420)).toEqual(true);
    expect(binary_fn(foo, 69421)).toEqual(false);
    expect(binary_fn(foo, 1)).toEqual(true);
    expect(binary_fn(foo, 0)).toEqual(false);
});

// test("recurive binary search", () => {
//     expect(recursiveBinarySearch(foo, 69, 0, foo.length)).toEqual(true);
//     // expect(recursiveBinarySearch(foo, 1336, 0, foo.length)).toEqual(false);
//     // expect(recursiveBinarySearch(foo, 69420, 0, foo.length)).toEqual(true);
//     // expect(recursiveBinarySearch(foo, 69421, 0, foo.length)).toEqual(false);
//     // expect(recursiveBinarySearch(foo, 1, 0, foo.length)).toEqual(true);
//     // expect(recursiveBinarySearch(foo, 0, 0, foo.length)).toEqual(false);
// });
