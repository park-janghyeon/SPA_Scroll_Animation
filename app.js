document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.page');
  let currentPageIndex = 0; // 현재 페이지 인덱스를 추적
  let isScrolling = false; // 스크롤 중인지 여부를 추적

  const scrollToPage = (index) => {
    window.scrollTo({
      top: pages[index].offsetTop,
      behavior: 'smooth'
    });
    currentPageIndex = index; // 현재 페이지 인덱스 업데이트
  };

  document.addEventListener('wheel', event => {
    event.preventDefault();
    if (isScrolling) return;

    isScrolling = true;

    if (event.deltaY > 0) {
      // 아래로 스크롤
      if (currentPageIndex < pages.length - 1) {
        scrollToPage(currentPageIndex + 1);
      }
    } else {
      // 위로 스크롤
      if (currentPageIndex > 0) {
        scrollToPage(currentPageIndex - 1);
      }
    }

    setTimeout(() => {
      isScrolling = false;
    }, 1000); // 스크롤 애니메이션 시간 조정
  }, { passive: false });
});
