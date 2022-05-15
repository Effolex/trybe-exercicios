const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


function setNewKey(lesson, key, value) {
  lesson[key] = value;

}

function listKeys(lesson) {
  return Object.keys(lesson);
}

function objectLength() {
  
}

console.log(lesson2);

setNewKey(lesson2,'turno','manhã');

console.log(lesson2)

console.log(listKeys(lesson2));

