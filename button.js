// Hàm điều hướng về trang chủ
function goToHomePage() {
    window.location.href = '/index.html';  // <-- Đường dẫn tuyệt đối từ gốc GitHub Pages
}

// Tạo button và thêm vào trang
const navButton = document.createElement('button');
navButton.innerHTML = '← Home page';
navButton.onclick = goToHomePage;

// Style cho button
navButton.style.cssText = `
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1000;
    background: #6366f1;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

// Thêm hiệu ứng hover
navButton.addEventListener('mouseenter', function() {
    this.style.background = '#4f46e5';
    this.style.transform = 'translateY(-1px)';
});
navButton.addEventListener('mouseleave', function() {
    this.style.background = '#6366f1';
    this.style.transform = 'translateY(0)';
});

// Thêm button vào đầu trang
document.body.insertBefore(navButton, document.body.firstChild);
