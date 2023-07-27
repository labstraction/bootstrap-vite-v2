export default class AppComponent{

    constructor(){}

    render(){
        const img = document.createElement('img');
        img.src = './images/papere3.jpg'
        document.getElementById('papere').appendChild(img);
    }

}