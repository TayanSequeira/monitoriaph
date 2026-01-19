function by_id(id) { return document.getElementById(id); }

const rail = by_id("rail");
const btn_left = by_id("btn_left");
const btn_right = by_id("btn_right");

function scroll_by(px) {
    if (!rail) return;
    rail.scrollBy({ left: px, behavior: "smooth" });
}

if (btn_left) btn_left.addEventListener("click", () => scroll_by(-260));
if (btn_right) btn_right.addEventListener("click", () => scroll_by(260));
