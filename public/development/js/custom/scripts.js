$("#calculateProbability").on('click', function(e){
    let htmlOfButton = $("#calculateProbability").html();

    showLoader("calculateProbability");
    
    let url = $("#url").val();

    if(url == ""){
        PNotify.error({
            title: "An error occured",
            text: "Found the url to find the probability of phishing as empty. Please enter a URL address."
        });

        hideLoader("calculateProbability", htmlOfButton);

        return false;
    }

    $.ajax({
        type: "POST",
        url: modelApi + "/predict",
        data: JSON.stringify({
            "url": url,
        }),
        success: function(result){
            hideLoader("calculateProbability", htmlOfButton);
            if(result.status != "200"){
                PNotify.error({
                    title: "An error occured",
                    text: `An error occured while calculating the probability. ${result.message}`
                });

                return false;
            } else {
                PNotify.success({
                    title: "Calculated probability successfully",
                    text: `${result.message}`
                });

                $("#calculatedProbabilityPara").show();
                $("#calculatedProbability").text(
                    parseFloat(result.data.probability).toFixed(3)
                    + " or " + ((parseFloat(result.data.probability).toFixed(3)) * 100).toFixed(3) 
                    + "% chance that the url is trying to phish."
                );

                return true;
            }
        },
        error: function(result){
            hideLoader("calculateProbability", htmlOfButton);
            result = result.responseJSON;

            PNotify.error({
                title: "An error occured",
                text: `An error occured while calculating the probability. ${result.message}`
            });
        }
    })
});