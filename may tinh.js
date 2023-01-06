function cong() {
    let a = +document.getElementById("nhap1").value;
    let b = +document.getElementById("nhap2").value;
    let c = a + b;
    console.log(a);
    console.log(b);
    document.getElementById("ketqua").innerHTML = c;
    console.log(c);
}

function tru() {
    let a = +document.getElementById("nhap1").value;
    let b = +document.getElementById("nhap2").value;
    let d = a - b;
    document.getElementById("ketqua").innerHTML = d;



}
function nhan() {
    let a= +document.getElementById("nhap1").value;
    let b= +document.getElementById("nhap2").value;
    let d = a*b;
    document.getElementById("ketqua").innerHTML=d;

}
function chia() {
    let a = +document.getElementById("nhap1").value;
    let b = +document.getElementById("nhap2").value;
    let d = a / b;
    document.getElementById("ketqua").innerHTML = d;
}


