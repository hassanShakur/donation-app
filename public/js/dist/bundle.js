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
};



const $2fb017ef3cb54f80$export$882c490fde6b3ea = async (name, image, description)=>{
    console.log({
        name: name,
        image: image,
        description: description
    });
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
                location.assign("/home");
            }, 1500);
        } else (0, $fc9f18cd978afa5b$export$de026b00723010c1)("error", data.message);
    } catch (err) {
        (0, $fc9f18cd978afa5b$export$de026b00723010c1)("error", "Something went wrong!");
        console.log(`An error occurred: ${err.message}`);
    }
};



const $85b79853e985f86c$export$34c6178bfd248df3 = async (name, image, description)=>{
    console.log(name, image, description);
    const res = await fetch("/api/organizations", {
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
            location.assign("/organizations");
        }, 1500);
    } else {
        console.log({
            data: data
        });
        (0, $fc9f18cd978afa5b$export$de026b00723010c1)("error", data.message);
    }
};



const $965e86465f1e5898$export$5897fc3de1629af3 = async (organizationId, donationId)=>{
    try {
        const res = await fetch(`/api/donations/${donationId}/assignDonation`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                organizationId: organizationId
            })
        });
        const data = await res.json();
        console.log(data);
        if (data.status === "success") {
            (0, $fc9f18cd978afa5b$export$de026b00723010c1)("success", data.message);
            window.setTimeout(()=>{
                location.reload(true);
            }, 1500);
        } else (0, $fc9f18cd978afa5b$export$de026b00723010c1)("error", data.message);
    } catch (err) {
        (0, $fc9f18cd978afa5b$export$de026b00723010c1)("error", "Something went wrong!");
        console.log(`An error occurred: ${err.message}`);
    }
};


const $1cd085a7ac742057$var$loginForm = document.querySelector("#login-form");
const $1cd085a7ac742057$var$registerForm = document.querySelector("#register-form");
const $1cd085a7ac742057$var$donateForm = document.querySelector("#donation-form");
const $1cd085a7ac742057$var$createOrganizationForm = document.querySelector("#organization-form");
const $1cd085a7ac742057$var$assignDonationForm = document.querySelector("#assign-donation-form");
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
console.log({
    donateForm: $1cd085a7ac742057$var$donateForm
});
$1cd085a7ac742057$var$donateForm?.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = $1cd085a7ac742057$var$donateForm.querySelector("#donation-name").value;
    const image = $1cd085a7ac742057$var$donateForm.querySelector("#donation-image").value;
    const description = $1cd085a7ac742057$var$donateForm.querySelector("#donation-description").value;
    (0, $2fb017ef3cb54f80$export$882c490fde6b3ea)(name, image, description);
});
$1cd085a7ac742057$var$createOrganizationForm?.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = $1cd085a7ac742057$var$createOrganizationForm.querySelector("#name").value;
    const image = $1cd085a7ac742057$var$createOrganizationForm.querySelector("#image").value;
    const description = $1cd085a7ac742057$var$createOrganizationForm.querySelector("#description").value;
    (0, $85b79853e985f86c$export$34c6178bfd248df3)(name, image, description);
});
$1cd085a7ac742057$var$assignDonationForm?.addEventListener("submit", (e)=>{
    e.preventDefault();
    const organizationId = $1cd085a7ac742057$var$assignDonationForm.querySelector("#organization").value;
    const donationId = $1cd085a7ac742057$var$assignDonationForm.querySelector("#donation-id").value;
    (0, $965e86465f1e5898$export$5897fc3de1629af3)(organizationId, donationId);
});
$1cd085a7ac742057$var$logoutBtn?.addEventListener("click", (0, $e33d9ff231aec008$export$e8df664d4863167e));


//# sourceMappingURL=bundle.js.map
