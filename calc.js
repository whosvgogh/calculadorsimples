function solve(val) {
    let v = document.getElementById('res');
    v.value += val;
}
function reult() {
    let num1 = document.getElementById('res').value;
    let num2 = eval(num1);
    document.getElementById('res').value = num2;
}
function clear() {
    let inp = document.getElementById('res');
    inp.value = '';
}
function back() {
    let ev = document.getElementById('res')
    ev.value = ev.value.slice(0, -1);
}