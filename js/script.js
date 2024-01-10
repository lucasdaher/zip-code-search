const btnSearch = document.getElementById('btn-search');

btnSearch.addEventListener("click", async () => {
    const zipcode = document.getElementById('zipcode').value;

    try {
        const response = await fetch(`https://viacep.com.br/ws/${zipcode}/json/`);
        const data = await response.json();

        document.getElementById('city').value = data.localidade;
        document.getElementById('street').value = data.logradouro;
        document.getElementById('neighborhood').value = data.bairro;
    } catch (error) {
        console.log(error.message);
    }
});