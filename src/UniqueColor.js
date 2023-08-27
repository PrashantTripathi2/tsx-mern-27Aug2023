function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const uniqueColors = new Set();
while (uniqueColors.size < 40) {
    const randomColor = getRandomColor();
    uniqueColors.add(randomColor);
}
var uniqueColorsArray;
export default  uniqueColorsArray = [...uniqueColors];