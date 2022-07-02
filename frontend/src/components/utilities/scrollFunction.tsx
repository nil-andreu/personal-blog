function scrollFunction() {
    const navbar = document.getElementById("navbar") as HTMLElement;

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 &&  navbar !== null) {
      navbar.style.opacity = '0.8';
    } else {
      navbar.style.opacity = '1';
    }
  }

export default scrollFunction;