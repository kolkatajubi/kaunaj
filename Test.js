$(document).ready(function(){
    if (localStorage.chkbox != ''){

        $('#Remchkbox').attr('checked');
        $('#loginId').val(localStorage.uname);
        $('#loginPwd').val(localStorage.pwd);
    }

$('#Remchkbox').click(function(){
    localStorage.uname = $('#loginId').val();
    localStorage.pwd = $('#loginPwd').val();
    localStorage.chkbox = $('#Remchkbox').val();
});
});