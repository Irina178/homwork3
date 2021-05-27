'use strict'
//1 Создание объекта
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
}
console.log(apartment)
//2 Вложенные свойства
const apartment1 = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  owner:{
  name:"Henry",
  phone: '982-126-1588',
  email: "henry.carter@aptmail.com",
  }
  };
  console.log(apartment1)
  //3 Доступ к свойствам через точку

  const apartment2 = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city centre',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };
  
  // Change code below this line
  const aptRating = apartment.rating;
console.log(aptRating)
  const aptDescr = apartment.descr;
console.log(aptDescr)
  const aptPrice = apartment.price;
console.log(aptPrice)
  const aptTags = apartment.tags;
console.log(aptTags)
  // Change code above this line

 //4 Доступ к вложенным свойствам
 //Для доступа к вложенным свойствам используется цепочка обращений «через точку».
 // Например, если необходимо получить значение страны пользователя, 
  //записываем user.location.country,
  // где user.location это обращение (путь) к объекту в свойстве location, 
  // а user.locaton.country обращение к свойству country в этом объекте. 
  // То есть, «точка» указывает следующую вложенность.
 //Если значение свойства это массив, то в нашем примере user.hobbies - обращение к этому массиву.
 // Далее, можно получить доступ к его элементам через квадратные скобки и индекс или использовать свойства и методы.
 const apartment3 = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city centre',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
      name: 'Henry',
      phone: '982-126-1588',
      email: 'henry.carter@aptmail.com',
    },
  };
  const ownerName = apartment3.owner.name;
  const ownerPhone = apartment3.owner.phone;
  const ownerEmail = apartment3.owner.email;
  const numberOfTags = apartment3.tags.length;
  const firstTag = apartment3.tags[0];
  const lastTag = apartment3.tags[2];
  // Change code above this line

  //5 Доступ к свойствам через квадратные скобки
  const apartment4 = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city centre',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };
  

  const aptRating1 = apartment4['rating'];
  const aptDescr1 = apartment4['descr'];
  const aptPrice1 = apartment4['price'];
  const aptTags1 = apartment4['tags'];
//6 Изменение значения свойства
const apartment5 = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city centre',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
      name: 'Henry',
      phone: '982-126-1588',
      email: 'henry.carter@aptmail.com'
    }
  };
  
  apartment5.price=5000;
  apartment5.rating=4.7;
  apartment5.owner.name="Henry Sibola";
  apartment5.tags.push ("trusted");
  //7 Добавление свойств
  //Значение вложенного свойства location это блок с 2 переменными country:"Jamaica",
    //city: "Kingston",
  const apartment6 = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city centre',
    rating: 4.7,
    price: 5000,
    tags: ['premium', 'promoted', 'top', 'trusted'],
    owner: {
      name: 'Henry Sibola',
      phone: '982-126-1588',
      email: 'henry.carter@aptmail.com'
    }
  };
  apartment6.area = 60;
  apartment6.rooms = 3;
  apartment6.location= {
   country:"Jamaica",
    city: "Kingston",
  }
  
//8 Короткие свойства
//Иногда, при создании объекта, значение свойства необходимо взять из переменной или параметра функции с таким же именем, как и само свойство.
//Синтксис в следующем примере слишком громоздкий,
// потому что приходится дублировать имя свойства и имя переменной, в которой хранится необходимое значение.
//длинный вариант записи 
const name = "Генри Сибола";
const age = 25;

const user = {
  name: name,
  age: age
};

console.log(user.name); // "Генри Сибола"
console.log(user.age); // 25

// // короткий вариант записа синтаксиса
// const name1 = "Генри Сибола";
// const age1 = 25;

// const user1 = {
//   name1,
//   age1
// };

// console.log(user1.name); // "Генри Сибола"
// console.log(user1.age); // 25
// //решение задачки 8
// const name1 = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//  name1,
//  price, 
//  image, 
//  tags 
// };
// console.log(product.name1);
// console.log(product.price);
// console.log(product.image);
// console.log(tags);
//9 Вычисляемые свойства
//Бывают ситуации, когда при объявлении обьекта необходимо добавить свойство с именем, которое мы заранее не знаем,
//рушение
//const propName = "name";
//const user = {
  //age: 25,
  // Имя этого свойства будет взято из значения переменной propName
  //[propName]: "Генри Сибола"
//};

console.log(user.name); // "Генри Сибола"
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Change code below this line
  
  [emailInputName]:"henry.carter@aptmail.com",
  [passwordInputName]:"jqueryismyjam",
  
  // Change code above this line
};
//10 Цикл for...in
// const apartment7= {
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Change code below this line
  
//   for(key in apartment7){
//   keys.push(key);
//   values.push(apartment7[key]);
//   }
  //11 Метод hasOwnProperty()
//   const keys2 = [];
// const values2 = [];
// const advert = {
//   service: 'apt',
// };
// const apartment7 = Object.create(advert);
// apartment7.descr = 'Spacious apartment in the city centre';
// apartment7.rating = 4;
// apartment7.price = 2153;

