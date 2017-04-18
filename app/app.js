$.ajax({
    type: "GET",
    url: "http://jsonplaceholder.typicode.com/posts",
    data: {limit: 20},
    dataType: "json",
    success: function (data) {
        var limitedPosts = data.splice(0, 20);
        limitedPosts.forEach(function (item) {
            addSinglePost(item);
        });
        $(".post-btn").click(function () {
            var postId = $(this).attr("post-id");
            console.log(postId);
            getSinglePost(postId);
        });

    },
    error: function (err) {
        console.log("Nie ma nic...")
    }
});


function getSinglePost(id) {
    $.ajax({
        type: "GET",
        url: "http://jsonplaceholder.typicode.com/posts/" + id,
        data: {limit: 20},
        dataType: "json",
        success: function (data) {
            console.log(data);
            addModal(data);
        },
        error: function (err) {
            console.log("Nie ma nic...")
        }
    });
}


function addSinglePost(item) {

    var post = $('<div class="col-md-6 col-sm-12 single-post">' +
        '<div class="single-post__wrapper">' +
        '<h4 class="post-title">' + item.title + '</h4>' +
        '<p class="post-text">' + item.body + '</p>' +
        '<button post-id="' + item.id + '" type="button" class="btn btn-info btn-lg post-btn"' +
        'data-toggle="modal" data-target="#myModal">Zobacz więcej</button>' +
        '</div>'
    );

    $('.post-list__wrapper').append(post);
}


function addModal(item) {
    var modal = $('<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
        '<h4 class="modal-title post-title">' + item.id + ' &#9679; ' + item.title + '</h4>' +
        '</div>' +
        '<div class="modal-body post-text">' +
        '<p>' + item.body + '</p>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-default close-btn" data-dismiss="modal">Zamknij</button>' +
        '</div>' +
        '</div>' +
        '</div>'
    );

    $("#myModal").html(modal);

}

//Moja pierwsza wersja, ktora niestety nie dziala pod IE, dlatego musialam zmienic

//function addSinglePost(item) {
//
//    var post = $(`<div class="col-md-6 col-sm-12 single-post">
//        <div class="single-post__wrapper">
//        <h4 class="post-title">${item.title}</h4>
//        <p class="post-text">${item.body}</p>
//        <button post-id="${item.id}" type="button" class="btn btn-info btn-lg post-btn"
//        data-toggle="modal" data-target="#myModal">Zobacz więcej</button>
//        </div>`
//    );
//
//    $('.post-list__wrapper').append(post);
//}
//
//
//function addModal(item) {
//    var modal = $(`<div class="modal-dialog">
//        <div class="modal-content">
//        <div class="modal-header">
//        <button type="button" class="close" data-dismiss="modal">&times;</button>
//        <h4 class="modal-title post-title">${item.id}  &#9679; ${item.title}</h4>
//        </div>
//        <div class="modal-body post-text">
//        <p>${item.body}</p>
//        </div>
//        <div class="modal-footer">
//        <button type="button" class="btn btn-default close-btn" data-dismiss="modal">Zamknij</button>
//        </div>
//        </div>
//        </div>`
//    );
//
//    $("#myModal").html(modal);
//
//}