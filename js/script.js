document.querySelector('.slider').oninput = () => {
      let slider = document.querySelector('.slider').value;

      if (slider == 0) {
            document.querySelector('.img').src='./img/4.png';
      } else if (slider <= 25) {
            document.querySelector('.img').src='./img/3.png';
      } else if (slider <= 50) {
            document.querySelector('.img').src='./img/2.png';
      } else if (slider <= 75) {
            document.querySelector('.img').src='./img/1.png';
      } else if (slider <= 100) {
            document.querySelector('.img').src='./img/5.png';
      }
}
