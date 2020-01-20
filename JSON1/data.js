var xhr = new XMLHttpRequest();    // Create XMLHttpRequest object

xhr.onload = function(){                    //when ready state changes
    responseObject = JSON.parse(xhr.responseText);
    var newContent = '';
    for(var i=0;i<responseObject.events.length;i++){  //loop through object 6
        newContent +='<div class="event">';
        newContent +='<img src"' +responseObject.events[i].map +'"';
        newContent +='alt="' + responseObject.events[i].location +'" />';
        newContent += '<p><b>' +responseObject.events[i].location +'<br><br>';
        newContent +=responseObject.events[i].date +'<p>';
        newContent +='</div>';
       
    }
    //update the page with the new content
    document.getElementById('content').innerHTML = newContent;
    //}
};
xhr.open('GET', 'data.json',true);    //prepare the request 2
xhr.send(null);                      //send the request 3
