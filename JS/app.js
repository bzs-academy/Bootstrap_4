
$(document).ready(function(){ 
    // Dynamic nav tabs show/fade jquery codes
    $("#myTab a").click(function(e){
        e.preventDefault();
        $(this).tab('show');
    });

    
    $("#myModal").on('hidden.bs.modal', function(){
        alert("Please login again!!!");
    });


    // Modal Toast message jquery codes
    $(".show-toast").click(function(){
        $("#myToast").toast('show');
    });

    // Tooltip jquery codes
    $("#myTooltip").tooltip({
        title: "<h4><img src='./Assets/tongue_out.png' alt='Alper' width='30px' height='30px'> You win, <b>€1000</b> <i>BONUS!</i></h4>",     
        html: true,
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    /* PROGRESS BAR INSIDE THE MODAL FORM */
    $(".btnprog").click(function(){
        var i = 0;
        function makeProgress(){
            if(i < 100){
                i = i + 1;
                $(".progress-bar2").css("width", i + "%").text(i + " %");
            } else {
                alert("You missed the chance!!!");
                clearTimeout(myset);
            }
            // Wait for sometime before running this script again
            // 1000 ms = 1 second
            let myset = setTimeout(function () {makeProgress()}, 100);
        }
        makeProgress();
    });
    

});