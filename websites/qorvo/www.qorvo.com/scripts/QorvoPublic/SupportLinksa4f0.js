$(document).ready(function () {
    $("#contactUsBtn").click(function (e) {
        var filterVal = $("#filterSelect").val();
        var url = "";
        switch (filterVal) {
            case "Other":
            case "Request design assistance":
            case "Request support":
                url = "/support?formFilter=" + filterVal + "#FormSection";
                break;

            case "Request a quote":
            case "Request a sample":
            case "Request information":
                url = "/support/how-to-buy/" + filterVal.toLowerCase().replace(/\s/g, "-");
                break;

            case "Contact a sales representative":
                url = "/support/how-to-buy/contact-a-sales-rep";
                break;
        }
        if (url != "") {
            window.location = url;
        }
        e.preventDefault();
    });
})