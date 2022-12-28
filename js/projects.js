function onHoverImgInvert(id, hovering, originalImage, invertedImage) {
    let image = document.getElementById(id);
    if (hovering == true) {
        image.src = invertedImage
    } if (hovering == false) {
        image.src = originalImage
    }
}