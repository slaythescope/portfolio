  <script>
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    sections.forEach((sec, index) => {
      sec.classList.add(index % 2 === 0 ? 'left' : 'right');
    });

    function revealOnScroll() {
      const triggerBottom = window.innerHeight * 0.85;
      sections.forEach(section => {
        const boxTop = section.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          section.classList.add("visible");
        }
      });
    }

    function highlightNav() {
      let currentId = "";
      sections.forEach(section => {
        const boxTop = section.getBoundingClientRect().top;
        if (boxTop <= 100) {
          currentId = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentId) {
          link.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", () => {
      revealOnScroll();
      highlightNav();
    });

    window.addEventListener("load", () => {
      revealOnScroll();
      highlightNav();
    });

    function updateDateTime() {
      const dt = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      document.getElementById("datetime").textContent = dt.toLocaleDateString("en-US", options);
    }

    updateDateTime();

    function toggleMenu() {
      const menu = document.getElementById("mobileMenu");
      menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    }
  </script>
  
<!-- Lightbox Modal -->
<div id="lightbox">
  <span id="lightbox-prev" class="lightbox-nav">←</span>
  <img id="lightbox-img" src="" alt="Lightbox Image">
  <span id="lightbox-next" class="lightbox-nav">→</span>
</div>

<script>
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  const awardImgs = Array.from(document.querySelectorAll('.awards-gallery img'));
  const certImgs = Array.from(document.querySelectorAll('.certifications-gallery img'));
  const bannerImg = document.querySelector('.banner img');

  // Kết hợp tất cả ảnh theo đúng thứ tự: banner → awards → certs
  const allImgs = bannerImg ? [bannerImg, ...awardImgs, ...certImgs] : [...awardImgs, ...certImgs];

  let currentIndex = 0;

  allImgs.forEach((img, index) => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = index;
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
    });
  });

  function showImage(index) {
    if (index < 0) index = allImgs.length - 1;
    if (index >= allImgs.length) index = 0;
    currentIndex = index;
    lightboxImg.src = allImgs[currentIndex].src;
  }

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showImage(currentIndex - 1);
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showImage(currentIndex + 1);
  });

  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
</script>
