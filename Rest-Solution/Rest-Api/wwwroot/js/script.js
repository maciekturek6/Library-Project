
$(document).ready(function () {

    var bookTemplate = $("#book-template");
    var bookList = $("#book-list");

    $.ajax({
        url: "http://localhost:52358/api/books",
        data: {
        },
        type: "GET",
        dataType: "json",
        success: function (data, textStatus, xhr) {

            for (var i = 0; i < data.length; i++) {

                addBookToList(data[i]);
                var z = data[i].Title;

            }

            function addBookToList(bookData) {

                var newBook = bookTemplate.clone();
                newBook.removeAttr('id');
                var temp = newBook.find('.book-author').text(bookData.Author);
                var temp1 = newBook.find('.book-title').text(bookData.Title);
                bookList.append(newBook);
            }
 
            //  console.log(xhr.status);
            // console.log(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
        }

    });

    $.ajax({
        url: "http://localhost:52358/api/books",
        data: {
        },
        type: "GET",
        dataType: "json",
        success: function (data, textStatus, xhr) {

            var buttonAdd = $('#buttonAdd');
            console.log(buttonAdd);

            function addBookToList(bookData) {

                //var newBook = bookTemplate.clone();
                //newBook.removeAttr('id');
                myCollection.data.push({ "name": "Jim", "id": "4" });
                var temp = newBook.find('.book-author').text(bookData.Author);
                var temp1 = newBook.find('.book-title').text(bookData.Title);
                bookList.append(newBook);
            }

            //  console.log(xhr.status);
            // console.log(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
        }

    });

    
});


 /*
    $.ajax({
        url: "http://localhost:52358/api/books",
        data: {
        },
        type: "GET",
        dataType: "json",
        success: function (data, textStatus, xhr) {



            //ajaxem dodanie ksiązki metoda create, lista.find (ktore nie mają id ).remove
            var buttonAdd = $('#buttonAdd');
            console.log(buttonAdd);

            var sekcja = $('.form-control');
            console.log(sekcja);
            var title = $('.book-authorr').val();
         
            var author = $('.book-title').val();
           
            var td = bookTemplate.children();
            console.log(td);
           

            buttonAdd.on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();

                var newElement = $(' <li data-age="' + age + '">' + name + '</li >');

                ul.append(newElement);

            });


        }
    });
    */

/*$(document).ready(function () {

    var booksList = $('#books_list');

    $.ajax({
        url: "http://localhost:52358/api/books/",
        data: {},
        type: "GET",
        dataType: "json"
    }).done(function (result) {

        var booksListRecord = $('#book_tr');

        for (var i = 0; i < result.length; i++) {
            var record = booksListRecord.clone();
            record.removeClass('d-none');
            record.find('.book-title').text(result[i].Title);
            record.find('.book-author').text(result[i].Author);
            record.attr('id', result[i].ID);
            console.log(result[i].ID);
            booksList.append(record);
        }

        //Dodanie funkcjonalnoœci przycisków po wype³nieniu listy
        bookListDeleteButtonEvent(booksList);

    }).fail(function (xhr, status, err) {
        alert("Failed to get books list.");
    });

    function bookListDeleteButtonEvent(bookList) {
        booksList.on('click', 'tr:not(#book_tr) .btn-danger', function () {

            var thisTr = $(this).parent().parent().parent();
            console.log(thisTr.attr("id"));

            $.ajax({
                url: "http://localhost:52358/api/books/" + thisTr.attr("id"),
                type: "DELETE"
            }).done(function () {

                thisTr.remove();
                alert("Book deleted!");

            }).fail(function () {

                alert("Book was not deleted!");

            });
        });
    }
});
*/