$(document).ready(function(){
  hideProjects();
  $('#codeastra').show();
});

$(document).ready(function(){
  $('#btn-codeastra').click(function() {
    hideProjects();
    removeActive();
    $('#codeastra').show();
    $(this).addClass('active'); 
  });
});

$(document).ready(function(){
  $('#btn-ignite').click(function() {
    hideProjects();
    removeActive();
    $('#ignite').show();
    $(this).addClass('active'); 
  });
});

$(document).ready(function(){
  $('#btn-embrace').click(function() {
    hideProjects();
    removeActive();
    $('#embrace').show();
    $(this).addClass('active'); 
  });
});

$(document).ready(function(){
  $('#btn-jobless').click(function() {
    hideProjects();
    removeActive();
    $('#jobless').show();
    $(this).addClass('active'); 
  });
});

$(document).ready(function(){
  $('#btn-iitm').click(function() {
    hideProjects();
    removeActive();
    $('#iitm').show();
    $(this).addClass('active'); 
  });
});

function hideProjects() {
  $('#codeastra').hide();
  $('#ignite').hide();
  $('#embrace').hide();
  $('#iitm').hide();
  $('#jobless').hide();
}

function removeActive() {
  $('a[href=#codeastra]').removeClass('active'); 
  $('a[href=#ignite]').removeClass('active'); 
  $('a[href=#embrace]').removeClass('active'); 
  $('a[href=#iitm]').removeClass('active'); 
  $('a[href=#jobless]').removeClass('active'); 
}

