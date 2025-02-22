function student(name: string, subject: string) {
  return {
    name,
    subject,
    report: function () {
      console.log(`${name} is enrolled in ${subject}`)
    },
  }
}

function teacher(name: string, subject: string) {
  return {
    name,
    subject,
    report: function () {
      console.log(`${name} is teaching ${subject}`)
    },
  }
}

let students = [
  student('John', 'Math'),
  student('Jane', 'Science'),
  student('Jim', 'English'),
]

for (let student of students) {
  student.report()
}

let teachers = [
  teacher('Alice', 'Math'),
  teacher('Bob', 'Science'),
  teacher('Charlie', 'English'),
]

for (let teacher of teachers) {
  teacher.report()
}
