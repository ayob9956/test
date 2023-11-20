function showWether() {

    let wether = document.getElementById("wether")
    let pp =  document.createElement("p")
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=713de063799b28637c1c59b31cb1860c')
  .then((response) => response.json())
  .then((json) => {


  pp.innerText = `المناخ في الرياض :
  
  ودرجة الحرارة :${json.main.temp}
وحالة الرطوبة ${json.main.humidity}
وخطوط الطول ${json.coord.lon}
وخطوط العرض ${json.coord.lat}
  
  `;

  pp.className="text-center"

  wether.append(pp)
console.log(pp);
  });
    
}

showWether();



function showpraytime() {


let prey = document.getElementById("prey")

let pr =  document.createElement("p")
let ppp =  document.createElement("p")
let dd =  document.createElement("p")

    fetch('http://api.aladhan.com/v1/timingsByCity?city=Dubai&country=United Arab Emirates&method=8')
  .then((response) => response.json())
  .then((json) => {
    console.log( json.data);
    let timing = json.data.timings
let datej = json.data.gregorian.date
let dateh = json.data.hijri.date

let day =json.data.gregorian.weekday.en
dd.innerText=`اليوم ${day}`
console.log(dateh);
ppp.innerText =` التاريخ الميلادي ${datej}
${dateh}التاريخ الهجري`;

console.log(datej);
pr.innerText=` الفجر ${timing.Fajr}
الظهر ${timing.Dhuhr}
العصر ${timing.Asr} 
المغرب ${timing.Maghrib}

العشاء ${timing.Isha}

`;
prey.append(ppp)
prey.append(pr)


//     for (let i = 0; i <  json.data.timings.length; i++) {
//         console.log(timing[i]);
        
//     }
// //   json.data.timings.map(item=>{
//     console.log(item.);
//   })
     })
   
// console.log(timing);
// timing.map(element => {
    
// 	pr.textContent = `${element.Fajr    }`;
//     prey.append(pr)
//     console.log(prey);
// });



//   pr.className="text-center"

  
// console.log(pr);
//   });
    
}


showpraytime();


   
let signup = document.getElementById("signup")

signup.addEventListener("click",(e)=>{
    e.preventDefault();
    let name = document.getElementById("namesign").value
    let email = document.getElementById("namesign").value
    let username = document.getElementById("usersign").value
    let usernameregex = /^([a-z]|[A-Z]){1,19}$/;
    let emailregex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let password = document.getElementById("namesign").value
    
    if (name.length <3) {
        alert("name is sholed more 3")
    } else if (usernameregex.test(username)) {
        alert("  اليوزر يجب ان يحتوي على الأقل حرف كبير ولا يزيد عنن 19 حرف")
    }else if (emailregex.test(email)) {
        alert("الايميل غير صحيح!!")
    }else if (password.length<4) {
        alert("كلمة المرور يجب ان تكون اكثر من 4 حروف")

    }else {
        register();
        alert("تم التسجيل بنجاح!")
    }
})

    function register() {


    fetch('https://65523ba35c69a7790329bd14.mockapi.io/signup', {
  method: 'POST',
  body: JSON.stringify({
    name: name,
    email: email,
    username:username,
    password:password,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

    
}



function toastregister(string) {
    
}


console.log("heelo");

