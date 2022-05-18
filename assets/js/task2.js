// Task 2 Start
// Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.



function IsDivide3And7(n) {
    n = prompt(" Reqem Daxil Edin: ")
    if (n % 3 == 0 && n % 7 == 0) {
        document.write(n, " ededi 3-e ve 7-e tam bolunur")
    }
    else {
        document.write(n, " ededi 3-e ve 7-e tam bolunmur")
    }
}
IsDivide3And7();


function reloadPage() {
    window.location.reload();
}