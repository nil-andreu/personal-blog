function scrollFunction() {
    const navbar = document.getElementById("navbar") as HTMLElement;
    const buttons = Array.from(document.getElementsByClassName("button") as HTMLCollectionOf<HTMLElement>);

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      navbar.style.backgroundColor = '#041b24';
      navbar.style.opacity = '0.9';
      navbar.style.height = '8vh';

      buttons.forEach((button) => {
        button.style.height = '1.5vh';
      })

    } else {
      navbar.style.backgroundColor = '#011C27';
      navbar.style.opacity = '1';
      navbar.style.height = '10vh';

      buttons.forEach((button) => {
        button.style.height = '3vh';
      })
    }
  }

export default scrollFunction;