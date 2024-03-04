const yesNoQuestions = [
    { question: "Câu hỏi 1: Bạn là Nam?", answers: ["Đúng", "Sai"] },
    { question: "Câu hỏi 2: Bạn đang sở hữu một chiếc ô tô?", answers: ["Đúng", "Sai"] },
    { question: "Câu hỏi 3: Bạn đang sở hữu một ngôi nhà?", answer: ["Đúng, Sai"]},
    { question: "Câu hỏi 3: Bạn đang sở hữu một ngôi nhà?", answer: ["Đúng, Sai"]},
    { question: "Câu hỏi 4: Bạn đang độc thân?", answer: ["Đúng, Sai"]},
    { question: "Câu hỏi 5: Bạn đang theo học một trường đại học?", answer: ["Đúng, Sai"]},
    { question: "Câu hỏi 6: Bạn có sở hữu một chú chó?", answer: ["Đúng, Sai"]},
    { question: "Câu hỏi 7: Bạn đang ở Việt Nam?", answer: ["Đúng, Sai"]},
    { question: "Câu hỏi 8: Bạn sở hữu một chiếc Iphone?", answer: ["Đúng, Sai"]},
    { question: "Câu hỏi 9: Bạn đang làm việc tại Google?", answer: ["Đúng, Sai"]},
    { question: "Câu hỏi 10: Bạn sở hữu một biệt thự ven biển?", answer: ["Đúng, Sai"]},
];

// Function to dynamically generate yes/no questions
function generateYesNoQuestions() {
    const yesNoContainer = document.querySelector('.yes_no-question');
    const groupHeading = document.createElement('h3');
    groupHeading.textContent = 'Nhóm 1: Hãy chọn đúng hoặc sai';
    yesNoContainer.appendChild(groupHeading);
    console.log(yesNoContainer);
    for (let i = 0; i < yesNoQuestions.length; i++) {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const label = document.createElement('label');
        label.setAttribute('for', `ys_answer${i + 1}`);
        label.setAttribute('classs', 'question_label');
        label.textContent = yesNoQuestions[i].question;
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('answer');

        const trueRadio = document.createElement('input');
        trueRadio.setAttribute('type', 'radio');
        trueRadio.setAttribute('id', `ys_answer${i + 1}`);
        trueRadio.setAttribute('name', `ys_group${i + 1}`);
        trueRadio.setAttribute('value', 'true');
        trueRadio.setAttribute('class', "ys_answer");
        answerDiv.appendChild(trueRadio);
        const trueLabel = document.createElement('label');
        trueLabel.textContent = 'Đúng';
        trueLabel.setAttribute('for', `ys_answer${i + 1}`);
        trueLabel.setAttribute('class', `ys_answer_label`);
        answerDiv.appendChild(trueLabel);
        const falseRadio = document.createElement('input');
        falseRadio.setAttribute('type', 'radio');
        falseRadio.setAttribute('id', `ys_answer${i + 1}`);
        falseRadio.setAttribute('name', `ys_group${i + 1}`);
        falseRadio.setAttribute('value', 'false');
        falseRadio.setAttribute('class', "ys_answer");
        answerDiv.appendChild(falseRadio);
        const falseLabel = document.createElement('label');
        falseLabel.textContent = 'Sai';
        falseLabel.setAttribute('for', `ys_answer${i + 1}`);
        falseLabel.setAttribute('class', `ys_answer_label`);
        answerDiv.appendChild(falseLabel);
        questionDiv.appendChild(label);
        questionDiv.appendChild(answerDiv);
        yesNoContainer.appendChild(questionDiv);
    }
}

// Call the function to generate yes/no questions
generateYesNoQuestions();

const chooseOneQuestions = [
    {
        id: 1,
        question: "Bạn có thường xuyên mua sắm không?",
        answer: ["Luôn luôn","Thường xuyên", "Thỉnh thoảng", "Không bao giờ"]
    },
    {   
        id: 2,
        question: "Bạn có hay mua sắm trên ứng dụng Shopee không?",
        answer: ["Luôn luôn","Thường xuyên", "Thỉnh thoảng", "Không bao giờ"]
    },
    {
        id: 3,
        question: "Bạn có hay mua sắm trên ứng dụng Lazada không?",
        answer: ["Luôn luôn","Thường xuyên", "Thỉnh thoảng", "Không bao giờ"]
    },
    {
        id: 4,
        question: "Bạn có hay mua sắm trên ứng dụng Tiki không?",
        answer: ["Luôn luôn","Thường xuyên", "Thỉnh thoảng", "Không bao giờ"]
    },
    {
        id: 5,
        question: "Bạn có hay mua sắm trên ứng dụng Taobao không?",
        answer: ["Luôn luôn","Thường xuyên", "Thỉnh thoảng", "Không bao giờ"]
    },
    {
        id: 6,
        question: "Bạn có thường xuyên mua sắm trên web Amazon không?",
        answer: ["Luôn luôn","Thường xuyên", "Thỉnh thoảng", "Không bao giờ"]
    },
    {
        id: 7,
        question: "Bạn có thường xuyên mua sắm trên web Shopify không?",
        answer: ["Luôn luôn","Thường xuyên", "Thỉnh thoảng", "Không bao giờ"]
    },
    {
        id: 8,
        question: "Bạn có thường xuyên mua sắm trên web Bitis không?",
        answer: ["Luôn luôn","Thường xuyên", "Thỉnh thoảng", "Không bao giờ"]
    },
    {
        id: 9,
        question: "Bạn có thường xuyên mua sắm trên web Canifa không?",
        answer: ["Luôn luôn","Thường xuyên", "Thỉnh thoảng", "Không bao giờ"]
    },
    {
        id: 10,
        question: "Bạn có thường xuyên mua sắm trên web Uniqlo không?",
        answer: ["Luôn luôn","Thường xuyên", "Thỉnh thoảng", "Không bao giờ"]
    }
]

