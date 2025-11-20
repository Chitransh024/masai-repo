function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];
    students.splice(1, 0, "David");
    console.log(students.includes("Eve"));
    console.log(students.join(","));
}

manageStudents();


console.log("----Test 1----");
function test1() {
    let students = ["A", "B", "C"];
    students.splice(2, 0, "Z");
    console.log(students.includes("Z"));
    console.log(students.join(","));
}
test1();


console.log("----Test 2----");
function test2() {
    let students = ["Liam", "Noah"];
    students.splice(0, 0, "Emma");
    console.log(students.includes("Noah"));
    console.log(students.join(","));
}
test2();


console.log("----Test 3----");
function test3() {
    let students = ["Sam", "Tom", "Ana"];
    students.splice(1, 0, "Kim");
    console.log(students.includes("X"));
    console.log(students.join(","));
}
test3();
