function countdown(count, callback) {
    setTimeout(function() {
        console.log(count);
        if (count > 1) {
            countdown(count - 1, callback);
        } else {
            callback();
        }
    }, 1000);
}

countdown(10, function() {
    console.log("Happy Independence Day!");
});