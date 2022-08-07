const {formatDistance, format, parseISO} = require('date-fns');
const {compareAsc, compareDesc} = require('date-fns');

const startDate = new Date(); // (Sep 16 2020)
const endDate = '2022-08-05 10:44:21'; // (Dec 25 2020)
const distanceInWords = formatDistance(startDate,parseISO(endDate));
// console.log(distanceInWords.substring(distanceInWords.indexOf(distanceInWords.match(/\d+/g))))
// console.log(distanceInWords+" ago");
// console.log(format(startDate, 'yy-MM-dd HH:mm:ss'));
let tokenTime = 60*1000;
let currenTime = new Date().getTime();

// console.log(new Date().getTime());

const today = new Date();


const after = {
    name: "Bull",
    date: '2022-07-29 18:10:30'
};

const date4 = {
    name: "Wow",
    date: '2022-07-29 19:10:30'
};
// console.log(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));
// const date1 = new Date('2022-07-29');
// const date2 = new Date('2022-07-28');
// const date3 = new Date('2022-07-27');
const arr = [after, date4];
let sArr = arr.flat().sort((a,b) => compareDesc(parseISO(a.date), parseISO(b.date)));
// arr.sort(compareDesc);
// console.log(sArr);
// console.log(arr.map(o => o));
// console.log(today);
// console.log(`It is ${distanceInWords} until Christmas`);

const data = [
    {id:1, name:"rishi"},
    {id:2, name:"aishu"},
    {id:3, name:"sonu"}
]

my = "rishi";
console.log(new Date().toLocaleTimeString());