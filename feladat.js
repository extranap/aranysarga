export function feladat01(szinek) {
    const len = szinek.length;
    const mix = (1 << len) - len - 1;
    console.log(szinek, mix);
    return mix;
}
