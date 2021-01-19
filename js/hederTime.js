const data = new Date();

const timeOptions = {
  today: `${data.getDate()} января`,
  time: "",
};

const refs = {
  selectorToday: document.querySelectorAll(".js-date"),
  selectorTime: document.querySelectorAll(".js-time"),
};

function creatTime(value) {
  const num = value.getDay();
  num < 1 || num > 5
    ? (timeOptions.time = "10:00 ")
    : (timeOptions.time = "19:00");
}

creatTime(data);

refs.selectorToday.forEach((item) => {
  item.textContent = timeOptions.today;
});

refs.selectorTime.forEach((item) => {
  item.textContent = timeOptions.time;
});