// for (const key in apartment7) {
//   if (apartment7.hasOwnProperty(key)){
//     console.log(key)
//     console.log(apartment7 [key])
  

//   keys2.push(key);
//   values2.push(apartment7[key]);}

//   // Change code above this line
// }
//12
function countProps(object) {
    let propCount = 0;
    // Change code below this line
  for (const kye in object) {
  if  (object. hasOwnProperty(kye))
  {propCount += 1}
  }
    // Change code above this line
    return propCount;
  }
  //13 Метод Object.keys()
  //У встроенного класса Object есть несколько полезных методов для работы с объектами. 
  //Первый из них это Object.keys(obj), который принимает объект и возвращает массив ключей его собственных свойств. 
  //Если в объекте нет свойств, метод вернёт пустой массив. свойства это то что в {}

  const book = {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: [ ],
    rating: 8.38,
  };
  const keyss = Object.keys(book);
  console.log(keyss); // ['title', 'author', 'genres', 'rating']


  const apartment = {
    descr: 'Spacious apartment in the city centre',
    rating: 4,
    price: 2153,
  };
  const values = [];
  // Change code below this line
  const keys = Object.keys(apartment);
   
  for(const key of keys){
  values.push(apartment[key])
  }
//14
function countProps(object) {
  // Change code below this line
  let propCount = 0;
  const keys = Object.keys(object);
  for (const key of keys) {
    propCount += 1;
  }
  return propCount;
  // Change code above this line
}
//15
const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
console.log(keys);
const values = Object.values(apartment);
console.log(values);
//16
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
 const keys = Object.keys(salaries);
for (key of keys) {
  if (salaries.hasOwnProperty(key)){
    totalSalary += salaries[key];
  }
}
  // Change code above this line
  return totalSalary;
}
countTotalSalary({})
countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })
//17 Массив объектов
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (let color of colors) {
hexColors.push(color.hex);
rgbColors.push(color.rgb)
};
//18 Задача. Поиск объекта по значению свойства
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  for (const product of products) {
  let name = product.name;
    if(productName === name) {
    return product.price
    }
  }
  return null;
}
//19
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];
   function getAllPropValues(propName) {
  const array = [];
  for (const product of products) {
    if (product[propName]) {
      array.push(product[propName]);
    }
  }
  return array;
}
//20
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];
function calculateTotalPrice(productName) {
    let total = 0;
  for (const prop of products) {
    let name = prop.name;
    if (productName === name) {
      total = prop.price * prop.quantity;
    }
  }
  return total;
}
console.log(calculateTotalPrice('Droid'));
//21 Деструктуризация объектов
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {yesterday, today, tomorrow } = highTemperatures
// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;
//22 Значения по умолчанию
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {
  yesterday ,
today ,
tomorrow ,
 icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures 
// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;
//23 
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const { yesterday: highYesterday,
       today: highToday,
       tomorrow: highTomorrow, 
       icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures
// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
  
//24
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const {hex,rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}
//25
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
const {
  today: 
  { low : lowToday, high : highToday, icon : todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg'}, 
  tomorrow: { low : lowTomorrow, high : highTomorrow, icon : tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' }
} = forecast;

//26
// Change code below this line
function calculateMeanTemperature(forecast) {
  //  const todayLow = forecast.today.low;
  //  const todayHigh = forecast.today.high;
  //  const tomorrowLow = forecast.tomorrow.low;
  //  const tomorrowHigh = forecast.tomorrow.high;
     const {today: {low: todayLow, high: todayHigh},
            tomorrow: {low: tomorrowLow, high: tomorrowHigh}
     } = forecast;
    // Change code above this line
    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  }
//27
const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
 
const bestScore = (Math.max(...scores));
const worstScore = (Math.min(...scores));
//28
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore =Math.min (...allScores);
//29
const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings};


//30
function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  // Change code below this line
  const newData = { completed, category, priority, ...data };
  // Change code above this line
  return newData;
}
//31
// Change code below this line
function add(...args) {
  return args.reduce((previous, current) => {
    return previous + current;
  });
  console.log(args);
}
add(15, 27)
add(12, 4, 11, 48)
add(32, 6, 13, 19, 8)
add(74, 11, 62, 46, 12, 36)
  //32
  // Пиши код ниже этой строки
function addOverNum(values, ...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  total>values+args
  }
  return total;
  //33
  function findMatches(...args)
 {  const matches = [];
 for (let i = 1; i < args.length; i += 1) {
 if (args[0].includes(args[i])) {      matches.push(args[i]);
 }
 }
return matches;
} (edited) 
//34
const bookShelf = {
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
};
//35
const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
    let indexOfOldBook=this.books.indexOf(oldName);
  this.books.splice(indexOfOldBook, 1, newName);
  },
};


//41
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    const { potions } = this;
    const { name } = potionName;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === name) {
        return `Potion ${name} is already equipped!`;
      }
      potions.push(potionName);
    }
  },
  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === potionName) {
        potions.splice(i, 1);
        return potions;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === oldName) {
        potions[i].name = newName;
        return potions;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};
