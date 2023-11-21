import $3ujnu$axios from "axios";


const $a216a14235bf272a$export$692b4a7cc7a486ce = async (email, password)=>{
    try {
        const res = await (0, $3ujnu$axios)({
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



const $48562ed6454d45ae$export$16015adca85344a = async ({ fname: fname, lname: lname, email: email, password: password })=>{
    try {
        const res = await (0, $3ujnu$axios)({
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


const $b6e713abe599629a$var$loginForm = document.querySelector("#login-form");
const $b6e713abe599629a$var$registerForm = document.querySelector("#register-form");
$b6e713abe599629a$var$loginForm?.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = $b6e713abe599629a$var$loginForm.querySelector("#email").value;
    const password = $b6e713abe599629a$var$loginForm.querySelector("#password").value;
    (0, $a216a14235bf272a$export$692b4a7cc7a486ce)(email, password);
});
$b6e713abe599629a$var$registerForm?.addEventListener("submit", (e)=>{
    e.preventDefault();
    const fname = $b6e713abe599629a$var$registerForm.querySelector("#fname").value;
    const lname = $b6e713abe599629a$var$registerForm.querySelector("#lname").value;
    const email = $b6e713abe599629a$var$registerForm.querySelector("#email").value;
    const password = $b6e713abe599629a$var$registerForm.querySelector("#password").value;
    (0, $48562ed6454d45ae$export$16015adca85344a)({
        fname: fname,
        lname: lname,
        email: email,
        password: password
    });
});


