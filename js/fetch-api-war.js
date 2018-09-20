document.getElementById('getColors').addEventListener('click', getApi);

function getApi() {
    fetch('api/colors.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h3 class="m-text-center"><span class="m-text-blue">C</span><span class="m-text-amber">O</span><span class="m-text-red">L</span><span class="m-text-dark">O</span><span class="m-text-light">R</span><span class="m-text-primary">S</span></h3>';
            data.forEach(function (color) {
                output += `
            <table class="m-full-width">
                <tr>
                    <th class="m-th">Color Name</th>
                    <th class="m-th">Hexacode</th>
		    <th class="m-th">Example</th>
                <tr>
                <tr>
                    <td class="m-td">${color.colorName}</td>
                    <td class="m-td">${color.hexacode}</td>
		    <td class="m-td" style="background-color:#${color.hexacode}"></td>
                </tr>
           </table> `;
            });
            document.getElementById('output-from-json').innerHTML = output;
        })
}
