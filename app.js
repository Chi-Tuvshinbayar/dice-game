// Тоглогчийн ээлжийг хадгалах хувьсагч, Нэгдүгээр тоглогчийг 0, Хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаар буусныг хадгалах хувьсагч. Гэхдээ 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>
// window.document.querySelector('#score-0').textContent = dice; //DOC буюу window.document дотор querySelector хайлт хийдэг.
// document.querySelector('#score-1').innerHTML = '<em>hi</em>';
// Программ эхлэхэд бэлтгэе
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
document.querySelector('.dice').style.display = 'none';
console.log('Шоо : ' + dice);