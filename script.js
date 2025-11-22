class SexualRepressionTest {
    constructor() {
        this.questions = [
            {
                id: 1,
                text: "当看到亲密关系的画面时，您会感到：",
                options: [
                    { text: "非常舒适自然", value: 1 },
                    { text: "略微有些不自在", value: 2 },
                    { text: "明显感到不适", value: 3 },
                    { text: "极度不自在或回避", value: 4 }
                ],
                dimension: "emotional"
            },
            {
                id: 2,
                text: "您如何看待自己的性需求和欲望？",
                options: [
                    { text: "完全接纳并正常看待", value: 1 },
                    { text: "基本接纳但有时会犹豫", value: 2 },
                    { text: "经常感到羞耻或矛盾", value: 3 },
                    { text: "强烈否认或压抑", value: 4 }
                ],
                dimension: "attitude"
            },
            {
                id: 3,
                text: "在与伴侣讨论性话题时，您的态度是：",
                options: [
                    { text: "开放、自然、直接", value: 1 },
                    { text: "能够讨论但有些紧张", value: 2 },
                    { text: "非常困难且回避", value: 3 },
                    { text: "完全无法提及", value: 4 }
                ],
                dimension: "communication"
            },
            {
                id: 4,
                text: "您如何处理性冲动或性幻想？",
                options: [
                    { text: "健康地接纳和表达", value: 1 },
                    { text: "私下接受但外在压抑", value: 2 },
                    { text: "感到内疚并试图控制", value: 3 },
                    { text: "强烈抑制和否认", value: 4 }
                ],
                dimension: "behavioral"
            },
            {
                id: 5,
                text: "您对性知识的了解程度如何？",
                options: [
                    { text: "积极主动学习和了解", value: 1 },
                    { text: "有一定了解但不够深入", value: 2 },
                    { text: "知识有限且不愿深究", value: 3 },
                    { text: "刻意回避相关信息", value: 4 }
                ],
                dimension: "cognitive"
            },
            {
                id: 6,
                text: "在亲密关系中，您更倾向于：",
                options: [
                    { text: "积极表达情感和需求", value: 1 },
                    { text: "能够表达但有限度", value: 2 },
                    { text: "经常压抑真实感受", value: 3 },
                    { text: "几乎完全不表达", value: 4 }
                ],
                dimension: "relational"
            },
            {
                id: 7,
                text: "您如何看待社会对性道德的看法？",
                options: [
                    { text: "理性看待并形成自己观点", value: 1 },
                    { text: "受一定影响但保持独立", value: 2 },
                    { text: "很大程度上被社会观点束缚", value: 3 },
                    { text: "完全遵循传统道德观念", value: 4 }
                ],
                dimension: "social"
            },
            {
                id: 8,
                text: "当出现性需求时，您的第一反应是：",
                options: [
                    { text: "正常看待并寻找合适方式满足", value: 1 },
                    { text: "承认需求但有所顾虑", value: 2 },
                    { text: "感到冲突和矛盾", value: 3 },
                    { text: "立即否认或压抑", value: 4 }
                ],
                dimension: "behavioral"
            },
            {
                id: 9,
                text: "您对自己的身体形象和性吸引力：",
                options: [
                    { text: "自信并积极看待", value: 1 },
                    { text: "基本接受但有时不自信", value: 2 },
                    { text: "经常感到自卑或不满意", value: 3 },
                    { text: "极度否定自己的魅力", value: 4 }
                ],
                dimension: "self-image"
            },
            {
                id: 10,
                text: "在性教育方面，您认为：",
                options: [
                    { text: "应该公开、科学地讨论", value: 1 },
                    { text: "有必要但应该适度", value: 2 },
                    { text: "应该保持低调和保守", value: 3 },
                    { text: "应该尽量避免或禁止", value: 4 }
                ],
                dimension: "cognitive"
            },
            {
                id: 11,
                text: "您如何处理与性相关的梦境或幻想？",
                options: [
                    { text: "正常看待并反思其意义", value: 1 },
                    { text: "有些困惑但能够接受", value: 2 },
                    { text: "感到羞耻或不安", value: 3 },
                    { text: "极力否认和忘记", value: 4 }
                ],
                dimension: "emotional"
            },
            {
                id: 12,
                text: "在面对他人的性话题讨论时，您会：",
                options: [
                    { text: "自然参与并分享观点", value: 1 },
                    { text: "倾听但很少发表意见", value: 2 },
                    { text: "感到不适并尽量回避", value: 3 },
                    { text: "立刻转换话题或离开", value: 4 }
                ],
                dimension: "communication"
            },
            {
                id: 13,
                text: "您对自己的性历史或经历的态度是：",
                options: [
                    { text: "坦然接受并从中学习", value: 1 },
                    { text: "基本接受但有遗憾", value: 2 },
                    { text: "感到后悔或羞耻", value: 3 },
                    { text: "极力否认或不愿面对", value: 4 }
                ],
                dimension: "attitude"
            },
            {
                id: 14,
                text: "在选择伴侣时，性和谐对您的重要性：",
                options: [
                    { text: "非常重要且优先考虑", value: 1 },
                    { text: "重要但不是首要因素", value: 2 },
                    { text: "不太重要或可以妥协", value: 3 },
                    { text: "几乎不重要或刻意忽略", value: 4 }
                ],
                dimension: "relational"
            },
            {
                id: 15,
                text: "您如何平衡性需求和其他生活需求？",
                options: [
                    { text: "能够健康地平衡各个方面", value: 1 },
                    { text: "基本平衡但偶尔失衡", value: 2 },
                    { text: "经常感到冲突和矛盾", value: 3 },
                    { text: "严重忽视或压抑性需求", value: 4 }
                ],
                dimension: "behavioral"
            },
            {
                id: 16,
                text: "您对媒体中与性相关内容的看法：",
                options: [
                    { text: "理性看待并选择性接受", value: 1 },
                    { text: "有所保留但不过度排斥", value: 2 },
                    { text: "大多持批评态度", value: 3 },
                    { text: "强烈反对和回避", value: 4 }
                ],
                dimension: "cognitive"
            },
            {
                id: 17,
                text: "在亲密关系中，您表达爱意的方式：",
                options: [
                    { text: "包括言语、身体等多方面", value: 1 },
                    { text: "以非性方式为主", value: 2 },
                    { text: "避免身体亲密接触", value: 3 },
                    { text: "几乎不表达亲密", value: 4 }
                ],
                dimension: "relational"
            },
            {
                id: 18,
                text: "您如何看待自己的性权利和边界：",
                options: [
                    { text: "明确了解并坚决维护", value: 1 },
                    { text: "基本了解但不够坚定", value: 2 },
                    { text: "模糊不清或经常妥协", value: 3 },
                    { text: "完全忽视或任人摆布", value: 4 }
                ],
                dimension: "social"
            },
            {
                id: 19,
                text: "在面对性挫折或性困难时，您会：",
                options: [
                    { text: "积极寻求解决方案", value: 1 },
                    { text: "尝试解决但容易放弃", value: 2 },
                    { text: "感到羞耻并独自承受", value: 3 },
                    { text: "完全回避或否认问题", value: 4 }
                ],
                dimension: "emotional"
            },
            {
                id: 20,
                text: "总体而言，您认为性在您生活中的地位是：",
                options: [
                    { text: "重要且健康的组成部分", value: 1 },
                    { text: "有一定位置但不是核心", value: 2 },
                    { text: "边缘化或不太重要", value: 3 },
                    { text: "希望从生活中完全排除", value: 4 }
                ],
                dimension: "attitude"
            }
        ];

        this.currentQuestion = 0;
        this.answers = [];
        this.dimensions = {
            emotional: { name: "情感反应", score: 0, questions: 0 },
            attitude: { name: "态度认知", score: 0, questions: 0 },
            communication: { name: "沟通表达", score: 0, questions: 0 },
            behavioral: { name: "行为模式", score: 0, questions: 0 },
            cognitive: { name: "认知水平", score: 0, questions: 0 },
            relational: { name: "关系亲密", score: 0, questions: 0 },
            social: { name: "社会适应", score: 0, questions: 0 },
            "self-image": { name: "自我形象", score: 0, questions: 0 }
        };

        this.init();
    }

    init() {
        console.log('开始初始化精品出版平台...');
        this.setupEventListeners();
        this.showWelcomeSection();
        this.calculateDimensionCounts();
        console.log('初始化完成！');
    }

    setupEventListeners() {
        console.log('设置事件监听器...');
        
        // Hero section buttons
        const startBtn = document.getElementById('startTest');
        const startFromWelcomeBtn = document.getElementById('startTestFromWelcome');
        
        console.log('查找测试按钮...');
        console.log('startBtn:', startBtn);
        console.log('startFromWelcomeBtn:', startFromWelcomeBtn);
        
        if (startBtn) {
            startBtn.addEventListener('click', (e) => {
                console.log('主导航测试按钮被点击');
                e.preventDefault();
                this.startTest();
            });
            console.log('主导航测试按钮监听器已设置');
        } else {
            console.error('找不到主导航测试按钮 #startTest');
        }
        
        if (startFromWelcomeBtn) {
            startFromWelcomeBtn.addEventListener('click', (e) => {
                console.log('欢迎页面测试按钮被点击');
                e.preventDefault();
                this.startTest();
            });
            console.log('欢迎页面测试按钮监听器已设置');
        } else {
            console.error('找不到欢迎页面测试按钮 #startTestFromWelcome');
        }
        
        // Navigation buttons
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');
        const restartBtn = document.getElementById('restartBtn');
        const shareBtn = document.getElementById('shareBtn');
        
        if (prevBtn) prevBtn.addEventListener('click', () => this.previousQuestion());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextQuestion());
        if (submitBtn) submitBtn.addEventListener('click', () => this.submitTest());
        if (restartBtn) restartBtn.addEventListener('click', () => this.restartTest());
        if (shareBtn) shareBtn.addEventListener('click', () => this.shareResults());
        
        // Add smooth scroll behavior
        this.setupSmoothScroll();
        
        // Add navigation scroll effects
        this.setupNavScroll();
        
        // Setup mobile menu
        this.setupMobileMenu();
    }

    calculateDimensionCounts() {
        this.questions.forEach(question => {
            if (this.dimensions[question.dimension]) {
                this.dimensions[question.dimension].questions++;
            }
        });
    }

    showWelcomeSection() {
        const sections = ['welcomeSection', 'testSection', 'resultSection'];
        sections.forEach(section => {
            const element = document.getElementById(section);
            if (section === 'welcomeSection') {
                element.classList.remove('hidden');
                this.animateSection(element);
            } else {
                element.classList.add('hidden');
            }
        });
        
        // Reset navigation scroll
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    startTest() {
        const welcomeSection = document.getElementById('welcomeSection');
        const testSection = document.getElementById('testSection');
        
        // Fade out welcome section
        welcomeSection.style.opacity = '0';
        
        setTimeout(() => {
            welcomeSection.classList.add('hidden');
            welcomeSection.style.opacity = '1';
            testSection.classList.remove('hidden');
            
            this.currentQuestion = 0;
            this.answers = [];
            this.showQuestion();
            this.animateSection(testSection);
            
            // Smooth scroll to test section
            setTimeout(() => {
                testSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }, 300);
    }

    showQuestion() {
        const question = this.questions[this.currentQuestion];
        document.getElementById('questionText').textContent = question.text;
        
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.innerHTML = `
                <input type="radio" id="option${index}" name="answer" value="${option.value}">
                <label for="option${index}">${option.text}</label>
            `;
            
            optionElement.addEventListener('click', () => {
                // Add selection animation
                optionElement.style.transform = 'scale(0.98)';
                
                setTimeout(() => {
                    document.querySelectorAll('.option').forEach(opt => {
                        opt.classList.remove('selected');
                        opt.style.transform = 'scale(1)';
                    });
                    
                    optionElement.classList.add('selected');
                    optionElement.style.transform = 'scale(1)';
                    optionElement.querySelector('input').checked = true;
                    this.answers[this.currentQuestion] = option.value;
                    this.updateNavigationButtons();
                    
                    // Add subtle feedback
                    this.createRippleEffect(optionElement);
                }, 100);
            });
            
            optionsContainer.appendChild(optionElement);
        });

        this.updateProgress();
        this.updateNavigationButtons();
        
        // 恢复之前的答案
        if (this.answers[this.currentQuestion]) {
            const selectedOption = document.querySelector(`input[value="${this.answers[this.currentQuestion]}"]`);
            if (selectedOption) {
                selectedOption.checked = true;
                selectedOption.closest('.option').classList.add('selected');
            }
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        document.getElementById('progress').style.width = `${progress}%`;
        document.getElementById('progressText').textContent = `${this.currentQuestion + 1} / ${this.questions.length}`;
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');
        
        prevBtn.disabled = this.currentQuestion === 0;
        
        if (this.currentQuestion === this.questions.length - 1) {
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
            submitBtn.disabled = !this.answers[this.currentQuestion];
        } else {
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
            nextBtn.disabled = !this.answers[this.currentQuestion];
        }
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.showQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1 && this.answers[this.currentQuestion]) {
            this.currentQuestion++;
            this.showQuestion();
        }
    }

    submitTest() {
        if (this.answers.length === this.questions.length) {
            this.calculateResults();
            this.showResults();
        }
    }

    calculateResults() {
        // 重置维度得分
        Object.keys(this.dimensions).forEach(key => {
            this.dimensions[key].score = 0;
        });

        // 计算总分和各维度得分
        let totalScore = 0;
        this.answers.forEach((answer, index) => {
            const question = this.questions[index];
            totalScore += answer;
            if (this.dimensions[question.dimension]) {
                this.dimensions[question.dimension].score += answer;
            }
        });

        // 计算各维度平均分
        Object.keys(this.dimensions).forEach(key => {
            const dimension = this.dimensions[key];
            dimension.averageScore = dimension.questions > 0 ? 
                (dimension.score / dimension.questions).toFixed(2) : 0;
        });

        // 计算总压抑指数（20-80分制，转换为0-100）
        this.totalScore = totalScore;
        this.repressionIndex = ((totalScore - 20) / 60) * 100;
    }

    showResults() {
        const testSection = document.getElementById('testSection');
        const resultSection = document.getElementById('resultSection');
        
        // Fade out test section
        testSection.style.opacity = '0';
        
        setTimeout(() => {
            testSection.classList.add('hidden');
            testSection.style.opacity = '1';
            resultSection.classList.remove('hidden');
            
            this.displayScore();
            this.displayAnalysis();
            this.displayDimensions();
            this.displaySuggestions();
            this.animateSection(resultSection);
            
            // Smooth scroll to results
            setTimeout(() => {
                resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }, 300);
    }

    displayScore() {
        const scoreText = document.getElementById('scoreText');
        const scoreLevel = document.getElementById('scoreLevel');
        
        scoreText.textContent = Math.round(this.repressionIndex);
        
        let level, levelText, color;
        if (this.repressionIndex < 25) {
            level = '低压抑';
            levelText = '您对性持健康开放的态度';
            color = '#4CAF50';
        } else if (this.repressionIndex < 50) {
            level = '轻度压抑';
            levelText = '存在一定的压抑倾向，建议适当调整';
            color = '#FF9800';
        } else if (this.repressionIndex < 75) {
            level = '中度压抑';
            levelText = '压抑程度较高，建议寻求专业指导';
            color = '#FF5722';
        } else {
            level = '重度压抑';
            levelText = '压抑程度很高，强烈建议寻求专业帮助';
            color = '#F44336';
        }
        
        scoreLevel.textContent = level;
        scoreLevel.style.color = color;
        
        // 添加详细说明
        const scoreCircle = document.querySelector('.score-circle');
        scoreCircle.style.background = `conic-gradient(${color} 0deg ${this.repressionIndex * 3.6}deg, #f0f0f0 ${this.repressionIndex * 3.6}deg 360deg)`;
    }

    displayAnalysis() {
        const analysisContent = document.getElementById('analysisContent');
        
        let analysisText = '';
        if (this.repressionIndex < 25) {
            analysisText = `
                <p>您的性压抑指数较低，这表明您对性相关话题和经历持相对健康、开放的态度。</p>
                <p>您能够：</p>
                <ul>
                    <li>自然地接受和表达自己的性需求</li>
                    <li>健康地看待性在生活中的作用</li>
                    <li>与他人进行开放的性相关沟通</li>
                    <li>平衡性需求与其他生活方面的关系</li>
                </ul>
                <p>建议继续保持这种健康的性心理状态，同时关注伴侣的需求和感受。</p>
            `;
        } else if (this.repressionIndex < 50) {
            analysisText = `
                <p>您的性压抑指数处于轻度范围，显示您在某些方面可能存在一定的压抑倾向。</p>
                <p>可能的表现包括：</p>
                <ul>
                    <li>在特定情境下对性话题感到不适</li>
                    <li>偶尔压抑或质疑自己的性需求</li>
                    <li>在亲密关系中表达不够充分</li>
                    <li>受社会或文化观念的一定影响</li>
                </ul>
                <p>建议通过自我反思和适当的学习来进一步提升性心理健康水平。</p>
            `;
        } else if (this.repressionIndex < 75) {
            analysisText = `
                <p>您的性压抑指数处于中度范围，表明您在性心理方面存在明显的压抑问题。</p>
                <p>常见特征包括：</p>
                <ul>
                    <li>频繁感到与性相关的冲突和矛盾</li>
                    <li>难以正常表达和满足性需求</li>
                    <li>在亲密关系中存在显著障碍</li>
                    <li>对性话题产生强烈的回避反应</li>
                </ul>
                <p>强烈建议寻求专业心理咨询师的帮助，以更好地理解和处理这些压抑情绪。</p>
            `;
        } else {
            analysisText = `
                <p>您的性压抑指数处于重度范围，这表明您在性心理方面存在严重的压抑问题。</p>
                <p>严重压抑可能表现为：</p>
                <ul>
                    <li>几乎完全否认或压抑性需求</li>
                    <li>严重的亲密关系障碍</li>
                    <li>强烈的羞耻感和内疚感</li>
                    <li>对性相关话题的极度回避</li>
                </ul>
                <p>强烈建议立即寻求专业心理健康服务，这将有助于您改善生活质量并建立更健康的人际关系。</p>
            `;
        }
        
        analysisContent.innerHTML = analysisText;
    }

    displayDimensions() {
        const dimensionsContent = document.getElementById('dimensionsContent');
        let html = '';
        
        Object.keys(this.dimensions).forEach(key => {
            const dimension = this.dimensions[key];
            const percentage = ((dimension.averageScore - 1) / 3) * 100;
            
            html += `
                <div class="dimension-item">
                    <div class="dimension-header">
                        <span class="dimension-name">${dimension.name}</span>
                        <span class="dimension-score">${dimension.averageScore}/4.0</span>
                    </div>
                    <div class="dimension-bar">
                        <div class="dimension-fill" style="width: ${percentage}%"></div>
                    </div>
                </div>
            `;
        });
        
        dimensionsContent.innerHTML = html;
    }

    displaySuggestions() {
        const suggestionsContent = document.getElementById('suggestionsContent');
        
        let suggestions = '';
        
        // 根据得分最高的维度提供针对性建议
        const sortedDimensions = Object.keys(this.dimensions).sort((a, b) => 
            this.dimensions[b].averageScore - this.dimensions[a].averageScore
        );
        
        const topDimensions = sortedDimensions.slice(0, 3);
        
        suggestions = '<div class="suggestions-list">';
        
        topDimensions.forEach(key => {
            const dimension = this.dimensions[key];
            if (dimension.averageScore >= 2.5) {
                suggestions += this.getSuggestionForDimension(key, dimension);
            }
        });
        
        suggestions += `
            <div class="general-suggestion">
                <h4>通用建议：</h4>
                <ul>
                    <li>保持开放的学习态度，了解科学的性知识</li>
                    <li>培养自我接纳的能力，认识到性需求的正常性</li>
                    <li>加强沟通技巧，学会表达自己的需求和感受</li>
                    <li>必要时寻求专业心理咨询师的帮助</li>
                    <li>建立健康的亲密关系模式</li>
                </ul>
            </div>
        </div>`;
        
        suggestionsContent.innerHTML = suggestions;
    }

    getSuggestionForDimension(dimensionKey, dimension) {
        const suggestions = {
            emotional: {
                title: '情感反应方面',
                content: `
                    <p>您在情感反应方面表现出较高的压抑倾向，建议：</p>
                    <ul>
                        <li>学会识别和接受自己的情绪</li>
                        <li>通过日记或冥想等方式了解内心感受</li>
                        <li>在安全的环境中尝试表达真实情感</li>
                    </ul>
                `
            },
            attitude: {
                title: '态度认知方面',
                content: `
                    <p>您在态度认知方面需要调整，建议：</p>
                    <ul>
                        <li>阅读科学、权威的性教育材料</li>
                        <li>反思社会文化对您观念的影响</li>
                        <li>尝试建立更开放、包容的价值观</li>
                    </ul>
                `
            },
            communication: {
                title: '沟通表达方面',
                content: `
                    <p>您在沟通表达方面存在困难，建议：</p>
                    <ul>
                        <li>从简单的日常话题开始练习表达</li>
                        <li>学习非暴力沟通技巧</li>
                        <li>寻找信任的人进行渐进式的交流练习</li>
                    </ul>
                `
            },
            behavioral: {
                title: '行为模式方面',
                content: `
                    <p>您在行为模式上表现出压抑，建议：</p>
                    <ul>
                        <li>逐步接触让自己不适的情境</li>
                        <li>设定小的、可实现的改变目标</li>
                        <li>寻求行为疗法或暴露疗法的专业指导</li>
                    </ul>
                `
            },
            cognitive: {
                title: '认知水平方面',
                content: `
                    <p>您的认知结构可能需要更新，建议：</p>
                    <ul>
                        <li>主动学习现代性科学知识</li>
                        <li>挑战自己的固有观念和偏见</li>
                        <li>接触多元化的观点和经验</li>
                    </ul>
                `
            },
            relational: {
                title: '关系亲密方面',
                content: `
                    <p>您在亲密关系方面需要改善，建议：</p>
                    <ul>
                        <li>学习建立健康边界</li>
                        <li>练习表达爱和情感需求</li>
                        <li>考虑伴侣关系咨询</li>
                    </ul>
                `
            },
            social: {
                title: '社会适应方面',
                content: `
                    <p>您在社会适应方面存在挑战，建议：</p>
                    <ul>
                        <li>识别和质疑不合理的社会期望</li>
                        <li>寻找支持性的社交环境</li>
                        <li>培养自己的独立判断能力</li>
                    </ul>
                `
            },
            'self-image': {
                title: '自我形象方面',
                content: `
                    <p>您的自我形象需要提升，建议：</p>
                    <ul>
                        <li>关注自己的优点和价值</li>
                        <li>练习积极的自我对话</li>
                        <li>寻求个人成长和自我提升的机会</li>
                    </ul>
                `
            }
        };
        
        const suggestion = suggestions[dimensionKey];
        return `
            <div class="specific-suggestion">
                <h4>${suggestion.title}</h4>
                ${suggestion.content}
            </div>
        `;
    }

    restartTest() {
        this.currentQuestion = 0;
        this.answers = [];
        Object.keys(this.dimensions).forEach(key => {
            this.dimensions[key].score = 0;
        });
        this.showWelcomeSection();
    }

    shareResults() {
        const shareText = `我刚刚完成了性压抑指数测试，我的压抑指数是${Math.round(this.repressionIndex)}分。这是一个专业的心理健康评估工具，推荐你也来测试一下！`;
        
        if (navigator.share) {
            navigator.share({
                title: '性压抑指数测试结果',
                text: shareText
            }).catch(err => console.log('分享失败', err));
        } else {
            // 复制到剪贴板
            navigator.clipboard.writeText(shareText).then(() => {
                alert('测试结果已复制到剪贴板，您可以分享给朋友了！');
            });
        }
    }
}

    animateSection(section) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.8s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100);
    }

    createRippleEffect(element) {
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(0, 113, 227, 0.3)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'translate(-50%, -50%) scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    setupSmoothScroll() {
        // Add smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupNavScroll() {
        let lastScrollY = window.scrollY;
        const navbar = document.querySelector('.navbar');
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up or at top
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });
    }

    setupMobileMenu() {
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                mobileMenuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.textContent = '☰';
                }
            });
            
            // Close menu when clicking on nav links
            navMenu.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.textContent = '☰';
                });
            });
        }
    }
}

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 初始化测试
document.addEventListener('DOMContentLoaded', () => {
    try {
        new SexualRepressionTest();
        console.log('精品出版平台初始化成功');
    } catch (error) {
        console.error('初始化失败:', error);
    }
});