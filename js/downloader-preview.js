let downloaderBlock = document.querySelector('.downloader');
let form = document.querySelector('.downloader__form');
let link = document.querySelector('.downloader__input');
let btnInput = document.querySelector('.downloader__input-btn');
let imgMax = document.querySelector('.result__img-max');
let imgHq = document.querySelector('.result__img-hq');
let imgMq = document.querySelector('.result__img-mq');
let result = document.querySelector('.result');
let inputSearch = document.querySelector('.downloader__input-search');
let input = document.querySelector('.downloader__input');
let saveMax = document.querySelector('.result__save-max');
let saveHq = document.querySelector('.result__save-hq');
let saveMq = document.querySelector('.result__save-mq');
let titleVideoBlock = document.querySelector('.result__title');

//## Link handler
    btnInput.onclick = async function () {
            str = link.value;
            link.value = '';
            //#### Download image link: src="//img.youtube.com/vi/---id-video---/---format---.jpg"
            linkDownload = '//img.youtube.com/vi/';
            linkMax = '/maxresdefault.jpg';
            linkHq = '/hqdefault.jpg';
            linkMq = '/mqdefault.jpg';
        
            //#### link oembed
            linkOembed = 'https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=';

            //##Download preview with standard link: www.youtube.com/watch?v= ---ID-video---
            if (str.includes ('v=')) {
                clearLink = str.split('v=');
              let clear = clearLink[1].substr(0, 11);

                    //#### Edit src link to custom
                    imgMax.src= linkDownload + clear + linkMax;
                    imgHq.src= linkDownload + clear + linkHq;
                    imgMq.src= linkDownload + clear + linkMq;

                //#### If the condition is true then the block is activated
                result.classList.add('active');

                //#### If the condition is true then edit src link to custom
                saveMax.href =  linkDownload + clear + linkMax;
                saveHq.href =  linkDownload + clear + linkHq;
                saveMq.href =  linkDownload + clear + linkMq;
                // downloaderBlock.classList.remove('active')
                // header.classList.add('header--active');
                // logo.src = 'images/icons/logotype-v2.png';

            //#### Copy the title of the video using json
                response = await fetch(linkOembed + clear);
                content = await response.json();
                titleVideoBlock.innerHTML = `<h5 class="result__title-text">${content.title}</h5>`;
            }

            //## Download preview with shortened link: https://youtu.be/ ---ID-video---
             else if (str.includes ('be/')) {
                clearLink = str.split('be/');
                clear = clearLink[1].substr(0, 11);

                //#### Edit src link to custom
                    imgMax.src= linkDownload + clear + linkMax;
                    imgHq.src= linkDownload + clear + linkHq;
                    imgMq.src= linkDownload + clear + linkMq;

                //#### If the condition is true then the block is activated
                result.classList.add('active')

                //#### If the condition is true then edit src link to custom
                saveMax.href =  linkDownload + clear + linkMax;
                saveHq.href =  linkDownload + clear + linkHq;
                saveMq.href =  linkDownload + clear + linkMq;
                // downloaderBlock.classList.remove('active')
                // header.classList.add('header--active');
                // logo.src = 'images/icons/logotype-v2.png';

                 //#### Copy the title of the video using json
                 response = await fetch(linkOembed + clear);
                 content = await response.json();
                 titleVideoBlock.innerHTML = `<h5 class="result__title-text">${content.title}</h5>`;

             //##  Download preview for ---ID-video---
            } else if (str.length === (11)) {
                //#### Edit src link to custom
                imgMax.src= linkDownload + str + linkMax;
                imgHq.src= linkDownload + str + linkHq;
                imgMq.src= linkDownload + str + linkMq;

            //#### If the condition is true then the block is activated
                result.classList.add('active')

            //#### If the condition is true then edit src link to custom
            saveMax.href =  linkDownload + str + linkMax;
            saveHq.href =  linkDownload + str + linkHq;
            saveMq.href =  linkDownload + str + linkMq;
            // downloaderBlock.classList.remove('active')
            // header.classList.add('header--active');
            // logo.src = 'images/icons/logotype-v2.png';
            };

             //#### Copy the title of the video using json
             response = await fetch(linkOembed + str);
             content = await response.json();
             titleVideoBlock.innerHTML = `<h5 class="result__title-text">${content.title}</h5>`;
        };



// var saveLink = document.createElement('.result__save-link');
//     saveLink.target = "_blank";
//     saveLink.download = "img.jpg";
//     saveLink.href = "http://fanscat.ru/wp-content/uploads/2012/02/igraushii-kotenok1.jpg";
//     saveLink.click();