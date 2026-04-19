$(document).ready(function () {
    setGlobalMode(1);

    $('#SearchTerm').keyup(function (e) {
        if (!e.shiftKey)
            search(true);
    });

    function search(force) {
        var searchTerm = $("#SearchTerm").val();
        if (searchTerm.length < 2 && !(searchTerm.length > 1 && language == 'zh-CN')) {
            $("#suggestedTerms").html('');
            $("#suggestedTerms").hide();
            return; // > 2 char
        }

        $.ajax({
            type: "Get",
            url: suggestedListUrl,
            data: { keyword: searchTerm },
            success: function (data) {
                if ($(data).find("li").length <= 0) {
                    $("#suggestedTerms").html('');
                    $("#suggestedTerms").hide();
                    return;
                }

                $("#suggestedTerms").html(data);
                $("#suggestedTerms").show();
            }
        });
    }

    $(document).on('click', '.suggestedTerm', function (e) {
        var searchTerm = this.val();
        $("#SearchTerm").val(searchTerm);
        $(".pri-nav-searchbtn").click();
    });

    $(document).on('click', '#GlobalSearch', function (e) {
        $("#SearchTerm").removeClass("error-state");
        $("#SearchTerm").attr("placeholder", $("#GlobalSearchPlaceholder").val());
        var searchTerm = $("#SearchTerm").val();
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
                $("#SearchTerm").blur();

                if (result.length == 0 || result == errorMessage) {
                    $("#SearchTerm").addClass("error-state");
                    $("#SearchTerm").val('');
                    $("#SearchTerm").val(errorMessage);
                    return false;
                }
                if ((result.length > 0 && result.length < searchTextLength) || result == errorMessageMinimum) {
                    $("#SearchTerm").addClass("error-state");
                    $("#SearchTerm").val('');
                    $("#SearchTerm").val(errorMessageMinimum);
                    return false;
                }
                if ((result.length > searchTextLength || result.length == searchTextLength) && result != errorMessage && result != errorMessageMinimum) {
                    var cleanSearchTerm = result.replace(/&quot;/g, '\"');
                    cleanSearchTerm = cleanSearchTerm.replace(/&amp;/g, '&');
                    $("#SearchTerm").val(cleanSearchTerm);
                    $("#globalSearchForm").submit();
                }
            },
            error: function (result) {
            }
        });
    });

});


$(document).on('focus', '#SearchTerm', function (e) {
    if (($("#SearchTerm").val() == $("#GlobalSearchValidationErrorMessage").val()) || ($("#SearchTerm").val() == $("#GlobalSearchValidationErrorMessageMinimum").val()))
        $("#SearchTerm").val('');
});

function SuggestedItemSelection(searchTerm) {
    var mode = $("#global-search-value").attr('value');
    setGlobalMode(mode);
    var modeVariable;
    if (mode == 3) {
        modeVariable = "des";
    }
    else {
        modeVariable = "key";
    }
    urlHash = window.location.protocol + "//" + window.location.host + SearchResultsPage + "?" + modeVariable + '=' + searchTerm + "&mode=" + mode;
    window.open(urlHash, "_self");
}

$("#searchMode").on("change", function (e) {
    $("#global-search-value").val(this.value);
    switch (this.value) {
        case "1":
            $("#SearchTerm").attr('name', 'key');
            break;
        case "2":
            $("#SearchTerm").attr('name', 'key');
            break;
        case "3":
            $("#SearchTerm").attr('name', 'des');
            break;
        case "4":
            $("#SearchTerm").attr('name', 'key');
            break;
        default:
            $("#SearchTerm").attr('name', 'key');
            break;
    }
});

function setGlobalMode(e) {
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

