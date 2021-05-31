$(document).ready(function() {
    console.log('Script linked to web page correctly');

    // object to contain images and their alt text
    let cache = [];

    $('img.color').each(function() {
        cache.push({
            element: this,
            text: this.alt
        })
    })
    console.log(cache);
});