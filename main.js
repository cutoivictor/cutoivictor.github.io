// Scroll la secțiune
function scrollToSection(id){ 
    document.getElementById(id).scrollIntoView({behavior:'smooth', block:'start'}); 
  }
  
  // Fade-in secțiuni
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('visible'); }
    });
  }, {threshold:0.2});
  sections.forEach(section=>observer.observe(section));
  
  // Highlight meniu activ
  const navLinks = document.querySelectorAll('nav a');
  function setActiveLink(){
    let fromTop = window.scrollY + 120;
    navLinks.forEach(link=>{
      const sectionId = link.getAttribute('onclick').match(/'(.+)'/)[1];
      const section = document.getElementById(sectionId);
      if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
        link.classList.add('active');
      } else { link.classList.remove('active'); }
    });
  }
  window.addEventListener('scroll', setActiveLink);
  setActiveLink();
  
  // Back to Top
  const backToTopBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300){ backToTopBtn.style.display='block'; } 
    else { backToTopBtn.style.display='none'; }
  });
  function scrollToTop(){ window.scrollTo({top:0, behavior:'smooth'}); }
  
  // Ascunde/Arată header complet
  let lastScrollY = window.scrollY;
  const header = document.querySelector('header');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > lastScrollY && window.scrollY > 50){
      header.style.transform = 'translateY(-100%)'; // ascunde complet
    } else {
      header.style.transform = 'translateY(0)'; // arată
    }
    lastScrollY = window.scrollY;
  });