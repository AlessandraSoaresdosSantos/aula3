function somar(a,b)
{
    return a + b;
}

function somarArray(elementosArray)
{
    let total = 0;

    elementosArray.forEach(e => {
        total += e;
    });
    return total;
}