
// Praktika ucun

// var a = window.prompt("Eded Daxil Edin: ")
// var b = window.prompt (a,"yuxarida qeyd olunan eded nece defe yukseldilsin?")
// var c;

// if(a!=isNaN || b!=isNaN){
//     c = Math.pow(a,b)
// }


// // console.log("Cavab :", c ); //log-da cagiris
// document.write("Cavab :" ,c)

// Task 1 Start
// Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

function TotalEvenPow() {
    let arr = [5, 10, 15, 20, 25, 30];
    let even;
    let pow;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even = arr[i]
            pow = Math.pow(even, 2) // ozum bilerek math methodunu istifade etmek istedim
            sum += pow
        }
    }
    console.log(sum)
}
TotalEvenPow();

// Task 1 End


// Task 2 Start
// Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

function IsDivide3And7(n){
    if(n%3==0 && n%7==0){
        document.write(n, " ededi 3-e ve 7-e tam bolunur")
    }
    else{
        document.write(n, " ededi 3-e ve 7-e tam bolunmur")
    }
}

IsDivide3And7(21);