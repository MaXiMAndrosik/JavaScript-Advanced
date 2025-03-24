const lessons = new Map();
const students = new Map();

lessons.set("Математика", "Смирнов");
lessons.set("История", "Иванова");

const ivansLessons = new Set().add("Математика").add("История");

students.set("Иван", ivansLessons);

console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); //Смирнов;
console.log(`Уроки Ивана: ${[...students.get("Иван")]}`); //математика, история
//02.00
