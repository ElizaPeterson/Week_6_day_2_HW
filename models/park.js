const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.dinosaurCount = function(){
    return this.dinosaurs.length;
}

Park.prototype.addDinosaur = function(dinosaur){
    return this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur){
    return this.dinosaurs.pop(dinosaur)
}

Park.prototype.findMostAttractiveDinosaur = function(){
    let mostAttractiveDinosaur = this.dinosaurs[0];

    for (const dinosaur of this.dinosaurs){
        if (dinosaur.guestsAttractedPerDay > mostAttractiveDinosaur.guestsAttractedPerDay) {
            mostAttractiveDinosaur = dinosaur;
        }
    }

    return mostAttractiveDinosaur;
}

Park.prototype.findAllDinosaursInSpecies = function(species){
    let DinosaursInSpecies = [];

    for (const dinosaur of this.dinosaurs){
        if (dinosaur.species === species){
            DinosaursInSpecies.push(dinosaur);
        }
    }
    return DinosaursInSpecies;
}

Park.prototype.visitorsPerDay = function(){
    let visitsPerDay = 0;

    for (const dinosaur of this.dinosaurs){
        visitsPerDay += dinosaur.guestsAttractedPerDay
    }
    return visitsPerDay;
}

Park.prototype.visitorsPerYear = function(){
    return this.visitorsPerDay() * 365;
}

Park.prototype.totalRevenue = function(){
    return this.visitorsPerYear() * this.ticketPrice;
}

module.exports = Park;
