
const images = [
    "person.img/Sơn Nam.jpg",
    "person.img/Văn Hiếu.jpg",
    "person.img/Quốc Huy.jpg",
    "person.img/Quốc Thắng.jpg",
    "person.img/Phi Long.png",
    "person.img/Thế Hùng.jpg",
    "person.img/Gia Khánh.jpg",
    "person.img/Phúc Long.jpg",
    "person.img/Ngọc Châu.jpg",
    "person.img/Đình Hồ.jpg",
    "person.img/Đoàn Duy.jpg",
    "person.img/Duy Khang.jpg",
    "person.img/Huy Hoàng.jpg",
    "person.img/Mai Khanh.jpg",
    "person.img/Tấn Lộc.jpg",
    "person.img/Thanh Mai.jpg",
    "person.img/Trọng Duy.png",
    "person.img/Yến Nhi.png",
    "person.img/Bá Cần.jpg",
    "person.img/Đăng Khôi.jpg",
    "person.img/Đức Lâm.jpg",
    "person.img/Đức Phước.jpg",
    "person.img/Vân Anh.jpg",
    "person.img/Nam Bình.jpg",
    "person.img/Ngọc Quý.jpg",
    "person.img/Hồng Hạnh.jpg",
    "person.img/Nhật Vy.jpg",
    "person.img/Phương Dung.jpg",
    "person.img/Quang Anh.jpg",
    "person.img/Tây Thi.jpg",
    "person.img/Thanh Xuân.jpg",
    "person.img/Thế Anh.jpg",
    "person.img/Thùy Linh.jpg",
    "person.img/Trường Giang.jpg",
    "person.img/Việt Cường.jpg",
    "person.img/Xuân Đông.jpg",
    "person.img/Phúc An.jpg",
    "person.img/Ngọc Yến.jpg",
    "person.img/Gia Khiêm.jpg",
    "person.img/Như Quỳnh.jpg",
    "person.img/Xuân Huy.jpg",
    "person.img/Vũ Lộc.jpg",
    "person.img/Quốc Bảo.jpg",
    "person.img/Quỳnh Hoa.jpg",
    "person.img/Mỹ Ngọc.png",
    "person.img/Hoàng Nguyễn.jpg",
    "person.img/Linh LÊ.jpg",
    "person.img/Đại Dĩ.png"
  ];
  
  const correctAnswers = {
    "person.img/Sơn Nam.jpg": ["Sơn Nam", "Nam", "goat"],
    "person.img/Văn Hiếu.jpg": ["Văn Hiếu", "Hiếu"],
    "person.img/Quốc Huy.jpg": ["Quốc Huy", "Huy"],
    "person.img/Quốc Thắng.jpg": ["Quốc Thắng", "Thắng"],
    "person.img/Phi Long.png": ["Phi Long", "Long"],
    "person.img/Thế Hùng.jpg": ["Thế Hùng", "Hùng"],
    "person.img/Gia Khánh.jpg": ["Gia Khánh", "Khánh"],
    "person.img/Phúc Long.jpg": ["Phúc Long", "Long"],
    "person.img/Ngọc Châu.jpg": ["Ngọc Châu", "Châu"],
    "person.img/Đình Hồ.jpg": ["Đình Hồ", "Hồ"],
    "person.img/Đoàn Duy.jpg": ["Đoàn Duy", "Duy"],
    "person.img/Duy Khang.jpg": ["Duy Khang", "Khang"],
    "person.img/Huy Hoàng.jpg": ["Huy Hoàng", "Hoàng"],
    "person.img/Mai Khanh.jpg": ["Mai Khanh", "Khanh"],
    "person.img/Tấn Lộc.jpg": ["Tấn Lộc", "Lộc"],
    "person.img/Thanh Mai.jpg": ["Thanh Mai", "Mai"],
    "person.img/Trọng Duy.png": ["Trọng Duy", "Duy"],
    "person.img/Yến Nhi.png": ["Yến Nhi", "Nhi"],
    "person.img/Bá Cần.jpg": ["Bá Cần", "Cần"],
    "person.img/Đăng Khôi.jpg": ["Đăng Khôi", "Khôi"],
    "person.img/Đức Lâm.jpg" : ["Đức Lâm", "Lâm"],
    "person.img/Đức Phước.jpg": ["Đức Phước", "Phước"],
    "person.img/Vân Anh.jpg": ["Vân Anh", "Anh"],
    "person.img/Nam Bình.jpg": ["Nam Bình", "Bình"],
    "person.img/Ngọc Quý.jpg": ["Ngọc Quý", "Quý"],
    "person.img/Hồng Hạnh.jpg": ["Hồng Hạnh", "Hạnh"],
    "person.img/Nhật Vy.jpg": ["Nhật Vy", "Vy"],
    "person.img/Phương Dung.jpg": ["Phương Dung", "Dung"],
    "person.img/Quang Anh.jpg": ["Quang Anh", "Anh"],
    "person.img/Tây Thi.jpg": ["Tây Thi", "Thi"],
    "person.img/Thanh Xuân.jpg": ["Thanh Xuân", "Xuân"],
    "person.img/Thế Anh.jpg": ["Thế Anh", "Anh"],
    "person.img/Thùy Linh.jpg": ["Thùy Linh", "Linh"],
    "person.img/Trường Giang.jpg": ["Trường Giang", "Giang"],
    "person.img/Việt Cường.jpg": ["Việt Cường", "Cường"],
    "person.img/Xuân Đông.jpg": ["Xuân Đông", "Đông"],
    "person.img/Phúc An.jpg" : ["Phúc An", "An"],
    "person.img/Ngọc Yến.jpg" : ["Ngọc Yến", "Yến"],
    "person.img/Gia Khiêm.jpg" : ["Gia Khiêm", "Khiêm"],    
    "person.img/Như Quỳnh.jpg" : ["Như Quỳnh", "Quỳnh"],
    "person.img/Xuân Huy.jpg" : ["Xuân Huy", "Huy"],
    "person.img/Vũ Lộc.jpg" : ["Vũ Lộc", "Lộc"],
    "person.img/Quốc Bảo.jpg" : ["Quốc Bảo", "Bảo"],
    "person.img/Quỳnh Hoa.jpg" : ["Quỳnh", "Hoa"],
    "person.img/Mỹ Ngọc.png": ["Mỹ Ngọc", "Ngọc"],
    "person.img/Hoàng Nguyễn.jpg": ["Huy Hoàng", "Hoàng"],
    "person.img/Linh LÊ.jpg" : ["Thùy Linh", "Linh"],
    "person.img/Nam Bình.jpg" :["Nam Bình", "Bình"],
    "person.img/Đại Dĩ.png" :["Đại", "Dĩ"]
  };
  
  let shuffledImages = shuffle(images);
  let currentImageIndex = 0;
  let remainingAttempts = 3;
  document.getElementById('startButton').addEventListener('click', startGame);
  document.getElementById('restartButton').addEventListener('click', startGame);

  function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  function startGame() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    showImage();
  }

  
  function showImage() {
    const imageSource = shuffledImages[currentImageIndex];
    document.getElementById('personImage').src = imageSource;
  }
  
  function checkGuess() {
    const guessInput = document.getElementById('guessInput').value.trim().toLowerCase();
    const correctNames = correctAnswers[shuffledImages[currentImageIndex]].map(name => name.toLowerCase());
  
    if (correctNames.includes(guessInput)) {
      currentImageIndex++;
      remainingAttempts = 3; 
      if (currentImageIndex < shuffledImages.length) {
        showImage();
        document.getElementById('guessInput').value = '';
        document.getElementById('resultMessage').textContent = 'Correct! Next picture:';
      } else {
        endGame();
      }
    } else {
      remainingAttempts--;
      if (remainingAttempts === 0) {
        showCorrectAnswer();
        document.getElementById('resultMessage').textContent = 'Incorrect! The correct answer is:';
        currentImageIndex = 0;
        shuffledImages = shuffle(images);
        showImage();
        document.getElementById('guessInput').value = '';
        document.getElementById('restartButton').style.display = 'block';
        document.getElementById('gameContainer').style.display = 'none';
        remainingAttempts = 3;
      } else {
        document.getElementById('resultMessage').textContent = `Incorrect! You have ${remainingAttempts} attempts left.`;
      }
    }
  }
  
  function showCorrectAnswer() {
  const correctImageSource = shuffledImages[currentImageIndex];
  const correctNames = correctAnswers[correctImageSource];
  document.getElementById('correctPersonImage').src = correctImageSource;
  document.getElementById('correctPersonName').textContent = `Name: ${correctNames[0]}`;
  document.getElementById('correctPersonImage').style.width = '200px'; 
  document.getElementById('correctAnswerContainer').style.display = 'block';
  }
  
  function restartGame() {
    currentImageIndex = 0;
    shuffledImages = shuffle(images);
    showImage();
    document.getElementById('guessInput').value = '';
    document.getElementById('restartButton').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    document.getElementById('correctAnswerContainer').style.display = 'none';
    document.getElementById('resultMessage').textContent = '';
  }
  function endGame() {
    document.getElementById('personImage').src = 'endgame/bye.jpg';
    document.getElementById('resultMessage').textContent = 'Congratulations! You guessed all the pictures!';
  }