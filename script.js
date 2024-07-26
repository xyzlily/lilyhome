document.addEventListener('DOMContentLoaded', function() {  
    // 初始化时隐藏所有非首页的页面  
    const pages = document.querySelectorAll('.page');  
    pages.forEach(page => {  
        if (page.id !== 'home') {  
            page.style.display = 'none';  
        }  
    });  
    // 为侧边栏链接添加点击事件监听器  
    document.querySelectorAll('.nav-link').forEach(link => {  
        link.addEventListener('click', function(event) {  
            event.preventDefault(); // 阻止链接的默认行为  
              
            // 隐藏所有页面  
            pages.forEach(page => {  
                page.classList.remove('active');  
                page.style.display = 'none';  
            });  
  
            // 显示目标页面  
            const targetId = this.getAttribute('href').substring(1); // 去除#号  
            const targetPage = document.getElementById(targetId);  
            targetPage.style.display = 'block';  
            targetPage.classList.add('active');  
        }); 
    });  
});