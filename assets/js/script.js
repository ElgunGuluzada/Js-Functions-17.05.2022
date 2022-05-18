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
    // let arr = [5, 10, 15, 20, 25, 30];
    let even;
    let pow;
    let sum = 0;
    let count = prompt("Yeni bir array yaratmaliyiq. \nZehmet olmasa 1-10 araliginda arrayin uzunlugunu daxil edin:  \n")
    if (count > 0 && count < 11) {
        let arr = [];
        for (let i = 0; i < count; i++) {
            arr.push((prompt((i + 1) + "nomreli ededi qeyd edin")));
        }
        document.write("Daxil etdiyiniz ededler: ", arr, "\n\n")

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                even = arr[i]
                pow = Math.pow(even, 2) // ozum bilerek math methodunu istifade etmek istedim
                sum += pow
            }
        }
        document.write("\n\nDaxil etdiyiniz ededlerin arasinda olan cut ededlerin kvadratlari cemi = ", sum)
    }
    else {
        alert("Daxil edilen eded verilen serti odemir!")
    }

}
TotalEvenPow();

function reloadPage() {
    window.location.reload();
}

// Task 1 End


