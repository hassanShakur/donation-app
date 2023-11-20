var $jqtH7$axios = require("axios");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

const $70af9284e599e604$export$692b4a7cc7a486ce = async (email, password)=>{
    try {
        const res = await (0, ($parcel$interopDefault($jqtH7$axios)))({
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



const $ac7ca8669a3fb450$export$16015adca85344a = async ({ fname: fname, lname: lname, email: email, password: password })=>{
    try {
        const res = await (0, ($parcel$interopDefault($jqtH7$axios)))({
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


const $d0f7ce18c37ad6f6$var$loginForm = document.querySelector("#login-form");
const $d0f7ce18c37ad6f6$var$registerForm = document.querySelector("#register-form");
$d0f7ce18c37ad6f6$var$loginForm?.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = $d0f7ce18c37ad6f6$var$loginForm.querySelector("#email").value;
    const password = $d0f7ce18c37ad6f6$var$loginForm.querySelector("#password").value;
    (0, $70af9284e599e604$export$692b4a7cc7a486ce)(email, password);
});
$d0f7ce18c37ad6f6$var$registerForm?.addEventListener("submit", (e)=>{
    e.preventDefault();
    const fname = $d0f7ce18c37ad6f6$var$registerForm.querySelector("#fname").value;
    const lname = $d0f7ce18c37ad6f6$var$registerForm.querySelector("#lname").value;
    const email = $d0f7ce18c37ad6f6$var$registerForm.querySelector("#email").value;
    const password = $d0f7ce18c37ad6f6$var$registerForm.querySelector("#password").value;
    (0, $ac7ca8669a3fb450$export$16015adca85344a)({
        fname: fname,
        lname: lname,
        email: email,
        password: password
    });
});


//# sourceMappingURL=bundle.js.map
