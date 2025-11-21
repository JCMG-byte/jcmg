// 数据结构重大更新：现在数组里是包含中英文的对象
const data = {
    // Reel 1: Scene / 场景
    reel1: [
        { en: 'Street', cn: '城市街道' },
        { en: 'Highway', cn: '高速公路' },
        { en: 'Track', cn: '专业赛道' },
        { en: 'Off Road', cn: '越野' },
        { en: 'Beach', cn: '海滩度假' },
        { en: 'Snow', cn: '冰雪极地' },
        { en: 'Mars', cn: '火星殖民地' },
        { en: 'Mountain Road', cn: '跑山' },
        { en: 'Undersea', cn: '潜水' },
        { en: 'Underground', cn: '地下' },
        { en: 'Sky', cn: '天空' },
        { en: 'Railway', cn: '轨道' }, // Fixed typo
        { en: 'Space', cn: '太空' },
        { en: 'Cyber City', cn: '赛博都市' }
    ],
    // Reel 2: Proportion / 车型
    reel2: [
        { en: 'Micro Car', cn: '微型车' },
        { en: 'Sedan', cn: '轿车' },
        { en: 'SUV', cn: 'SUV' },
        { en: 'Supercar', cn: '超级跑车' },
        { en: 'Pick Up', cn: '皮卡' },
        { en: 'Wagon', cn: '旅行车' },
        { en: 'Formula', cn: '方程式赛车' },
        { en: 'Spaceship', cn: '宇宙飞船' },
        { en: 'Hatchback', cn: '两厢掀背' },
        { en: 'GT', cn: '豪华跑车' },
        { en: 'MPV', cn: '商务面包车' },
        { en: 'Roadster', cn: '敞篷' },
        { en: 'Le Mans', cn: '勒芒原型车' },
        { en: 'Silhouette', cn: '剪影赛车' },
        { en: 'Mech', cn: '重型机甲' }
    ],
    // Reel 3: Brand / 品牌灵感
    reel3: [
        { en: 'Porsche', cn: '保时捷' },
        { en: 'Hot Rod', cn: '风火轮' },
        { en: 'BMW', cn: '宝马' },
        { en: 'Tesla', cn: '特斯拉' },
        { en: 'Ferrari', cn: '法拉利' },
        { en: 'Gundam', cn: '高达机动战士' },
        { en: 'Kojima Prod.', cn: '小岛工作室' },
        { en: 'Cyberpunk2077', cn: '赛博朋克2077' },
        { en: 'NASA', cn: 'NASA' },
        { en: 'Peugeot', cn: '标致' },
        { en: 'ALPINE', cn: '阿尔派' },
        { en: 'BENZ', cn: '奔驰' },
        { en: 'Volvo', cn: '沃尔沃' },
        { en: 'Mazda', cn: '马自达' },
        { en: 'Dyson', cn: '戴森' },
        { en: 'Alfa Romeo', cn: '阿尔法·罗密欧' },
        { en: 'Lotus', cn: '路特斯' },
        { en: 'Cadillac', cn: '凯迪拉克' },
        { en: 'Aston Martin', cn: '阿斯顿·马丁' },
        { en: 'B&O', cn: '铂傲' },
        { en: 'CASIO', cn: '卡西欧' },
        { en: 'Balenciaga', cn: '巴黎世家' }, // Fixed typo
        { en: 'Lego', cn: '乐高' },
        { en: 'Nintendo', cn: '任天堂' },
        { en: 'Play Station', cn: '索尼PS' },
        { en: 'LV', cn: '路易威登' },
        { en: 'North Face', cn: '北面' },
        { en: 'YAMAHA', cn: '雅马哈' },
        { en: 'BUGATTI', cn: '布加迪' },
        { en: 'Nissan', cn: '尼桑' },
        { en: 'NIO', cn: '蔚来' },
        { en: 'Renault', cn: '雷诺' },
        { en: 'Chevy', cn: '雪佛兰' },
        { en: 'Dodge', cn: '道奇' },
        { en: 'AUDI', cn: '奥迪' },
        { en: 'DMC', cn: '德罗宁' },
        { en: 'SAAB', cn: '萨博' },
        { en: 'Wuling', cn: '五菱宏光' }
    ],
    // Reel 4: Style / 风格
    reel4: [
        { en: 'Minimalism', cn: '极简主义' },
        { en: 'Bauhaus', cn: '包豪斯' },
        { en: 'Brutalism', cn: '粗野主义' },
        { en: 'Cyberpunk', cn: '赛博朋克' },
        { en: 'Steampunk', cn: '蒸汽朋克' },
        { en: 'Futurism', cn: '未来主义' },
        { en: 'Industrial', cn: '重工业风' },
        { en: 'Cubism', cn: '立体派' },
        { en: 'Structivism', cn: '结构主义' },
        { en: 'Constructivism', cn: '解构主义' },
        { en: 'Origami', cn: '折纸' }, // Fixed typo
        { en: 'Curved', cn: '曲线风格' },
        { en: 'Burning Surface', cn: '火焰曲面' },
        { en: 'Sculpture', cn: '雕塑风' },
        { en: 'KODO', cn: '魂动' },
        { en: 'Pebble', cn: '鹅卵石' }, // Fixed typo
        { en: 'AERO', cn: '空气动力学' },
        { en: 'Wedge', cn: '楔形车' },
        { en: 'Bionic', cn: '仿生' },
        { en: 'Alien', cn: '异形' },
        { en: 'Milling', cn: '铣削' },
        { en: 'Cigar', cn: '雪茄型' },
        { en: 'BOX', cn: '盒子' },
        { en: 'Classic', cn: '古典' },
        { en: 'Mid Ages', cn: '中世纪' },
        { en: 'Electronic', cn: '电子' },
        { en: 'Metaverse', cn: '元宇宙' },
        { en: 'Mosaic', cn: '马赛克' },
        { en: 'Parametric', cn: '参数化' }, // Fixed typo
        { en: 'Geometry', cn: '几何' },
        { en: 'Production', cn: '产品风' }, // Fixed typo
        { en: 'Graffiti', cn: '涂鸦' },
        { en: 'JDM', cn: '日式改装' },
        { en: 'Chinese', cn: '中华风' },
        { en: 'Retrowave', cn: '复古波形' }
    ]
};

