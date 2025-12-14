
$(document).ready(function() {
    // 2. Получите все текстовые поля с классом .class1 и поставьте им синий цвет текста.
    let isColored = false;
    $('#changeColorBtn').click(function() {
        if (!isColored) {
            $('.class1').css('color', 'aliceblue');
            isColored = true; }
        else {
            $('.class1').css('color', '');
            isColored = false; }
    });

    // 3. Получите последний пункт маркированного списка с классом .class2 и увеличьте его шрифт.
    let isEnlarged = false;
    $('#changeSizeBtn').click(function() {
        const lastItem = $('ul.class2 li').last();
        if (!isEnlarged) {
            lastItem.css('font-size', '1.5em');
            isEnlarged = true;
        } else {
            lastItem.css('font-size', '');
            isEnlarged = false;
        }
    });

    // 4. Получите элемент с id, равным id1 и поменяйте текст. 
    let isTextChanged = false;
    const originalText = $('#id1').text();
    $('#changeTextBtn').click(function() {
        const element = $('#id1');
        if (!isTextChanged) {
            element.text('☆*: .｡. Измененный текст после выполнения четвертого пункта .｡.:*☆');
            isTextChanged = true; }
        else {
            element.text(originalText);
            isTextChanged = false; }
    });

    // Функционал стены комментариев
    $('#addComment').on('click', function() {
        const commentText = $('#commentInput').val().trim();
        if (commentText !== "") {
            const commentDiv = $('<div></div>').addClass('comment').text(commentText);
            $('#wall').append(commentDiv);
            $('#commentInput').val('');
            $('#wall').scrollTop($('#wall')[0].scrollHeight);
        } else {
            alert("Пожалуйста, введите комментарий.");
        }
    });

    // Кнопка, меняющая цвет заголовка страницы на случайный цвет
    $('#colorBtn').click(function() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        $('#pageTitle').css('color', randomColor);
    });
});