// Function to dynamically generate choose one questions
function generateChooseOneQuestions() {
    const chooseOneContainer = document.querySelector('.choose_one_question');
    console.log(chooseOneContainer);
    const groupHeading = document.createElement('h3');
    groupHeading.textContent = 'Nhóm 2: Hãy chọn 1 trong 4 đáp án';
    chooseOneContainer.appendChild(groupHeading);
    for (let i = 0; i < chooseOneQuestions.length; i++) {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const label = document.createElement('label');
        label.setAttribute('for', `co_answer${i + 1}`);
        label.setAttribute('classs', 'question_label');
        label.textContent = chooseOneQuestions[i].question;

        const answerDiv = document.createElement('div');
        answerDiv.classList.add('answer');
        for (let j = 0; j < 4; j++) {
            const radio = document.createElement('input');
            radio.setAttribute('type', 'radio');
            radio.setAttribute('id', `co_answer${i + 1}`);
            radio.setAttribute('name', `co_group${i + 1}`);
            radio.setAttribute('value', `Option ${j + 1}`);
            radio.setAttribute('class', 'co_answer_radio')
            answerDiv.appendChild(radio);
            const radioLabel = document.createElement('label');
            radioLabel.textContent = chooseOneQuestions[i].answer[j];
            radioLabel.setAttribute('for', `co_answer${i + 1}_${j + 1}`);
            radioLabel.setAttribute('class', 'co_answer_label');
            answerDiv.appendChild(radioLabel);
            questionDiv.appendChild(answerDiv);
        }

        chooseOneContainer.appendChild(label);
        chooseOneContainer.appendChild(questionDiv);
    }
}

// Call the function to generate choose one questions
generateChooseOneQuestions();

const chooseManyQuestions = [
    {
        question: "Bạn thường xuyên mua hàng ở ứng dụng nào sau đây:",
        answer: ["Lazada", "Tiki", "Shopee", "Taobao"]
    },
    {
        question: "Bạn thường xuyên mua hàng ở ứng dụng nào sau đây:",
        answer: ["Lazada", "Tiki", "Shopee", "Taobao"]
    },
    {
        question: "Bạn thường xuyên mua hàng ở ứng dụng nào sau đây:",
        answer: ["Lazada", "Tiki", "Shopee", "Taobao"]
    },
    {
        question: "Bạn thường xuyên mua hàng ở ứng dụng nào sau đây:",
        answer: ["Lazada", "Tiki", "Shopee", "Taobao"]
    },
    {
        question: "Bạn thường xuyên mua hàng ở ứng dụng nào sau đây:",
        answer: ["Lazada", "Tiki", "Shopee", "Taobao"]
    },
    {
        question: "Bạn thường xuyên mua hàng ở ứng dụng nào sau đây:",
        answer: ["Lazada", "Tiki", "Shopee", "Taobao"]
    },
    {
        question: "Bạn thường xuyên mua hàng ở ứng dụng nào sau đây:",
        answer: ["Lazada", "Tiki", "Shopee", "Taobao"]
    },
    {
        question: "Bạn thường xuyên mua hàng ở ứng dụng nào sau đây:",
        answer: ["Lazada", "Tiki", "Shopee", "Taobao"]
    },
    {
        question: "Bạn thường xuyên mua hàng ở ứng dụng nào sau đây:",
        answer: ["Lazada", "Tiki", "Shopee", "Taobao"]
    },
    {
        question: "Bạn thường xuyên mua hàng ở ứng dụng nào sau đây:",
        answer: ["Lazada", "Tiki", "Shopee", "Taobao"]
    }
]

// Function to dynamically generate choose many questions
function generateChooseManyQuestions() {
    const chooseManyContainer = document.querySelector('.choose_many_question');
    const groupHeading = document.createElement('h3');
    groupHeading.textContent = 'Nhóm 3: Hãy chọn nhiều đáp án trong 4 đáp án';
    chooseManyContainer.appendChild(groupHeading);
    for (let i = 0; i < chooseManyQuestions.length; i++) {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const label = document.createElement('label');
        label.setAttribute('for', `cm_answer${i + 1}`);
        label.setAttribute('classs', 'question_label');
        label.textContent = `${chooseManyQuestions[i].question}`;

        for (let j = 0; j < chooseManyQuestions[i].answer.length; j++) {
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('id', `cm_answer${i + 1}_${j + 1}`);
            checkbox.setAttribute('value', chooseManyQuestions[i].answer[j]);

            const checkboxLabel = document.createElement('label');
            checkboxLabel.textContent = chooseManyQuestions[i].answer[j];
            checkboxLabel.setAttribute('for', `cm_answer${i + 1}_${j + 1}`);

            questionDiv.appendChild(checkbox);
            questionDiv.appendChild(checkboxLabel);
        }

        chooseManyContainer.appendChild(label);
        chooseManyContainer.appendChild(questionDiv);
    }
}

