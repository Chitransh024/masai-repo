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
    students.splice(0, 0, "X");
    console.log(students);
    console.log(students.includes("B"));
    console.log(students.join(","));
}
test1();

console.log("----Test 2----");
function test2() {
    let students = ["M", "N"];
    students.splice(2, 0, "Z");
    console.log(students);
    console.log(students.includes("Z"));
    console.log(students.join(","));
}
test2();

console.log("----Test 3----");
function test3() {
    let students = ["P", "Q", "R"];
    students.splice(1, 0, "T");
    console.log(students);
    console.log(students.includes("X"));
    console.log(students.join(","));
}
test3();
