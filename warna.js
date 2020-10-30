//Memberi background ketika diklik
const body = document.querySelector('body');

const btn = document.getElementById('btn');

btn.addEventListener('click', function(){

//menambah apabila belum ada class ditambah tombol diklik dihapus lagi
	document.body.classList.toggle('aqua');
	document.body.style.backgroundColor='aqua';
	// document.body.setAttribute('class', '.aqua');
});

// btn.addEventListener('mouseenter', function(){
// 	body.style.backgroundColor = 'red';
// });

// btn.addEventListener('mouseleave', function(){
// 	body.style.backgroundColor='green';
// });




//KASUS KEDUA -> bikin tombol dengan js dan acak warna
const btnbaru = document.createElement('button'); //kita buat btn
const isiBtn= document.createTextNode('Acak Warna'); //buat teksnya
btnbaru.appendChild(isiBtn); //lalu kita gabungkan
btnbaru.setAttribute('type', 'button'); //kita tambah valuenya
btn.after(btnbaru); //selanjutnya kita simpan


//membuat warna random
btnbaru.addEventListener('click', function(){
	const r = Math.round(Math.random() * 255 + 1); //fungsi round untuk mneghilangkan , nya
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'; //gabungkan
});

//membuat acak warna dengan geser
const warnaMerah = document.querySelector('input[name=merah]');
warnaMerah.addEventListener('input', function(){
	// alert('ok'); -> untuk ngetes jalan/tidak
	const r = warnaMerah.value; //mengangkap nilai valuenya
	const g = warnaHijau.value;
	const b = warnaBiru.value;
	document.body.style.backgroundColor= 'rgb('+r+','+g+','+b+')';
});

const warnaHijau = document.querySelector('input[name=hijau]');
warnaHijau.addEventListener('input', function(){
	// alert('ok'); -> untuk ngetes jalan/tidak
	const r = warnaMerah.value; //mengangkap nilai valuenya
	const g = warnaHijau.value;
	const b = warnaBiru.value;
	document.body.style.backgroundColor= 'rgb('+r+','+g+','+b+')';
});

const warnaBiru = document.querySelector('input[name=biru]');
warnaBiru.addEventListener('input', function(){
	// alert('ok'); -> untuk ngetes jalan/tidak
	const r = warnaMerah.value; //mengangkap nilai valuenya
	const g = warnaHijau.value;
	const b = warnaBiru.value;
	document.body.style.backgroundColor= 'rgb('+r+','+g+','+b+')';
});


document.body.addEventListener('mousemove', function(event){
//menacri posisi mouse sumbu x dan y -> clientX/Y
//mencari lebar browser -> window.innerWidht n Height
const x = Math.round((event.clientX / window.innerWidht) * 255);
const y = Math.round((event.clientY / window.innerHeight) * 255);

document.body.style.backgroundColor= 'rgb('+x+', '+y+', 100)';

});


























