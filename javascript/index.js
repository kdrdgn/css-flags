var country = document.getElementById('country');

country.addEventListener('change', function(e) {
    document.body.className = e.target.value.slice(-2);
});