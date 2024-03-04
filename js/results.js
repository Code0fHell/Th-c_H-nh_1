// Hiển thị lại thông tin từ sessionStorage
document.addEventListener('DOMContentLoaded', function () {
    // Hiển thị thông tin câu hỏi và câu trả lời của Yes/No
    const yesNoData = JSON.parse(sessionStorage.getItem('yesNoData'));
    if (yesNoData) {
        displayData('yesNoTable', yesNoData.questions, yesNoData.answers);
    }

    // Hiển thị thông tin câu hỏi và câu trả lời của Choose One
    const chooseOneData = JSON.parse(sessionStorage.getItem('chooseOneData'));
    if (chooseOneData) {
        displayData('chooseOneTable', chooseOneData.questions, chooseOneData.answers);
    }

    // Hiển thị thông tin câu hỏi và câu trả lời của Choose Many
    const chooseManyData = JSON.parse(sessionStorage.getItem('chooseManyData'));
    if (chooseManyData) {
        displayData('chooseManyTable', chooseManyData.questions, chooseManyData.answers);
    }

    // Hiển thị thông tin câu hỏi và câu trả lời của Essay
    const essayData = JSON.parse(sessionStorage.getItem('essayData'));
    if (essayData) {
        displayData('essayTable', essayData.questions, essayData.answers);
    }
});

// Hàm hiển thị thông tin vào bảng
function displayData(tableId, questions, answers) {
    const table = document.getElementById(tableId);
    const tbody = document.createElement('tbody');

    for (let i = 0; i < questions.length; i++) {
        const row = tbody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.textContent = questions[i];
        cell2.textContent = answers[i];
    }

    table.appendChild(tbody);
}