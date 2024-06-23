


window.addEventListener('load', function () {

    function getValue() {
        let inp = document.getElementById('inp-test');
        inp.addEventListener('input', (event) => {
            value = event.target.value;
            if (value !== '') sendValue(value);
        })
    }
    getValue();

    function sendValue(value) {
        let url = 'http://localhost/traning/try-mprove-act/index.php';



        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        })
            .then((response) => {
                if (response.status !== 200) {
                    return console.log(response.statusText);;
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })

    }



})