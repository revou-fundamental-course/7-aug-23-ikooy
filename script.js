document.getElementById('calculate').addEventListener('click', function () {
    const tinggi = parseFloat(document.getElementById('input-tinggi').value);
    const alas = parseFloat(document.getElementById('input-alas').value);
    const luas = (alas * tinggi) / 2;
    const keliling = alas + tinggi + Math.sqrt(alas ** 2 + tinggi ** 2);
    document.getElementById('luas').innerText = `Luas: ${luas.toFixed(2)}`;
    document.getElementById('keliling').innerText = `Keliling: ${keliling.toFixed(2)}`;
});

document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('input-tinggi').value = '';
    document.getElementById('input-alas').value = '';
    document.getElementById('luas').innerText = 'Luas: 0';
    document.getElementById('keliling').innerText = 'Keliling: 0';
});
