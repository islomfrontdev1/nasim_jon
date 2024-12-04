console.log("object");

//obeyekt yaratish
let student={
    ism:"Ali",
    familiya:"Valiyev",
    yosh:18,
    coin:200,
    kurs:"JS",
}
console.log('student1',student);

let student2 = new Object()

//valuelarni qoshish
student2.ism="Vali"

console.log('student2',student2);


//valuelarni chiqarish
console.log('student ismi:',student.ism);
console.log('student familiyasi:',student.familiya);
console.log('student yoshi:',student.yosh);
console.log('student coin:',student.coin);
console.log('student kursi:',student.kurs);

// promptdan malumot objectga qo'shish
let manzil = prompt('manzilingizni kiriting')
student.manzil=manzil
console.log('student manzili:',student.manzil);


// hamma valuelarni chiqarish
let values = Object.values(student)
console.log(' values',values);



// hamma keylarni chiqarish
let keys = Object.keys(student)
console.log(' keys',keys);