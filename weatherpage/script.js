
//weather.visualcrossing.com weather api
function fetchAPI()
{
 
 fetch(url="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/india?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=MVEQTUC4VEGZQ3NRLKZG6PEPR&options=beta&contentType=json")
 .then((res)=>{
    res.json().then((data)=>{
        renderUI(data);
    })
 })
}
//  fetchAPI()
function renderUI(data)
{
    const days=data.days;
    console.log(data);

    // const row=document.createElement("tr");
    // const childRow = document.createElement("row");
    // const cell1=document.createElement("th");
    // cell1.innerText='Date';
    // row.appendChild(cell1);

    // const cell2=document.createElement("th");
    // cell2.innerText='Maximum Temperature';
    // row.appendChild(cell2);
 
    // const cell3=document.createElement("th");
    // cell3.innerText='Minimum Temperature';
    // row.appendChild(cell3);

    // root.append(row);
    
    const row=document.createElement("tr");
    const childRow = document.createElement("row");
    const cell1=document.createElement("th");
    const cell2=document.createElement("th");
    const cell3=document.createElement("th");
    root.append(row);

    for(let i=0;i<days.length;i++)
    { 
        const d=days[i];
    // cell1.innerText='Date';
    
    // cell2.innerText='Maximum Temperature';
    
    // cell3.innerText='Minimum Temperature';
    
    const days=data.days;
    // const
    cell1.innerText=a.cell1;
    cell2.innerText=a.cell2;
    cell3.innerText=a.cell3;
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
}
    // console.log(data);

    

}
// renderUI();
fetchAPI();