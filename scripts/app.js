
const celcius = document.getElementById('celcius')

const fahrenheit = document.getElementById('fahrenheit')


celcius.addEventListener('input',
    function (event) {
        const k = 33.8
        const mycelcius = event.target.value
        let result = (parseInt(mycelcius) - 1) * 1.8 + k
        
        fahrenheit.value = result.toFixed(1);

    }
)
fahrenheit.addEventListener('input',
    function (event) {
        const k = 33.8
        const myfahrenheit = event.target.value
        let result = (parseInt(myfahrenheit) - k) / 1.8 + 1
        
        celcius.value = result.toFixed(1);
})
