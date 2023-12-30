document.addEventListener("DOMContentLoaded", function() {
    let galleryImages = document.querySelectorAll('.truck-block__galleryBlockImage')
    galleryImages.forEach(function (image) {
        image.addEventListener('click', function () {
            handleImageClick(image)
        })
    })

    function handleImageClick(clickedImage) {
        let newImageSrc = clickedImage.getAttribute('data-gallery-image-src')
        let bigImageBlock = clickedImage.closest('.truck-block__wrap-gallery').querySelector('.truck-block__blockBigImage img')
        bigImageBlock.src = newImageSrc

        if (bigImageBlock.closest("a")) {
            bigImageBlock.closest("a").href = newImageSrc
        }
    }
})