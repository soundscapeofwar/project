$(function(){
        $('.musical-container img').hover(
            function() { 
                $(this).prev()[0].play()
            },
            function() { 
                $(this).prev()[0].pause()
            }
        )
    })
