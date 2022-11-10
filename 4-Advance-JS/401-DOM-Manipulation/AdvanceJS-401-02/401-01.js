var containerref = document.getElementsByClassName('container');
for(var idx=0;idx<containerref.length;idx++){

    if(idx==0){
        containerref[idx].style.backgroundColor="blue"
    }
    else if(idx==8){
        containerref[idx].style.backgroundColor="green"
    }
    else if(idx==16){
        containerref[idx].style.backgroundColor="palevioletred"

    }
    else if (idx%2==0){
        containerref[idx].style.backgroundColor="lime"


    }
    else{
        containerref[idx].style.backgroundColor="white"
    }

}