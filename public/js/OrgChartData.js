//------------------------------


window.onload = function() {

    var familyGroupTag = {
        group: true,
        template: "group"
    };

    var familyGroupTag3 = {
        group: true,
        template: "group3"
    };

    OrgChart.templates.group.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}"/>';
    btnMinimize =
        '<svg fill="#aeaeae" x="410" y="17" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
        'viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve">' +
        '<path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"/>' +
        '<polygon points="311.683,349.411 205.12,242.5 311.683,135.589 290.435,114.411 162.762,242.5 290.435,370.589 	"/>' +
        '</svg>';
    btnMaximize =
        '<svg fill="#aeaeae" x="198" y="47" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
        'viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve">' +
        '<path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"/>' +
        '<polygon points="194.565,370.589 322.237,242.5 194.565,114.411 173.317,135.589 279.88,242.5 173.317,349.411 	"/>' +
        '</svg>';
    btnMinimize3 =
        '<svg fill="#aeaeae" x="630" y="17" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
        'viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve">' +
        '<path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"/>' +
        '<polygon points="311.683,349.411 205.12,242.5 311.683,135.589 290.435,114.411 162.762,242.5 290.435,370.589 	"/>' +
        '</svg>';

    var chart = new OrgChart(document.getElementById("tree"), {
        zoom: { speed: 130, smooth: 10 },
        template: "belinda",
        filterBy: 'all',
        enableDragDrop: true,
        nodeBinding: {
            field_0: "name",
            field_1: "Address",
            img_0: "img",
            minBtn: "id",
            maxBtn: "id"
        },
        tags: {
            f1: familyGroupTag,
            f2: familyGroupTag,
            f3: familyGroupTag3,
            f4: familyGroupTag,
            f5: familyGroupTag
        }
    });

    nodes = [
        { id: "f1", tags: ["f1"] },
        { id: 1, stpid: "f1", name: "रायाजी", img: "" },
        { id: 2, pid: "f1", name: "जनकोजी ", title: "सदर व्यक्ती देशमुख वतनावर गेले आहे ", img: "" },
        { id: 3, pid: "f1", name: "दसाजी", title: "पाटील वतन", img: "" },
        { id: 4, pid: 3, name: "सखोजी", img: "" },

        { id: 5, pid: 3, name: "रामजी", img: "" },
        { id: 6, pid: 3, name: "तुकोजी", img: "" },

        { id: 53, pid: 6, name: "जगन्नाथ", img: "" },

        { id: 54, pid: 53, name: "मालकोजी", img: "" },

        { id: 55, pid: 54, name: "लक्ष्मण", img: "" },
        { id: 56, pid: 54, name: "दस्तगीर", img: "" },

        { id: 57, pid: 56, name: "महादजी", img: "" },

        { id: 58, pid: 57, name: "बापू", img: "" },

        { id: 66, pid: 58, name: "आबा", img: "" },
        { id: 67, pid: 58, name: "बाबुराव", img: "" },

        { id: 68, pid: 67, name: "सुभराव", img: "" },
        { id: 69, pid: 67, name: "यशवंत", img: "" },

        { id: 73, pid: 69, name: "कृष्णा", img: "" },

        { id: 77, pid: 73, name: "सचिन", img: "" },

        { id: 78, pid: 77, name: "कन्या", img: "" },

        { id: 74, pid: 69, name: "अर्जुन", img: "" },

        { id: 79, pid: 74, name: "मदन", img: "" },

        { id: 80, pid: 79, name: "विक्रांत", img: "" },
        { id: 81, pid: 79, name: "विशाल", img: "" },

        { id: 75, pid: 69, name: "दत्तात्रय", img: "" },

        { id: 82, pid: 75, name: "शशिकांत", img: "" },

        { id: 84, pid: 82, name: "नंदन", img: "" },

        { id: 83, pid: 75, name: "रवींद्र", img: "" },

        { id: 85, pid: 83, name: "सर्वेश", img: "" },

        { id: 76, pid: 69, name: "अशोक", img: "" },

        { id: 86, pid: 76, name: "विजय", img: "" },

        { id: 87, pid: 86, name: "राजवीर", img: "" },

        { id: 70, pid: 68, name: "राम", img: "" },
        { id: 71, pid: 68, name: "महादेव", img: "" },

        { id: 72, pid: 71, name: "कन्या", img: "" },





        { id: 59, pid: 57, name: "लिंबाजी", img: "" },

        { id: 60, pid: 59, name: "अंबऋषी", img: "" },

        { id: 61, pid: 60, name: "विठ्ठल", img: "" },

        { id: 62, pid: 61, name: "भगवान", img: "" },

        { id: 63, pid: 62, name: "विजय", img: "" },

        { id: 65, pid: 63, name: "शिवम", img: "" },

        { id: 64, pid: 62, name: "अजय", img: "" },

        { id: 7, pid: 4, name: "भिकोजी", img: "" },

        { id: 129, pid: 7, name: "विटाजी", img: "" },

        { id: 152, pid: 129, name: "उलोजी", img: "" },

        { id: 153, pid: 152, name: "मानकोजी", img: "" },
        { id: 154, pid: 152, name: "भगोबा", img: "" },
        { id: 155, pid: 152, name: "म्हपती", img: "" },

        { id: 171, pid: 155, name: "भाऊ", img: "" },

        { id: 185, pid: 171, name: "दाजी", img: "" },

        { id: 186, pid: 185, name: "केशव", img: "" },

        { id: 189, pid: 186, name: "कुंडलिक ", img: "" },

        { id: 190, pid: 189, name: "नामदेव", img: "" },

        { id: 193, pid: 190, name: "कन्या", img: "" },

        { id: 191, pid: 189, name: "अंकुश", img: "" },

        { id: 194, pid: 191, name: "किरण", img: "" },
        { id: 195, pid: 191, name: "आकाश", img: "" },

        { id: 192, pid: 189, name: "लहु", img: "" },

        { id: 196, pid: 192, name: "गणेश", img: "" },
        { id: 197, pid: 192, name: "सौरव", img: "" },

        { id: 187, pid: 185, name: "माधव(बाळा पाटील दत्तक)", img: "" },
        { id: 188, pid: 185, name: "कृष्णाजी", img: "" },

        { id: 172, pid: 155, name: "तुकाराम", img: "" },

        { id: 173, pid: 172, name: "सखाराम", img: "" },
        { id: 174, pid: 172, name: "लिंबा", img: "" },

        { id: 175, pid: 174, name: "बलभीम", img: "" },

        { id: 176, pid: 175, name: "तुळशीराम", img: "" },

        { id: 177, pid: 176, name: "उमाकांत", img: "" },
        { id: 178, pid: 176, name: "शिवाजी", img: "" },

        { id: 179, pid: 177, name: "ऋषिकांत", img: "" },

        { id: 183, pid: 179, name: "वरद", img: "" },

        { id: 180, pid: 178, name: "पंकज", img: "" },

        { id: 182, pid: 180, name: "अनुज", img: "" },

        { id: 181, pid: 178, name: "पुष्कर", img: "" },

        { id: 184, pid: 181, name: "अन्वित", img: "" },

        { id: 156, pid: 154, name: "नाना", img: "" },
        { id: 157, pid: 154, name: "विठोबा", img: "" },

        { id: 158, pid: 156, name: "गेणुबा(गाणबा)", img: "" },

        { id: 160, pid: 158, name: "पांडुरंग", img: "" },

        { id: 161, pid: 160, name: "रावसाहेब", img: "" },

        { id: 164, pid: 161, name: "दगडू", img: "" },

        { id: 167, pid: 164, name: "कृष्णा", img: "" },
        { id: 168, pid: 164, name: "हर्षवर्धन", img: "" },

        { id: 162, pid: 160, name: "नानासाहेब", img: "" },

        { id: 165, pid: 162, name: "प्रभाकर", img: "" },

        { id: 169, pid: 165, name: "भैया", img: "" },

        { id: 163, pid: 160, name: "लालासाहेब", img: "" },

        { id: 166, pid: 163, name: "सुनील", img: "" },

        { id: 170, pid: 166, name: "पांडुरंग", img: "" },

        { id: 159, pid: 156, name: "धोंडी", img: "" },

        { id: 130, pid: 7, name: "सखा", img: "" },

        { id: 131, pid: 130, name: "चंद्रभान", img: "" },
        { id: 132, pid: 130, name: "भगवंत", img: "" },

        { id: 133, pid: 132, name: "पिराजी", img: "" },
        { id: 134, pid: 132, name: "बापूराव(बाळा)", img: "" },

        { id: 135, pid: 134, name: "माधव(दाजी कडून दत्तक)", img: "" },

        { id: 136, pid: 135, name: "दगडू", img: "" },

        { id: 137, pid: 136, name: "अगतराव", img: "" },
        { id: 138, pid: 136, name: "बाजीराव", img: "" },
        { id: 139, pid: 136, name: "नागनाथ", img: "" },
        { id: 140, pid: 136, name: "दत्तात्रय", img: "" },

        { id: 141, pid: 138, name: "महादेव", img: "" },
        { id: 142, pid: 138, name: "शंकर", img: "" },

        { id: 143, pid: 141, name: "प्रथमेश", img: "" },
        { id: 144, pid: 141, name: "शुभम", img: "" },

        { id: 145, pid: 139, name: "विजयसिंह(बापू)", img: "" },

        { id: 146, pid: 145, name: "राजवीर", img: "" },
        { id: 147, pid: 145, name: "राजेंद्र", img: "" },

        { id: 148, pid: 140, name: "अजय(टिंकू)", img: "" },
        { id: 149, pid: 140, name: "अभय", img: "" },

        { id: 150, pid: 148, name: "विराजसिंह", img: "" },
        { id: 151, pid: 149, name: "वीरप्रताप", img: "" },

        { id: 8, pid: 4, name: "नारोजी ", img: "" },

        { id: 119, pid: 8, name: "पिराजी ", img: "" },

        { id: 120, pid: 119, name: "बाळा ", img: "" },

        { id: 122, pid: 120, name: "बापू ", img: "" },

        { id: 124, pid: 122, name: "रावजी ", img: "" },

        { id: 123, pid: 120, name: "राघोबा ", img: "" },

        { id: 125, pid: 123, name: "शेकबा ", img: "" },
        { id: 127, pid: 125, name: "सदाशिव ", img: "" },
        { id: 126, pid: 123, name: "राम ", img: "" },
        { id: 128, pid: 126, name: "आप्पाराव ", img: "" },

        { id: 121, pid: 119, name: "लक्ष्मण ", img: "" },

        { id: 9, pid: 5, name: "बापूजी", img: "" },
        { id: 10, pid: 5, name: "पुतळजा", img: "" },

        { id: 11, pid: 9, name: "मसाजी", img: "" },
        { id: 12, pid: 9, name: "जानोजी", img: "" },

        { id: 27, pid: 11, name: "हणुमंतराव", img: "" },

        { id: 28, pid: 27, name: "बाबाजी", img: "" },

        { id: 29, pid: 28, name: "तात्या", img: "" },

        { id: 108, pid: 29, name: "भाऊराव", img: "" },

        { id: 109, pid: 108, name: "दत्तात्रय", img: "" },

        { id: 111, pid: 109, name: "रामचंद्र (मुरलीधर) दामोदर  यास दत्तक गेले ", img: "" },

        { id: 110, pid: 108, name: "दामोदर", img: "" },

        { id: 112, pid: 110, name: "मुरलीधर", img: "" },

        { id: 113, pid: 112, name: "शिवाजी", img: "" },

        { id: 114, pid: 113, name: "भाऊराव", img: "" },

        { id: 116, pid: 114, name: "युवराज", img: "" },
        { id: 117, pid: 114, name: "स्वराज", img: "" },

        { id: 115, pid: 113, name: "भगवंत", img: "" },

        { id: 118, pid: 115, name: "पृथ्वीराज", img: "" },


        { id: 30, pid: 28, name: "सुभानराव", img: "" },


        { id: 31, pid: 30, name: "बाजीराव", img: "" },

        { id: 99, pid: 31, name: "कृष्णाथ", img: "" },

        { id: 100, pid: 99, name: "अंबादास", img: "" },

        { id: 101, pid: 100, name: "सुभाष", img: "" },

        { id: 103, pid: 101, name: "रविराज", img: "" },

        { id: 105, pid: 103, name: "शौर्य", img: "" },

        { id: 104, pid: 101, name: "धनराज", img: "" },

        { id: 102, pid: 100, name: "बाळासाहेब", img: "" },

        { id: 106, pid: 102, name: "योगीराज", img: "" },

        { id: 107, pid: 106, name: "कन्या", img: "" },


        { id: 32, pid: 30, name: "गणपत", img: "" },


        { id: 33, pid: 32, name: "भगवान", img: "" },

        { id: 88, pid: 33, name: "विठ्ठल", img: "" },

        { id: 89, pid: 88, name: "भास्कर", img: "" },

        { id: 93, pid: 89, name: "प्रशांत", img: "" },

        { id: 94, pid: 93, name: "प्राणिश", img: "" },

        { id: 90, pid: 88, name: "सुभाष", img: "" },

        { id: 95, pid: 90, name: "शिरीष", img: "" },
        { id: 96, pid: 90, name: "अतिश", img: "" },

        { id: 91, pid: 88, name: "अशोक", img: "" },

        { id: 97, pid: 91, name: "अनिकेत", img: "" },

        { id: 92, pid: 88, name: "सुरेंद्र", img: "" },

        { id: 98, pid: 92, name: "संकेत", img: "" },


        { id: 34, pid: 32, name: "अंबऋषी", img: "" },

        { id: 35, pid: 34, name: "तुकाराम", img: "" },
        { id: 36, pid: 34, name: "ज्ञानदेव ", title: "( ज्ञानदेव (रावसाहेब) हे तात्या रामजी पा: यांना दत्तक गेले )", img: "" },

        { id: 37, pid: 35, name: "रामचंद्र", img: "" },
        { id: 38, pid: 35, name: "भारत", img: "" },
        { id: 39, pid: 35, name: "चंद्रकांत", img: "" },
        { id: 40, pid: 35, name: "शिवाजी", title: "Bhushan Nagar Ahmednag, 9373017321", img: "./img/shivajitpatil.jpeg" },
        { id: 41, pid: 35, name: "संजय", img: "" },

        { id: 42, pid: 37, name: "रवी", img: "" },
        { id: 43, pid: 37, name: "संदीप", img: "" },

        { id: 44, pid: 42, name: "कन्या", img: "" },
        { id: 45, pid: 43, name: "कन्या", img: "" },

        { id: 46, pid: 38, name: "नितीन", img: "" },
        { id: 47, pid: 38, name: "निलेश", img: "" },
        { id: 48, pid: 47, name: "कन्या", img: "" },


        { id: 49, pid: 39, name: "सचिन", img: "" },
        { id: 50, pid: 39, name: "स्वप्नील", img: "" },
        { id: 51, pid: 49, name: "वेदांत", img: "" },

        { id: 52, pid: 40, name: "श्रीपाद", img: "./img/shripadspatil.jpg" },

        { id: 13, pid: 12, name: "बाळाजी", img: "" },
        { id: 14, pid: 12, name: "आप्पाजी", img: "" },

        { id: 15, pid: 14, name: "भगोबा", img: "" },

        { id: 16, pid: 15, name: "दाजी", img: "" },

        { id: 17, pid: 16, name: "रामजी", img: "" },
        { id: 18, pid: 16, name: "गेनु", img: "" },


        { id: 19, pid: 18, name: "माधवराव", img: "" },
        { id: 20, pid: 18, name: "पक्कडराव", img: "" },

        { id: 21, pid: 17, name: "तात्या", img: "" },

        { id: 22, pid: 21, name: "रावसाहेब", img: "" },

        { id: 23, pid: 22, name: "रमेश", img: "https://scontent.fsse1-1.fna.fbcdn.net/v/t31.18172-8/26841354_1530178543724987_8421970976702175786_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=itep4SE0j6AAX_FXxke&_nc_ht=scontent.fsse1-1.fna&oh=00_AfCH3TIs3iA4hl9h3UAHmysKBFh2fAJt6tp7Pa4jodeS-g&oe=659AD968" },

        { id: 24, pid: 23, name: "दिनेश", img: "https://media.licdn.com/dms/image/C4E03AQHvhPUqngvKoQ/profile-displayphoto-shrink_200_200/0/1604945104600?e=1707350400&v=beta&t=4NoU8HJRXsDuYFwWDV1JAU0QmsRHhBMN_rwnnrQxVCw" },

        { id: 25, pid: 24, name: "ध्रुवा", img: "https://scontent.fsse1-1.fna.fbcdn.net/v/t39.30808-6/294917847_413503804138983_9116411394447504658_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=GsvRfj9oqDEAX-WqFwC&_nc_ht=scontent.fsse1-1.fna&oh=00_AfDbEbMc7C-pgQe3aM8LT9lWcrZp9QHJEsAuELbs-cfU8Q&oe=657827F6" },
        { id: 26, pid: 24, name: "अभिराज", img: "https://scontent.fsse1-1.fna.fbcdn.net/v/t39.30808-6/331802001_941867133822337_8827113106879627885_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=783fdb&_nc_ohc=Qk9n8TwaXroAX8jPgTi&_nc_ht=scontent.fsse1-1.fna&oh=00_AfC9b9hH1bFf1vkuP-JHrIFUXu5CAbwwNcMxDDx9ImZTeA&oe=65796961" }

    ];




    chart.on('redraw', (sender) => {
        let minBtns = document.querySelectorAll('*[data-btn-min]');

        minBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                chart.minimize(btn.getAttribute('data-btn-min'));
            });
        });

        let maxBtns = document.querySelectorAll('*[data-btn-max]');

        maxBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                chart.maximize(btn.getAttribute('data-btn-max'));
            });
        });
    });
    chart.load(nodes);
};