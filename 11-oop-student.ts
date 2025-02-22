export class Student {
  name: string
  subject: string

  constructor(name: string, subject: string) {
    this.name = name
    this.subject = subject
  }

  report(): void {
    console.log(`${this.name} is enrolled in ${this.subject}`)
  }
}

export class Teacher {
  name: string
  subject: string

  constructor(name: string, subject: string) {
    this.name = name
    this.subject = subject
  }

  report(): void {
    console.log(`${this.name} is teaching ${this.subject}`)
  }
}

let students: Student[] = [
  new Student('John', 'Math'),
  new Student('Jane', 'Science'),
  new Student('Jim', 'English'),
]

for (let student of students) {
  student.report()
}

let teachers: Teacher[] = [
  new Teacher('Alice', 'Math'),
  new Teacher('Bob', 'Science'),
  new Teacher('Charlie', 'English'),
]

for (let teacher of teachers) {
  teacher.report()
}
