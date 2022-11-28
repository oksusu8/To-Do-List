$(function(){
    $('#add_btn').click(function(){ // 할 일 추가 버튼 
        let outputTask = $('#input_task').val(); //input_task에 입력한 내용을 outputTask라고 가정
        console.log(outputTask); 

        // 구조 추가 (li, p, 삭제button, 체크박스 추가)
        let list = $('<li class="list"></li>');
        list.html('<p>'+outputTask+'</p>');
        $(list).append("<button class='delete_btn'>X</button>");
        $(list).append("<input class='checkbox' type='checkbox'>")
        $('.todolist').append(list);

        //입력 후 할 일 입력창을 비워주는 역할
        $("input").val(""); 

        // 삭제 버튼 동작
        $('.delete_btn').on("click", function(){ 
            $(this).parent().remove();
        });

        // 체크박스 체크 여부에 따른 동작
        $('input:checkbox').on('click', function(){
            if ($(this).prop('checked')){
                $(this).parent().addClass('selected');
            }
            else {
                $(this).parent().removeClass('selected');
            }
        });     
        
    }); 
    // 추가 버튼을 누르지 않아도 enter키로도 작동
    $("input").keypress(function(e){
        if(e.keyCode == 13){
            $('#add_btn').click();
        }
    });

});