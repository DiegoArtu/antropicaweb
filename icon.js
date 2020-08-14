window.onscroll = () => {
    const docScrollTop = document.documentElement.scrollTop;

    if (window.innerWidth> 990) {
        if (docScrollTop>100) {
            document.querySelector('.btn-dl').classList.add('open');            
        } else {
            document.querySelector('.btn-dl').classList.remove('open');
        }
    }
}