var $7GTCu$axios = require("axios");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

const $b140200631cd2662$export$692b4a7cc7a486ce = async (email, password)=>{
    try {
        const res = await (0, ($parcel$interopDefault($7GTCu$axios)))({
            method: "POST",
            url: "/api/auth/login",
            data: {
                email: email,
                password: password
            }
        });
        if (res.data.status !== "success") throw new Error(res.data.message);
        res.data.user.role === "admin" ? location.assign("/dashboard") : location.assign("/home");
    } catch (err) {
        console.log(`An error occurred: ${err.message}`);
    }
};



const $198a7b8d9e9045b8$export$16015adca85344a = async ({ fname: fname, lname: lname, email: email, password: password })=>{
    try {
        const res = await (0, ($parcel$interopDefault($7GTCu$axios)))({
            method: "POST",
            url: "/api/auth/register",
            data: {
                fname: fname,
                lname: lname,
                email: email,
                password: password
            }
        });
        if (res.data.status !== "success") throw new Error(res.data.message);
        res.data.user.role === "admin" ? location.assign("/dashboard") : location.assign("/home");
    } catch (err) {
        console.log(`An error occurred: ${err.message}`);
    }
};


const $08aa96ce9be7b320$var$loginForm = document.querySelector("#login-form");
const $08aa96ce9be7b320$var$registerForm = document.querySelector("#register-form");
$08aa96ce9be7b320$var$loginForm?.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = $08aa96ce9be7b320$var$loginForm.querySelector("#email").value;
    const password = $08aa96ce9be7b320$var$loginForm.querySelector("#password").value;
    (0, $b140200631cd2662$export$692b4a7cc7a486ce)(email, password);
});
$08aa96ce9be7b320$var$registerForm?.addEventListener("submit", (e)=>{
    e.preventDefault();
    const fname = $08aa96ce9be7b320$var$registerForm.querySelector("#fname").value;
    const lname = $08aa96ce9be7b320$var$registerForm.querySelector("#lname").value;
    const email = $08aa96ce9be7b320$var$registerForm.querySelector("#email").value;
    const password = $08aa96ce9be7b320$var$registerForm.querySelector("#password").value;
    (0, $198a7b8d9e9045b8$export$16015adca85344a)({
        fname: fname,
        lname: lname,
        email: email,
        password: password
    });
});


