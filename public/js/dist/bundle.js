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


console.log("Hello from index.js!");


//# sourceMappingURL=bundle.js.map
