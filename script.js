document.addEventListener('DOMContentLoaded',()=>{
  const reveals=document.querySelectorAll('.reveal');
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})
  },{threshold:.12,rootMargin:'0px 0px -30px 0px'});
  reveals.forEach(el=>obs.observe(el));
  const form=document.getElementById('contactForm');
  const thanks=document.getElementById('thankYou');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    form.style.display='none';
    thanks.style.display='block';
  });
});