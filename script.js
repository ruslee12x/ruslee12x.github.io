   const qrImage = document.getElementById('qrImage');
    const zoomOverlay = document.getElementById('zoomOverlay');
    const zoomedImage = document.getElementById('zoomedImage');

    qrImage.addEventListener('click', () => {
      zoomOverlay.style.display = 'flex';
    });

    zoomOverlay.addEventListener('click', () => {
      zoomOverlay.style.display = 'none';
    });

    function setTheme(theme) {
      document.body.className = '';
      if (theme === 'pink') document.body.classList.add('theme-pink');
      else if (theme === 'white') document.body.classList.add('theme-white');
      else if (theme === 'dark') document.body.classList.add('theme-dark');
      else document.body.classList.add('theme-default');
    }