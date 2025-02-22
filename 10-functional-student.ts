export type Student = {
  name: string
  subject: string
}

export type Teacher = {
  name: string
  subject: string
}

function reportStudent(student: Student): void {
  console.log(`${student.name} is enrolled in ${student.subject}`)
}

function reportTeacher(teacher: Teacher): void {
  console.log(`${teacher.name} is teaching ${teacher.subject}`)
}

let students: Student[] = [
  { name: 'John', subject: 'Math' },
  { name: 'Jane', subject: 'Science' },
  { name: 'Jim', subject: 'English' },
]

students.forEach(reportStudent)

let teachers: Teacher[] = [
  { name: 'Alice', subject: 'Math' },
  { name: 'Bob', subject: 'Science' },
  { name: 'Charlie', subject: 'English' },
]

for (let teacher of teachers) {
  reportTeacher(teacher)
}
