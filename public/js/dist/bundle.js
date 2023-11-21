const $fc9f18cd978afa5b$export$de026b00723010c1 = (type, msg)=>{
    $fc9f18cd978afa5b$export$516836c6a9dfc573();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
    window.setTimeout($fc9f18cd978afa5b$export$516836c6a9dfc573, 5000);
};
const $fc9f18cd978afa5b$export$516836c6a9dfc573 = ()=>{
    const el = document.querySelector(".alert");
    if (el) el.parentElement.removeChild(el);
};


const $e33d9ff231aec008$export$692b4a7cc7a486ce = async (email, password)=>{
    try {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        console.log(data);
        if (data.status === "success") {
            (0, $fc9f18cd978afa5b$export$de026b00723010c1)("success", "Logged in successfully!");
            window.setTimeout(()=>{
                data.user.role === "admin" ? location.assign("/dashboard") : location.assign("/");
            }, 1500);
        } else (0, $fc9f18cd978afa5b$export$de026b00723010c1)("error", data.message);
    } catch (err) {
        console.log(`An error occurred: ${err.message}`);
    }
};


const $063fc4c5866f54d6$export$16015adca85344a = async ({ fname: fname, lname: lname, email: email, password: password })=>{
    try {
        const res = await fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify({
                fname: fname,
                lname: lname,
                email: email,
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        console.log(data);
        if (data.status === "success") data.user.role === "admin" ? location.assign("/dashboard") : location.assign("/home");
        else throw new Error(data.message);
    } catch (err) {
        console.log(`An error occurred: ${err.message}`);
    }
};


const $1cd085a7ac742057$var$loginForm = document.querySelector("#login-form");
const $1cd085a7ac742057$var$registerForm = document.querySelector("#register-form");
$1cd085a7ac742057$var$loginForm?.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = $1cd085a7ac742057$var$loginForm.querySelector("#email").value;
    const password = $1cd085a7ac742057$var$loginForm.querySelector("#password").value;
    (0, $e33d9ff231aec008$export$692b4a7cc7a486ce)(email, password);
});
$1cd085a7ac742057$var$registerForm?.addEventListener("submit", (e)=>{
    e.preventDefault();
    const fname = $1cd085a7ac742057$var$registerForm.querySelector("#fname").value;
    const lname = $1cd085a7ac742057$var$registerForm.querySelector("#lname").value;
    const email = $1cd085a7ac742057$var$registerForm.querySelector("#email").value;
    const password = $1cd085a7ac742057$var$registerForm.querySelector("#password").value;
    (0, $063fc4c5866f54d6$export$16015adca85344a)({
        fname: fname,
        lname: lname,
        email: email,
        password: password
    });
});


//# sourceMappingURL=bundle.js.map
