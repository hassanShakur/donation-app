const $c67cb762f0198593$export$de026b00723010c1 = (type, msg)=>{
    $c67cb762f0198593$export$516836c6a9dfc573();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
    window.setTimeout($c67cb762f0198593$export$516836c6a9dfc573, 5000);
};
const $c67cb762f0198593$export$516836c6a9dfc573 = ()=>{
    const el = document.querySelector(".alert");
    if (el) el.parentElement.removeChild(el);
};


const $70af9284e599e604$export$692b4a7cc7a486ce = async (email, password)=>{
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
            (0, $c67cb762f0198593$export$de026b00723010c1)("success", data.message);
            window.setTimeout(()=>{
                data.user.role === "admin" ? location.assign("/dashboard") : location.assign("/");
            }, 1500);
        } else (0, $c67cb762f0198593$export$de026b00723010c1)("error", data.message);
    } catch (err) {
        (0, $c67cb762f0198593$export$de026b00723010c1)("error", "Something went wrong!");
        console.log(`An error occurred: ${err.message}`);
    }
};
const $70af9284e599e604$export$e8df664d4863167e = async ()=>{
    try {
        const res = await fetch("/api/auth/logout");
        const data = await res.json();
        console.log(data);
        if (data.status === "success") location.reload(true);
    } catch (err) {
        (0, $c67cb762f0198593$export$de026b00723010c1)("error", "Something went wrong!");
        console.log(`An error occurred: ${err.message}`);
    }
};



const $ac7ca8669a3fb450$export$16015adca85344a = async ({ fname: fname, lname: lname, email: email, password: password })=>{
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
            (0, $c67cb762f0198593$export$de026b00723010c1)("success", data.message);
            window.setTimeout(()=>{
                data.user.role === "admin" ? location.assign("/dashboard") : location.assign("/");
            }, 1500);
        } else (0, $c67cb762f0198593$export$de026b00723010c1)("error", data.message);
    } catch (err) {
        (0, $c67cb762f0198593$export$de026b00723010c1)("error", "Something went wrong!");
        console.log(`An error occurred: ${err.message}`);
    }
};



const $9364e95f3e432484$export$882c490fde6b3ea = async (name, image, description)=>{
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
            (0, $c67cb762f0198593$export$de026b00723010c1)("success", data.message);
            window.setTimeout(()=>{
                location.assign("/");
            }, 1500);
        } else (0, $c67cb762f0198593$export$de026b00723010c1)("error", data.message);
    } catch (err) {
        (0, $c67cb762f0198593$export$de026b00723010c1)("error", "Something went wrong!");
        console.log(`An error occurred: ${err.message}`);
    }
};


const $d0f7ce18c37ad6f6$var$loginForm = document.querySelector("#login-form");
const $d0f7ce18c37ad6f6$var$registerForm = document.querySelector("#register-form");
const $d0f7ce18c37ad6f6$var$donateForm = document.querySelector("#donate-form");
const $d0f7ce18c37ad6f6$var$logoutBtn = document.querySelector("#logout-btn");
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
$d0f7ce18c37ad6f6$var$donateForm?.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = $d0f7ce18c37ad6f6$var$donateForm.querySelector("#donation-name").value;
    const image = $d0f7ce18c37ad6f6$var$donateForm.querySelector("#donation-image").value;
    const description = $d0f7ce18c37ad6f6$var$donateForm.querySelector("#donation-description").value;
    (0, $9364e95f3e432484$export$882c490fde6b3ea)(name, image, description);
});
$d0f7ce18c37ad6f6$var$logoutBtn?.addEventListener("click", (0, $70af9284e599e604$export$e8df664d4863167e));


//# sourceMappingURL=main.js.map
