function createFooter() {
    return `
        <footer class="footer">
            <div class="footer-main">
                <div class="footer-content">
                    <h2 class="footer-title">SHOESSTORE</h2>
                    <p class="footer-subtitle">Premium Footwear Collection</p>
                    <p class="footer-description">
                        Cửa hàng giày dép chất lượng cao - ShoesStore Tp.Hồ Chí Minh
                    </p>
                    
                    <nav class="footer-nav">
                        <ul>
                            <li><a href="index.html">Trang chủ</a></li>
                            <li><a href="products.html">Sản phẩm</a></li>
                            <li><a href="about.html">Giới thiệu</a></li>
                            <li><a href="contact.html">Liên hệ</a></li>
                            <li><a href="cart.html">Giỏ hàng</a></li>
                        </ul>
                    </nav>
                    
                    <div class="footer-social">
                        <a href="#" title="Email">
                            <i class="fas fa-envelope"></i>
                        </a>
                        <a href="#" title="Facebook">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div class="footer-bottom-content">
                    <div class="footer-copyright">
                        © 2026 ShoesStore. All rights reserved.
                    </div>
                    <div class="footer-bottom-social">
                        <a href="#" title="Email">
                            <i class="fas fa-envelope"></i>
                        </a>
                        <a href="#" title="Facebook">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" title="Instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" title="Twitter">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    `;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = createFooter;
}