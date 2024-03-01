const months = [
  "january",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

// date(year,month,date,hour,min, secs)

const futuredate = new Date(2023, 11, 21, 20, 37);

const year = futuredate.getFullYear();
const hours = futuredate.getHours();
const minutes = futuredate.getMinutes();
const date = futuredate.getDate();

let month = months[futuredate.getMonth()];
let weekday = weekdays[futuredate.getDay()];

giveaway.textContent = `The giveaway ends on ${weekday} ${date} 
                        ${month} ${year} ${hours}:${minutes}am `;

const futuretime = futuredate.getTime();

console.log(futuretime);

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futuretime - today;

  // 1s = 1000ms
  // 1min = 60s
  // 1hr = 60 min
  // 1day = 24 hr
  const oneDay = 24 * 60 * 60 * 1000;
  const onehour = 60 * 60 * 1000;
  const onemin = 60 * 1000;

  let day = Math.floor(t / oneDay);
  let hour = Math.floor((t % oneDay) / onehour);
  let min = Math.floor((t % onehour) / onemin);
  let sec = Math.floor((t % onemin) / 1000);

  let value = [day, hour, min, sec];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(value[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expire">Sorry time is expire</h4>`;
  }
}

let countdown = setInterval(getRemainingTime, 999);

getRemainingTime();
