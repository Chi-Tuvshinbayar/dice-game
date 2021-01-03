// Тоглогчийн ээлжийг хадгалах хувьсагч, Нэгдүгээр тоглогчийг 0, Хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаар буусныг хадгалах хувьсагч. Гэхдээ 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.


// Программ эхлэхэд бэлтгэе
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
var diceDom = document.querySelector('.dice');
// document.getElementById('.dice').style.display = 'none';
// Anonymous функц
document.querySelector('.btn-roll').addEventListener('click', function(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + diceNumber + '.png';
    // alert('Шоо шидлээ: ' + diceNumber);
});
