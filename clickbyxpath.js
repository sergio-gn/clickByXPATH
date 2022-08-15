const yourFunction = async () => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(500);
    var xPathRes = document.evaluate ('/html/body/div[2]/section/div/div/div/section/div/div[1]/div/div[8]/div/div/div/div/div[1]/label/div/span[1]/i', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    xPathRes.singleNodeValue.click();
    }
yourFunction()