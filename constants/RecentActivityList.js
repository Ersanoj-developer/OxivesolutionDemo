let recentActivtyList = [{
        name: 'Mr.Muhammed Ali',
        orderTitle: 'Order a breed',
        personImage: './images/profile_pics/1.jpg',
        recordArrivalTime: '3 min ago'

    },
    {
        name: 'Mr.Muhammed Asif',
        orderTitle: 'Order a breed',
        personImage: './images/profile_pics/2.jpg',
        recordArrivalTime: '23 hr ago'

    },
    {
        name: 'Mr.Muhammed khan',
        orderTitle: 'Order a breed',
        personImage: './images/profile_pics/3.jpg',
        recordArrivalTime: '43 min ago'

    },
    {
        name: 'Mr.Muhammed shan',
        orderTitle: 'Order a breed',
        personImage: './images/profile_pics/1.jpg',
        recordArrivalTime: '55 min ago'

    },
    {
        name: 'Mr.Muhammed Alisf',
        orderTitle: 'Order a breed',
        personImage: './images/profile_pics/1.jpg',
        recordArrivalTime: '1 hr ago'

    },
    {
        name: 'Mr.Dilshad Erani',
        orderTitle: 'Order a breed',
        personImage: './images/profile_pics/1.jpg',
        recordArrivalTime: '2 hr min ago'

    },
]

//    <div class = "record" >
//        <div class = "record_info" >
//         <img src = "./images/profile_pics/1.webp" alt = "" class = "person_image" />
//         <div class = "person_data">
//                  <h2 class = "person_name" > Agerotunm Houstianianum </h2> 
//                  <p class = "person_record_title" > Order a new plant </p> 
//         </div> 
//        </div> 
//        <div class = "record_arrival_time" > 3 min ago </div> 
//     </div> 

let addRecord = (data) => {

    let recordCotainer = document.querySelector('.activity_list');

    let record = document.createElement('div');
    record.classList.add("record");

    let recordInfo = document.createElement('div');
    recordInfo.classList.add("record_info");

    let personImage = document.createElement('img');
    personImage.classList.add("person_image");
    personImage.setAttribute("src", data.personImage);

    let personData = document.createElement('div');
    personData.classList.add("person_data")

    let personName = document.createElement('h2');
    personName.classList.add("person_name");
    personName.textContent = data.name;

    let personRecordTitle = document.createElement('p');
    personRecordTitle.classList.add("person_record_title");
    personRecordTitle.textContent = data.orderTitle;

    let recordArrivalTime = document.createElement('div');
    recordArrivalTime.classList.add("record_arrival_time");
    recordArrivalTime.textContent = data.recordArrivalTime;

    // append child for build the perfect order div
    recordInfo.append(personImage);

    personData.append(personName);
    personData.append(personRecordTitle);

    recordInfo.append(personData);

    record.append(recordInfo);
    record.append(recordArrivalTime);


    recordCotainer.append(record);
}

recentActivtyList.map((data) => {
    addRecord(data)
})