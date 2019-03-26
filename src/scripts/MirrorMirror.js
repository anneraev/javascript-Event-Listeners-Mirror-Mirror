//const variables containing the elements in which to update text content.
const mirror1 = document.querySelector("#mirror1")
const mirror2 = document.querySelector("#mirror2")

//listens for when a key is released.
document.querySelector("#message").addEventListener("keyup", function() {
    console.log('keyup: %s', this.value);
    mirror1.textContent = this.value;
    mirror2.textContent = mirror1.textContent;
})