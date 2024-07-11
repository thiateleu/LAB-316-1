///////////////// Part 1: Getting Started
//step 1
const mainEl = document.querySelector("main");
console.log(mainEl);
//step 2
mainEl.style.backgroundColor = "var(--main-bg)";
//let backGroundColor = 'var(--main-bg)'
//step 3
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
//step 4
mainEl.classList = "flex-ctr";

////////////////// Part 2: Creating a Menu Bar
//step 1
const topmenuEl = document.getElementById("top-menu");
console.log(topmenuEl);
// step 2
topmenuEl.style.height = "100%";
// step 3
topmenuEl.style.backgroundColor = "var(--top-menu-bg)";
//step 4
topmenuEl.classList = "flex-around";

////////////// Part 3: Adding Menu Buttons
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// 1 - Iterate over the entire menuLinks array and for each "link" object:
// 2 - Create an <a> element.
// 3 - On the new element, add an href attribute with its value set to the href property of the "link" object.
// 4 - Set the new element's content to the value of the text property of the "link" object.
// 5 - Append the new element to the topMenuEl element.
menuLinks.forEach(function (link) {
  let linkEl = document.createElement("a");
  linkEl.setAttribute("href", link.href);
  linkEl.textContent = link.text;
  topmenuEl.appendChild(linkEl);
});

///////////////// Creating the Submenu

const subMenuEl = document.getElementById("sub-menu");
console.log(subMenuEl);
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList = "flex-around";
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";
