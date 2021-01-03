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
// Шоог шидэх event listener - Anonymous функцтэй
document.querySelector('.btn-roll').addEventListener('click', function(){
    // 1-6 доторх санамсаргүй нэг тоо гаргаж авна
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // Шооны зургийг вэө дээр гаргаж ирнэ.
    diceDom.style.display = 'block';
    // Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ
    diceDom.src = 'dice-' + diceNumber + '.png';
    // Буусан тоо нь 1-ээс ялгаатай бол идэвхтэй тоглогчийн оноог нэмэгдүүлэх
    if(diceNumber !== 1){
        // 1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмнэ.
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;

    } else {
        // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт солих.

        // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        
        // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
        // Хэрэв идэвхтэй тологч нь 0 байвал идэвхтэй тоглогчийг 1 болго.
        // Хэрэв идэвхтэй тологч нь 1 байвал идэвхтэй тоглогчийг 0 болго.
        
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        /* if(activePlayer === 0){
            activePlayer = 1;
        } else {
            activePlayer = 0;
        } */

        // Улаан цэгийг шилжүүлэх - "toggle" нь active класс байвал устгадаг, байхгүй бол нэмдэг
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        // Шоог түр алга болгоно.
        diceDom.style.display = 'none';
    }
});
