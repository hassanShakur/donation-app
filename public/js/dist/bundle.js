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
            (0, $fc9f18cd978afa5b$export$de026b00723010c1)("success", data.message);
            window.setTimeout(()=>{
                location.assign("/home");
            }, 1500);
        } else (0, $fc9f18cd978afa5b$export$de026b00723010c1)("error", data.message);
    } catch (err) {
        (0, $fc9f18cd978afa5b$export$de026b00723010c1)("error", "Something went wrong!");
        console.log(`An error occurred: ${err.message}`);
    }
};
const $e33d9ff231aec008$export$e8df664d4863167e = async ()=>{
    try {
        const res = await fetch("/api/auth/logout");
        const data = await res.json();
        console.log(data);
        if (data.status === "success") location.reload(true);
    } catch (err) {
        (0, $fc9f18cd978afa5b$export$de026b00723010c1)("error", "Something went wrong!");
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
        if (data.status === "success") {
            (0, $fc9f18cd978afa5b$export$de026b00723010c1)("success", data.message);
            window.setTimeout(()=>{
                location.assign("/home");
            }, 1500);
        } else (0, $fc9f18cd978afa5b$export$de026b00723010c1)("error", data.message);
    } catch (err) {
        (0, $fc9f18cd978afa5b$export$de026b00723010c1)("error", "Something went wrong!");
        console.log(`An error occurred: ${err.message}`);
    }
};



const $2fb017ef3cb54f80$export$882c490fde6b3ea = async (name, image, description)=>{
    try {
        const res = await fetch("/api/donations", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                image: image,
                description: description
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        console.log(data);
        if (data.status === "success") {
            (0, $fc9f18cd978afa5b$export$de026b00723010c1)("success", data.message);
            window.setTimeout(()=>{
                location.assign("/");
            }, 1500);
        } else (0, $fc9f18cd978afa5b$export$de026b00723010c1)("error", data.message);
    } catch (err) {
        (0, $fc9f18cd978afa5b$export$de026b00723010c1)("error", "Something went wrong!");
        console.log(`An error occurred: ${err.message}`);
    }
};


const $1cd085a7ac742057$var$loginForm = document.querySelector("#login-form");
const $1cd085a7ac742057$var$registerForm = document.querySelector("#register-form");
const $1cd085a7ac742057$var$donateForm = document.querySelector("#donate-form");
const $1cd085a7ac742057$var$logoutBtn = document.querySelector("#logout-btn");
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
$1cd085a7ac742057$var$donateForm?.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = $1cd085a7ac742057$var$donateForm.querySelector("#donation-name").value;
    const image = $1cd085a7ac742057$var$donateForm.querySelector("#donation-image").value;
    const description = $1cd085a7ac742057$var$donateForm.querySelector("#donation-description").value;
    (0, $2fb017ef3cb54f80$export$882c490fde6b3ea)(name, image, description);
});
$1cd085a7ac742057$var$logoutBtn?.addEventListener("click", (0, $e33d9ff231aec008$export$e8df664d4863167e));


//# sourceMappingURL=bundle.js.map
