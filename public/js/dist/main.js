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


console.log("Hello from index.js!");


//# sourceMappingURL=main.js.map
