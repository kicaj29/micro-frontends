var loadedApp = [];

function loadMicroApp(appName) {
  let microApp = '';
  let microFolder = '';

  let mainEle = document.querySelector(".content");
  mainEle.innerHTML = '';

  // this switch could be eliminated by using convention naming
  switch (appName) {
  case "customers":
    microApp = 'customers-app';
    microFolder = 'customersApp';
    break;
  case "invoices":
    microApp = 'invoices-app';
    microFolder = 'invoicesApp';
    break;
  default:
    return false;
  }

  const found = loadedApp.find(function(app) {
    return app === appName;
  });

  if (found === undefined) {
    const miniApp = document.createElement(microApp);
    mainEle.appendChild(miniApp);

    const script = document.createElement("script");
    try {
      script.src = "apps/" + microFolder + "/" + microFolder + "-elements-es2015.js";
    } catch(err) {
      script.src = "apps/" + microFolder + "/" + microFolder + "-elements-es5.js";
    }

    mainEle.appendChild(script);
    loadedApp.push(appName);
  } else {
    const miniApp = document.createElement(microApp);
    mainEle.appendChild(miniApp);
  }
}

function getAppName() {
  const urlArr = window.document.location.href.split('#');
  if (urlArr.length === 2) {
    let retVal = '';
    retVal = urlArr[1].split('/')[1];
    console.log(retVal);
    return retVal;
  } else {
    return '';
  }
}

function loadHomePage() {
  let mainEle = document.querySelector(".content");
  mainEle.innerHTML = "<div>HOME PAGE</div>";
}

window.onhashchange = function() {
  (getAppName() != '') ? loadMicroApp(getAppName()) : loadHomePage();
}

window.onload = function() {
  (getAppName() != '') ? loadMicroApp(getAppName()) : loadHomePage();
}
