const previews = document.querySelectorAll('.effect-listen audio');
for (const preview of previews) {
  preview.addEventListener('play', () => {
    for (const other of previews) {
      if (other !== preview) other.pause();
    }
  });
}
