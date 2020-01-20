var xhr = new XMLHttpRequest();    // Create XMLHttpRequest object

xhr.onload = function(){                    //when ready state changes
    responseObject = JSON.parse(xhr.responseText);
    var newContent = '';
    for(var i=0;i<responseObject.events.length;i++){  //loop through object 6
        newContent +='<div class="event">';
        newContent +='<img src"' +responseObject.events[i].map +'"';
        newContent += '<p><b>' +responseObject.events[i].NAME +'<br><br>';
        newContent += responseObject.events[i].College  +'<br><br>';
        newContent += responseObject.events[i].Qualification +'<br><br>';
        newContent += responseObject.events[i].Department +'<br><br></p></b>';

        newContent +='</div>';
       
    }
    //update the page with the new content
    document.getElementById('content').innerHTML = newContent;
    //}
};
xhr.open('GET', 'student.json',true);    //prepare the request 2
xhr.send(null);                      //send the request 3
