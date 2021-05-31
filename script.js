$(document).ready(function() {
    console.log('Script linked to web page correctly');

    // object to contain images and their alt text
    let cache = [];

    // adding alt text and element to the cache array to optimize performance
    $('img.color').each(function() {
        cache.push({
            element: this,
            text: this.alt
        })
    })

    // logging the cache array
    console.log(cache);


});