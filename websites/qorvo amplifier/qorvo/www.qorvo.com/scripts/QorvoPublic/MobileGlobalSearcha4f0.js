$(document).ready(function () {
    setGlobalMode(1);

    $('#mobileSearchTerm').keyup(function (e) {
        if (!e.shiftKey)
            search(true);
    });

    function search(force) {        
        var mobileSearchTerm = $("#mobileSearchTerm").val();
        if (mobileSearchTerm.length < 3) {
            $("#mobileSuggestedTerms").html('');
            $("#mobileSuggestedTerms").hide();
            return; // > 2 char
        }

        $.ajax({
            type: "Get",
            url: suggestedListUrl,
            data: { keyword: mobileSearchTerm },
            success: function (data) {
                if ($(data).find("li").length <= 0) {
                    $("#mobileSuggestedTerms").html('');
                    $("#mobileSuggestedTerms").hide();
                    return;
                }

                $("#mobileSuggestedTerms").html(data);
                $("#mobileSuggestedTerms").show();
            }
        });
    }

    $(document).on('focus', '#mobileSearchTerm', function (e) {
        if (($("#mobileSearchTerm").val() == $("#GlobalSearchValidationErrorMessage").val()) || ($("#mobileSearchTerm").val() == $("#GlobalSearchValidationErrorMessageMinimum").val())) {
            $("#mobileSearchTerm").val('');
        }
    });

    $(document).on('click', '.mobileSearchTerm', function (e) {
        var mobileSearchTerm = this.val();
        $("#mobileSearchTerm").val(mobileSearchTerm);
        $("#mobileGlobalSearch").click();
    });
    $("#mobileGlobalSearch").click(function (e) {
        $("#mobileSearchTerm").removeClass("error-state");
        $("#mobileSearchTerm").attr("placeholder", $("#MobileGlobalSearchPlaceholder").val());
        var searchTerm = $("#mobileSearchTerm").val();
        var errorMessage = $("#GlobalSearchValidationErrorMessage").val();
        var errorMessageMinimum = $("#GlobalSearchValidationErrorMessageMinimum").val();
        e.preventDefault();
        var request = $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: searchBoxValidationUrl,
            data: "{'searchBoxText':" + JSON.stringify(searchTerm) + "}",
            dataType: "json",
            success: function (result) {
                if (result.length == 0 || result == errorMessage) {
                    $("#mobileSearchTerm").addClass("error-state");
                    $("#mobileSearchTerm").val('');
                    $("#mobileSearchTerm").attr("placeholder", $("#MobileGlobalSearchValidationErrorMessage").val());
                    return false;
                }
                if ((result.length > 0 && result.length < 3) || result == errorMessageMinimum) {
                    $("#mobileSearchTerm").addClass("error-state");
                    $("#mobileSearchTerm").val('');
                    $("#mobileSearchTerm").val(errorMessageMinimum);
                    return false;
                }
                if ((result.length > 3 || result.length == 3) && result != errorMessage && result != errorMessageMinimum) {
                    var cleanSearchTerm = result.replace(/&quot;/g, '\"');
                    cleanSearchTerm = cleanSearchTerm.replace(/&amp;/g, '&');
                    $("#mobileSearchTerm").val(cleanSearchTerm);
                    $("#mobileGlobalSearch").submit();
                }
                $("#mobileSearchTerm").blur();
            }
        });
    });
});
function SuggestedItemSelection(searchTerm) {
    var mode = $("#global-search-value").attr('value');
    setGlobalMode(mode);
    var modeVariable;
    if (mode == 3)
    { modeVariable = "des"; }
    else
    { modeVariable = "key"; }
    urlHash = window.location.protocol + "//" + window.location.host + SearchResultsPage + "?" + modeVariable + '=' + searchTerm + "&mode=" + mode;
    window.open(urlHash, "_self");
}
function setGlobalMode(mode) {
    $("#global-search-value").val(mode);

    $(".pri-nav-searchinp").each(function () {
        switch (mode) {
            case 1:
                $(this).attr('name', 'key');
                break;
            case 2:
                $(this).attr('name', 'key');
                break;
            case 3:
                $(this).attr('name', 'des');
                break;
            case 4:
                $(this).attr('name', 'key');
                break;
            default:
                $(this).attr('name', 'key');
                break;
        }
    })
}