// loading screen
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    // Simulate loading with a timeout
    setTimeout(() => {
        loader.style.display = "none"; // Hide the loader
        mainContent.style.display = "block"; // Show the main content
    }, 3000); // Adjust the delay (in milliseconds) as needed
});


//pagination
document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll(".form-page");
    let currentPage = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.display = i === index ? "block" : "none";
        });
    }

    document.querySelectorAll(".next-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            if (currentPage < pages.length - 1) {
                currentPage++;
                showPage(currentPage);
            }
        });
    });

    document.querySelectorAll(".prev-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            if (currentPage > 0) {
                currentPage--;
                showPage(currentPage);
            }
        });
    });

    showPage(currentPage); // Initialize the first page
});




// ================  Hide input field based on the company selected =========================
document.addEventListener("DOMContentLoaded", () => {
    const companySelect = document.getElementById("company");
    const contractorCompanyField = document.getElementById("contractorCompanyField");
    const departmentField = document.getElementById("departmentField");

    // Function to toggle field visibility based on selected company
    function toggleFields() {
        const selectedCompany = companySelect.value;

        if (selectedCompany === "AGA") {
            // Hide Contractor Company field, show Department field
            contractorCompanyField.style.display = "none";
            departmentField.style.display = "block";
        } else if (selectedCompany === "CONTRACTOR") {
            // Show Contractor Company field, hide Department field
            contractorCompanyField.style.display = "block";
            departmentField.style.display = "none";
        } else {
            // Reset both fields if no valid company is selected
            contractorCompanyField.style.display = "none";
            departmentField.style.display = "none";
        }
    }

    // Attach event listener to company select dropdown
    companySelect.addEventListener("change", toggleFields);

    // Initialize field visibility on page load
    toggleFields();
});




// ============ Label will be hidden Once an item is selected =============
document.addEventListener("DOMContentLoaded", () => {
    const allSelectFields = document.querySelectorAll(".input-field select");

    allSelectFields.forEach((select) => {
        const label = select.parentElement.querySelector("label");

        // Function to toggle the visibility of the label
        function toggleLabel() {
            if (select.value !== "none") {
                label.style.display = "none"; // Hide the label
            } else {
                label.style.display = "block"; // Show the label
            }
        }

        // Attach change event listener to each select field
        select.addEventListener("change", toggleLabel);

        // Initialize label visibility on page load
        toggleLabel();
    });
});

