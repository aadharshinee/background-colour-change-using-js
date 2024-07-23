// const colors = ['White','Green','Blue','Yellow','Purple'];
// let i = 0;
// function change()
// {
//     i=(i+1)%colors.length;
//     const newcolor = colors[i];
//     document.body.style.backgroundColor = newcolor.toLowerCase();
//     document.getElementById('colorName').textContent = newcolor;
//     document.getElementById('colorText').style.backgroundColor = newcolor.toLowerCase();
//     document.getElementById('colorText').style.color = (newcolor === 'Yellow' || newcolor === 'White')? 'black' : 'White';
// }

const colors = ['White','Pink','Yellow','Purple','Black'];
let i = 0;
function change()
{
    i=(i+1)%colors.length;
    const newcolor = colors[i];
    document.body.style.backgroundColor = newcolor.toLowerCase();
    document.getElementById('colorName').textContent = newcolor;
    document.getElementById('colorText').style.backgroundColor = newcolor.toLowerCase();
    document.getElementById('colorText').style.color = (newcolor === 'Purple' || newcolor === 'White')? 'black' : 'White';
}

