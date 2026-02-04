const buildMap = {
    "1.21.11": 39, "1.21.10": 89, "1.21.9": 59, "1.21.8": 60, "1.21.7": 32, 
    "1.21.6": 48, "1.21.5": 114, "1.21.4": 232, "1.21.3": 83, "1.21.1": 133, 
    "1.21": 130, "1.20.6": 151, "1.20.5": 22, "1.20.4": 499, "1.20.2": 318, 
    "1.20.1": 196, "1.20": 17, "1.19.4": 550, "1.19.3": 448, "1.19.2": 307, 
    "1.19.1": 111, "1.19": 81, "1.18.2": 388, "1.18.1": 216, "1.18": 66, 
    "1.17.1": 411, "1.17": 79, "1.16.5": 794, "1.16.4": 416, "1.16.3": 253, 
    "1.16.2": 189, "1.16.1": 138, "1.15.2": 393, "1.15.1": 62, "1.15": 21, 
    "1.14.4": 245, "1.14.3": 134, "1.14.2": 107, "1.14.1": 50, "1.14": 17, 
    "1.13.2": 657, "1.13.1": 386, "1.13": 173, "1.12.2": 1620, "1.12.1": 1204, 
    "1.12": 1169, "1.11.2": 1106, "1.10.2": 918, "1.9.4": 775, "1.8.8": 445
};

function findBuild() {
    const version = document.getElementById('version').value.trim();
    const resultDiv = document.getElementById('result');

    if (!version) {
        resultDiv.textContent = "Please enter a version!";
        return;
    }

    if (buildMap[version]) {
        const buildNumber = buildMap[version];
        const link = `https://papermc.io/api/v2/projects/paper/versions/${version}/builds/${buildNumber}/downloads/paper-${version}-${buildNumber}.jar`;
        resultDiv.innerHTML = `Latest Paper build for <strong>${version}</strong>:<br>
                               Build #<strong>${buildNumber}</strong> - 
                               <a href="${link}" target="_blank" style="color:#00f6ff">Download</a>`;
    } else {
        resultDiv.textContent = `No build found for version ${version}`;
    }
}
