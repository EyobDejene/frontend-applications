// new Glide('.glide').mount();



// new Glide('.glide', {
//     type: 'slider',
//     startAt: 0,
//     perView: 3,
//     rewind: false,
//     keyboard:false
// }).mount();




// search on keyname in object array
function search(nameKey, array){
    let newArray = [];
    for (var i=0; i < array.length; i++) {

        if (array[i].category === nameKey) {
            // console.log( array[i].category);
            newArray.push(array[i]);
        }
    }
    console.log(newArray);
    // set localstorage with new array
    localStorage.setItem('museum_objects_filterd', JSON.stringify(newArray));
    // location.reload();
    return newArray;

}

// check filter value and run search function
function val() {
    let array = JSON.parse(localStorage.getItem('museum_objects'));
    let filterValue = document.getElementById("filter").value;

    if(filterValue != "default") {
        search(filterValue, array);

        let arrayFilterd = JSON.parse(localStorage.getItem('museum_objects_filterd'));
        let filter = document.getElementById("filter");

        console.log(filterValue);

        filter.classList.add("active");

        if (filter.classList.contains("active")) {
            // console.log('active');
            // loop trough all elements and remove show class
            for (let interger = 0; interger < array.length; interger++) {
                document.querySelector("[data-id='" + array[interger].id + "']").classList.remove("show");
            }

            // loop trough all filtered objects and addd show class
            for (var i = 0; i < arrayFilterd.length; i++) {
                // console.log(arrayFilterd[i].id);
                document.querySelector("[data-id='" + arrayFilterd[i].id + "']").classList.add("show");
                //console.log(document.querySelectorAll("[data-id='"+arrayFilterd[i].id+"']").classList);
            }
        }

        // loop through elements in dom and if the element contains a show class remove the class and add hide class
        let objectsItems = document.getElementsByClassName("objectItem");
        for (let counter = 0; counter < objectsItems.length; counter++) {
            console.log(objectsItems[counter].classList);
            console.log(objectsItems[i].classList.contains('show'));
            if (!objectsItems[counter].classList.contains('show')) {
                objectsItems[counter].classList.remove("show");
                objectsItems[counter].classList.add("hide");
            }
        }

       // console.log(filterValue)
        setSelectedIndex(filter, filterValue);
    }else{
        resetToVisible();
    }


}




function resetToVisible(){
    console.log('reset');
    let filter = document.getElementById("filter");
    let objectsItems = document.getElementsByClassName("objectItem");
    for (let counter = 0; counter < objectsItems.length; counter++) {
        //console.log(x[i].classList);
        //console.log(x[i].classList.contains('show'));
        if(objectsItems){
            objectsItems[counter].classList.add("show");
            objectsItems[counter].classList.remove("hide");
        }
    }
    filter.classList.remove("active");
    setSelectedIndex(filter,"default");
}



function setSelectedIndex(s, v) {

    for ( var i = 0; i < s.options.length; i++ ) {

        if ( s.options[i].value == v ) {
            s.options[i].selected = true;
            return;

        }

    }

}