const spinBtn = document.getElementById('spin-btn');
const promptText = document.getElementById('prompt-text');
const reelIds = ['reel1', 'reel2', 'reel3', 'reel4'];
const itemHeight = 90; // 必须与CSS一致

let isSpinning = false;

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// 生成HTML的函数更新，支持双语结构
function createItemHTML(itemData) {
    // 如果是初始状态的纯文本
    if (typeof itemData === 'string') {
        return `<div class="item"><span class="en">${itemData}</span></div>`;
    }
    // 正常的数据对象
    return `<div class="item">
                <span class="en">${itemData.en}</span>
                <span class="cn">${itemData.cn}</span>
            </div>`;
}

function generateStripContent(reelId, finalResult) {
    const strip = document.getElementById(reelId);
    // 获取当前显示的 HTML
    let currentHTML = strip.lastElementChild ? strip.lastElementChild.outerHTML : createItemHTML({en:'READY',cn:'就绪'});
    
    const pool = data[reelId];
    
    let html = currentHTML;
    for(let i=0; i<15; i++) { // 稍微减少混淆项数量，让动画更紧凑
        html += createItemHTML(getRandom(pool));
    }
    // 最终结果
    html += createItemHTML(finalResult);
    
    strip.innerHTML = html;
    strip.style.transition = 'none';
    strip.style.transform = 'translateY(0)';
}

async function spin() {
    if (isSpinning) return;
    isSpinning = true;
    spinBtn.disabled = true;
    promptText.innerText = ">>> PROCESSING DATA STREAM... \n>>> 数据流处理中...";
    
    const results = {
        reel1: getRandom(data.reel1),
        reel2: getRandom(data.reel2),
        reel3: getRandom(data.reel3),
        reel4: getRandom(data.reel4),
    };

    reelIds.forEach(id => generateStripContent(id, results[id]));

    const promises = reelIds.map((id, index) => {
        return new Promise(resolve => {
            const strip = document.getElementById(id);
            const itemsCount = strip.children.length;
            const targetY = -(itemsCount - 1) * itemHeight; 
            
            setTimeout(() => {
                strip.classList.add('blur-effect');
                // 科技感：更快的启动和更硬的停止
                strip.style.transition = `transform 1.2s cubic-bezier(0.1, 0.9, 0.2, 1.0)`; 
                strip.style.transform = `translateY(${targetY}px)`;
                
                setTimeout(() => {
                    strip.classList.remove('blur-effect');
                    resolve();
                }, 1200);
            }, index * 150); // 更快的交错启动
        });
    });

    await Promise.all(promises);
    generatePrompt(results);
    
    isSpinning = false;
    spinBtn.disabled = false;
}

function generatePrompt(res) {
    // 生成双语 Prompt
    const textEn = `Design a [${res.reel4.en}] style [${res.reel3.en}] brand [${res.reel2.en}], mainly for [${res.reel1.en}].`;
    const textCn = `为 [${res.reel1.cn}] 场景，设计一款 [${res.reel4.cn}] 风格的 [${res.reel3.cn}] 品牌 [${res.reel2.cn}]。`;
    
    const fullText = `>>> MISSION OBJECTIVE:\n${textEn}\n\n>>> 设计任务目标：\n${textCn}`;
    
    promptText.innerText = "";
    let i = 0;
    // 加快打字速度，符合科技感
    const typeWriter = setInterval(() => {
        promptText.innerText += fullText.charAt(i);
        i++;
        if(i > fullText.length - 1) clearInterval(typeWriter);
    }, 25);
}

spinBtn.addEventListener('click', spin);