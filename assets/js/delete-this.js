/*
This is written in jQuery. Obviously a bad idea. It is just to give some insights on how to implement the logic
in react. HAVE FUN!!
And if you name is Andra, you are a very stubborn girl.
*/

//Just add the 'bookmarked' class to the bookmark component or any of its parent component, 
//then implement your logic afterwards
function bookmark(target, articleId){
    $(target).toggleClass('bookmarked');
    //Implemet your logic 
}

// This should be done with yeye react
function follow(target, authorId){
    const isFollowing = $(target).hasClass('following');
    $(target).toggleClass('following').text( isFollowing? 'Follow': 'Following');
    //Implement your logic
}

// This should be done with yeye react
function changeView(grid){
    if(grid){
        $('.view-row').removeClass('list-view');
    }
    else{
        $('.view-row').addClass('list-view')
    }
}