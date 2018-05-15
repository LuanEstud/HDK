function trocaBody(id){
  if($('#' + id).hasClass('bodyHide')){
    $('#' + id).siblings('.bodyShow').removeClass('bodyShow').addClass('bodyHide').hide(function(){
      $('#' + id).show().addClass('bodyShow').removeClass('bodyHide');
    });
  }
}

function logar(id){
    $('#' + id).fadeOut(1000) 
}

function sair(id){
  $('#' + id).show() 
}