const reachDestination = (distance, speed) => {
const arrivalTime = Math.ceil((distance / speed) * 2) / 2;
return `I should be there in ${arrivalTime} hours.`;
};
module.exports = reachDestination;
