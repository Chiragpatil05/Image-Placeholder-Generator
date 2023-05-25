const select = document.querySelector('select');
const inputAll = document.querySelectorAll('input');
let myImg = document.querySelector('img');
let textArea = document.querySelector('textarea');
// console.log(textArea) - array/list

let urlObj = {};

const removeHasgtag = (str) =>{
    return str.replace("#","");
}


const addPlus = (str) =>{
     return str.split(" ").join("+")
}

const createImagePath = () => {
    urlObj.size = select.value;
    urlObj.text = addPlus(inputAll[0].value);
    urlObj.bgclr = removeHasgtag(inputAll[1].value);
    urlObj.txtClr = removeHasgtag(inputAll[2].value);

    let urlPath = `http://via.placeholder.com/${urlObj.size}/${urlObj.bgclr}/${urlObj.txtClr}?text=${urlObj.text}`;
    
    myImg.src = urlPath;
    textArea.value = urlPath

    textArea.focus();
    textArea.select();

    navigator.clipboard.writeText(textArea.value)
    .then(() => {
        console.log('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Error copying text: ', err);
    });


}

inputAll.forEach((currElement) => currElement.addEventListener('change',createImagePath));
select.addEventListener('change',createImagePath);