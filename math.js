function getDistanceFromLatLonInKm(from,to) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(to[0]-from[0]);  // deg2rad below
    var dLon = deg2rad(to[1]-from[1]); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(from[0])) * Math.cos(deg2rad(to[0])) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return Math.round(d);
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }


  function duration(distance, speed){
      return distance/speed * 60 * 60 * 1000;
      
    
    }
    
    // console.log(duration(getDistanceFromLatLonInKm(SIA, layrcraft),standardairplane));
    // console.log(getDistanceFromLatLonInKm(SIA, layrcraft));