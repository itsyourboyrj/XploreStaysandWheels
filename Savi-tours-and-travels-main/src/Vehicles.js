const AllVehicles = [
    {
        id:1,
        category:"bike, all",
        name:"Yamaha r15",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://imgd.aeplcdn.com/664x374/n/cw/ec/103795/yzf-r15-right-front-three-quarter-12.jpeg?isig=0&q=80",
        price: ["199", "799", "999", "1499", "35000"]
    },
    {
        id:2,
        category:"5seater, all",
        name:"Maruti Suzuki Baleno",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://static.autox.com/uploads/2022/03/2022-Maruti-Suzuki-Baleno-design1.jpg",
        price: ["250", "999", "1499", "2399", "N/A"]

    },
    {
        id:3,
        category:"5seater, all",
        name:"Tata Altroz",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/32597/altroz-exterior-left-front-three-quarter.jpeg?q=80",
        price: ["250", "899", "1499", "2399", "N/A"]
    },
    {
        id:4,
        category:"5seater, all",
        name:"Maruti Suzuki Swift Dzire",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift-Dzire/10243/1686044076724/front-left-side-47.jpg?impolicy=resize&imwidth=420",
        price: ["250", "899", "1599", "2499", "N/A"]
    },
    {
        id:5,
        category:"5seater, all",
        name:"Toyota Glanza",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://imgd.aeplcdn.com/370x208/n/cw/ec/112839/glanza-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
        price: ["250", "899", "1599", "2499", "N/A"]
    },
    {
        id:6,
        category:"5seater, all",
        name:"Tata Nexon",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220923031831_Nexon.jpg&w=700&q=90&c=1",
        price: ["280", "1099", "1699", "2699", "N/A"]
    },
    {
        id:7,
        category:"5seater, all",
        name:"Kia Sonet",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/sonet/sonet_gallery/exterior/sonet_gallery_2.jpg",
        price: ["280", "1099", "1699", "2799", "50000"]
    },
    {
        id:8,
        category:"5seater, all",
        name:"Maruti Suzuki Fronx",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/130591/fronx-exterior-left-front-three-quarter-2.jpeg?isig=0&q=80",
        price: "2800"
    },
    {
        id:9,
        category:"5seater, all",
        name:"Tata Punch",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Punch/10681/1691392713058/exterior-image-177.jpg?impolicy=resize&imwidth=420",
        price: "2500"
    },
    {
        id:10,
        category:"5seater, all",
        name:"Hyundai Xcent",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://imgd.aeplcdn.com/1056x594/n/2fhd7sa_1471629.jpg?q=80",
        price: "2500"
    },
    {
        id:11,
        category:"5seater, all",
        name:"Hyundai Aura",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/139133/aura-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
        price: "2500"
    },
    {
        id:12,
        category:"5seater, all",
        name:"Maruti Suzuki Ciaz",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://i.pinimg.com/564x/8e/22/4c/8e224c0fe4a5e50740a5cab30b76116e.jpg",
        price: ["280", "1199", "1699", "2599", "N/A"]
    },
    {
        id:13,
        category:"5seater, all",
        name:"Hyundai i20",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/i20-n-line/Gallery/Hyundai-i20Nline-Gallery-Mid-PC-1120x600-3.jpg",
        price: ["250", "899", "1599", "2499", "N/A"]
    },
    {
        id:14,
        category:"5seater, all",
        name:"Nissan Magnite",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://imgd.aeplcdn.com//642x361//n/cw/ec/53833/front-view8.jpeg?wm=1&q=75",
        price: ["250", "999", "1699", "2599", "55000"]
    },
    {
        id:15,
        category:"5seater, all",
        name:"Renault Kiger",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://images.alphacoders.com/117/1172861.jpg",
        price: ["250", "899", "1599", "2499", "N/A"]
    },
    {
        id:16,
        category:"luxury, 5seater, all",
        name:"Mahindra Thar",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/40087/thar-exterior-right-front-three-quarter-32.jpeg?q=80",
        price: ["N/A", "1699", "2299", "4099", "N/A"]
    },
    {
        id:17,
        category:"luxury, 7seater, all",
        name:"Toyota Fortuner",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://wallpapers.com/images/hd/toyota-fortuner-bs-6-model-i1ihnfnvddmlu5zw.jpg",
        price: "4700"
    },
    {
        id:18,
        category:"luxury, 7seater, all",
        name:"Ford Endeavour",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://imgd.aeplcdn.com/1200x900/cw/ec/38355/Ford-Endeavour-Facelift-Exterior-148246.jpg?wm=0",
        price: "4500"
    },
    {
        id:19,
        category:"bike, all",
        name:"Royal Enfield Bullet",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://imgd.aeplcdn.com/1280x720/n/cw/ec/127499/bullet-right-front-three-quarter-3.jpeg?isig=0",
        price: ["199", "799", "999", "1499", "N/A"]
    },
    {
        id:20,
        category:"bike, all",
        name:"Honda Activa",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://imgd.aeplcdn.com/1280x720/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg",
        price: ["149", "499", "679", "799", "12000"]
    },
    {
        id:21,
        category:"7seater, all",
        name:"Maruti Suzuki XL6",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://images.firstpost.com/wp-content/uploads/2019/09/nexaxl61280.jpg?im=FitAndFill=(596,336)",
        price: ["349", "1399", "1999", "3199", "N/A"]
    },
    {
        id:22,
        category:"5seater, all",
        name:"suzuki Ignis",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://imgd.aeplcdn.com/664x374/cw/ec/38611/Maruti-Suzuki-Ignis-Right-Front-Three-Quarter-149591.jpg?wm=0&q=80",
        price: ["250", "899", "1599", "2499", "N/A"]
    },
    {
        id:23,
        category:"bike, all",
        name:"TVS Jupiter",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://imgd.aeplcdn.com/664x374/n/cw/ec/46749/jupiter-right-front-three-quarter.jpeg?q=80",
        price: ["149", "499", "679", "799", "12000"]
    },
    {
        id:24,
        category:"bike, all",
        name:"Royal Enfield Hunter",
        description:["Petrol engine", "5 - Gear Manual Transmisison", "Fastag Available", "Door-step Delivery", "Built-in Stereo Speaker", "5 seater (comfortable for long trips with 5 peoples)", "Easy Booking option", "Security Features like Gps Tracking and Speed Limiter Installed"],
        imageUrl:"https://www.advrider.com/wp-content/uploads/2023/04/042523-Royal-Enfield-Hunter-350-A4_04857-scaled.jpg",
        price: ["199", "799", "999", "1499", "35000"]
    },
]

export default AllVehicles;