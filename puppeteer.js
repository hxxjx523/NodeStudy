const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
        headless : false //작업과정확인
    }); //브라우저열기
    const page = await browser.newPage();//새창열기
    await page.goto('https://www.naver.com');//페이지이동
    page.setViewport();

    await page.screenshot({path:'example2.png'});

    await browser.close(); //브라우저종료
})