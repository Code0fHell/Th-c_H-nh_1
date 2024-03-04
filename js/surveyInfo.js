
function submitForm() {
    // Get values from input fields
    const fullName = document.getElementById("fullName").value;

    // Save fullName to localStorage
    localStorage.setItem("fullName", fullName);

    // Redirect to the survey questions page
    window.location.href = "surveyQuestions.html";
}