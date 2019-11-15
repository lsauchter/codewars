function mostMoney(students) {
  const totals = students.map(student => {
    const total = student.fives * 5 + student.tens * 10 + student.twenties * 20;
    return { name: student.name, total };
  });
  let highest = totals[0];
  let names = totals[0].name;
  for (let i = 1; i < totals.length; i++) {
    if (totals[i].total > highest.total) {
      highest = totals[i];
      names = totals[i].name;
    } else if (totals[i].total === highest.total) {
      names = "all";
    }
  }
  return names;
}

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

//shorter solution//

function mostMoney(s) {
  s.sort((x, y) => sum(y) - sum(x));
  if (s.length > 1 && sum(s[0]) == sum(s[1])) return "all";
  return s[0].name;
}

const sum = s => s.fives * 5 + s.tens * 10 + s.twenties * 20;
