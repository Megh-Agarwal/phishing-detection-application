function showLoader(id){
    $("#" + id).attr("disabled", true);
    $("#" + id).html(
        `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...`
    );
}

function hideLoader(id, html){
    $("#" + id).removeAttr("disabled");
    $("#" + id).html(html);
}