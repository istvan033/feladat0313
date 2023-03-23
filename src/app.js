const betetInput = document.querySelector('#betet');
const nkamatInput = document.querySelector('#nkamat');
const tokesitesInput = document.querySelector('#tokesites');
const calcButton = document.querySelector('#calcButton');
const Tkamat = document.querySelector('#tkamat');

calcButton.addEventListener('click', () => {
    console.log("tkamat")
    const betet = Number(betetInput.value);
    const nkamat = Number(nkamatInput.value);
    const tokesites =Number(tokesitesInput.value);
    let tkamat =calcTkamat(betet ,nkamat, tokesites);
    Tkamat.value=tkamat;
    result.style.display='block';
    deleteInputs();
});

function calcTkamat(betet,nkamat,tokesites){
//let tkamat = ((1 + nkamat / (100 * tokesites)) ^ (tokesites  )-1)*betet;
return ((1 + nkamat / (100 * tokesites)) ^ (tokesites  )-1)*betet

}

function deleteInputs(){
    betetInput.value='';
    nkamatInput.value='';
    tokesitesInput.value='';
    
}