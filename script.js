let Dataset = [];

function Information(name, email, status, topics, langauge, feedback) {
  // constructor
  this.name = name;
  this.email = email;
  this.status = status;
  this.topics = topics;
  this.langauge = langauge;
  this.feedback = feedback;
}

function Display() {}

Display.prototype.show = function () {
  let htmlUi = '';
  Dataset.map((info) => {
    htmlUi += `
        <h2>Name: ${info.name}</h2> 
        <p> <b>Status:<b> ${info.status}</p> 
        <p> <b>Email:</b> ${info.email}<p>
        <p> <b>Difficult topics:</b> ${info.topics} <p>
        <p> <b>Langauges Add:</b>${info.langauge} <p>
        <p> <b>Recommendations / FeedBack:</b> ${info.feedback} <p>`;
  });

  let display = document.getElementById('form');
  display.innerHTML = htmlUi;
};

let btn = document.getElementById('btn');
btn.addEventListener('click', addInformationtoDataset);

function addInformationtoDataset(e) {
  //do stuff here

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let topics;
  let langauge = document.getElementById('langauge');
  let feedback = parseFloat(document.getElementById('feedback').value);
  let status;
  let student = document.getElementById('student');
  let graduate = document.getElementById('graduate');
  let other = document.getElementById('other');

  let react = document.getElementById('react');

  console.log(student);

  //use else is
  if (student.checked) {
    status = student.value;
  }
  if (graduate.checked) {
    status = graduate.value;
  }
  if (other.checked) {
    status = other.value;
  }

  if (react.checked) {
    topics = react.value;
  }

  let info = new Information(name, email, status, langauge, feedback);
  Dataset.push(info);
  console.log(Dataset);
  let display = new Display();
  display.show();
}