// Call the function to generate choose many questions
generateChooseManyQuestions();

const essayQuestions = [
    {
        question: "Bạn thường xuyên điện thoại ở ứng dụng nào?"
    },
    {
        question: "Bạn thường xuyên mua đồ gia dụng ở ứng dụng nào?"
    },
    {
        question: "Bạn thường xuyên mua quần áo ở ứng dụng nào"
    },
    {
        question: "Bạn thường xuyên mua đồ ăn ở ứng dụng nào?"
    },
    {
        question: "Bạn thường xuyên mua giày dép ở ứng dụng nào?"
    },
    {
        question: "Bạn thường xuyên mua đồ dùng nội trợ ở ứng dụng nào?"
    },
    {
        question: "Bạn thường xuyên mua đồ dùng cá nhân ở ứng dụng nào?"
    },
    {
        question: "Bạn thường xuyên mua laptop ở ứng dụng nào?"
    },
    {
        question: "Bạn thường xuyên mua phụ kiện máy tính ở ứng dụng nào?"
    },
    {
        question: "Bạn thường xuyên mua phụ kiện máy tính ở ứng dụng nào?"
    }
]

// Function to dynamically generate essay questions
function generateEssayQuestions() {
    const essayContainer = document.querySelector('.essay_question');
    const groupHeading = document.createElement('h3');
    groupHeading.textContent = 'Nhóm 4: Hãy trả lời các câu hỏi sau:';
    essayContainer.appendChild(groupHeading);
    for (let i = 0; i < essayQuestions.length; i++) {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const label = document.createElement('label');
        label.setAttribute('for', `ess_answer${i + 1}`);
        label.setAttribute('classs', 'question_label');
        label.textContent = `${essayQuestions[i].question}`;

        const answerDiv = document.createElement('div');
        answerDiv.classList.add('answer');

        const textInput = document.createElement('input');
        textInput.setAttribute('type', 'text');
        textInput.setAttribute('id', `ess_answer${i + 1}`);
        answerDiv.appendChild(textInput);

        questionDiv.appendChild(label);
        questionDiv.appendChild(answerDiv);

        essayContainer.appendChild(questionDiv);
    }
}

// Call the function to generate essay questions
generateEssayQuestions();

// Lưu câu hỏi và câu trả lời đã chọn vào sessionStorage
function saveSurveyData() {
    // Lưu thông tin câu hỏi và câu trả lời của Yes/No
    const yesNoData = {
        questions: [],
        answers: []
    };
    document.querySelectorAll('.yes_no-question .question').forEach((question, index) => {
        const questionText = question.querySelector('label').textContent;
        const answer = document.querySelector(`input[name="ys_group${index + 1}"]:checked`);
        if (answer) {
            yesNoData.questions.push(questionText);
            yesNoData.answers.push(answer.value);
        }
    });
    sessionStorage.setItem('yesNoData', JSON.stringify(yesNoData));

    // Lưu thông tin câu hỏi và câu trả lời của Choose One
    const chooseOneData = {
        questions: [],
        answers: []
    };
    document.querySelectorAll('.choose_one_question .question').forEach((question, index) => {
        const questionText = question.querySelector('label').textContent;
        const answer = document.querySelector(`input[name="co_group${index + 1}"]:checked`);
        if (answer) {
            chooseOneData.questions.push(questionText);
            chooseOneData.answers.push(answer.value);
        }
    });
    sessionStorage.setItem('chooseOneData', JSON.stringify(chooseOneData));

    // Lưu thông tin câu hỏi và câu trả lời của Choose Many
    const chooseManyData = {
        questions: [],
        answers: []
    };
    document.querySelectorAll('.choose_many_question .question').forEach((question, index) => {
        const questionText = question.querySelector('label').textContent;
        const answers = [];
        question.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
            answers.push(checkbox.value);
        });
        if (answers.length > 0) {
            chooseManyData.questions.push(questionText);
            chooseManyData.answers.push(answers);
        }
    });
    sessionStorage.setItem('chooseManyData', JSON.stringify(chooseManyData));

    // Lưu thông tin câu hỏi và câu trả lời của Essay
    const essayData = {
        questions: [],
        answers: []
    };
    document.querySelectorAll('.essay_question .question').forEach((question, index) => {
        const questionText = question.querySelector('label').textContent;
        const answer = document.querySelector(`#ess_answer${index + 1}`);
        if (answer) {
            essayData.questions.push(questionText);
            essayData.answers.push(answer.value);
        }
    });
    sessionStorage.setItem('essayData', JSON.stringify(essayData));
    window.location.href ="results.html";
}