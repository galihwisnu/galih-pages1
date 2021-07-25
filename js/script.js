//event link di klik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	
	var elemenTujuan = $(tujuan);

	console.log($('body').scrollTop());

	
});